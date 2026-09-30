import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const origin=process.env.ICA_BASE_URL||'http://127.0.0.1:8000';
const routes=['/beta-v2/','/beta-v2/adunanze/','/beta-v2/adunanze/nazionale/','/beta-v2/cronache/','/beta-v2/avventurieri/','/beta-v2/alleanze/'];
const widths=[390,768,1024,1280,1536,1920];
const out='artifacts/beta-v2';
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true});
let checks=0;
try{
 for(const width of widths){
  for(const route of routes){
   // All sections at desktop & mobile; intermediate widths tested on Home.
   if(width!==390&&width!==1536&&route!=='/beta-v2/')continue;
   const page=await browser.newPage({viewport:{width,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
   const errors=[];page.on('pageerror',e=>errors.push(String(e)));
   await page.goto(origin+route,{waitUntil:'domcontentloaded',timeout:45000});
   await page.locator('.ica-banner .ica-banner__image').first().waitFor({state:'attached',timeout:15000});
   await page.evaluate(()=>document.fonts.ready);
   const metrics=await page.evaluate(()=>{
     const banner=document.querySelector('.ica-banner');
     const art=[...banner.querySelectorAll('.ica-banner__image')].map(im=>({naturalWidth:im.naturalWidth,naturalHeight:im.naturalHeight,complete:im.complete}));
     const labels=[...banner.querySelectorAll('.ica-banner__link .ica-nav-label')].map(span=>{
       const rect=span.getBoundingClientRect(),b=banner.getBoundingClientRect();
       return {name:span.textContent.trim(),x:(rect.left+rect.width/2-b.left)/b.width*1536,y:(rect.top+rect.height/2-b.top)/b.height*512};
     });
     const mobile=getComputedStyle(document.querySelector('.ica-mobile-nav')).display!=='none';
     return {width:document.documentElement.scrollWidth,bodyWidth:window.innerWidth,art,labels,mobile,links:[...banner.querySelectorAll('.ica-banner__link[href]')].map(x=>x.href),mobileHeights:[...document.querySelectorAll('.ica-mobile-nav a,.ica-mobile-nav button')].map(x=>x.getBoundingClientRect().height)};
   });
   if(errors.length)throw Error(route+'/'+width+' page errors: '+errors.join('; '));
   if(metrics.width>metrics.bodyWidth+2)throw Error(route+'/'+width+' horizontal overflow '+metrics.width);
   if(metrics.art.some(im=>!im.complete||im.naturalWidth!==1536||im.naturalHeight!==512))throw Error(route+'/'+width+' missing/incorrect banner asset '+JSON.stringify(metrics.art));
   if(metrics.links.length!==5||metrics.links.some(x=>!x.includes('/beta-v2/')))throw Error(route+'/'+width+' navigation leak outside beta-v2');
   if(width<=900){
     if(!metrics.mobile||metrics.mobileHeights.some(h=>h<44))throw Error(route+'/'+width+' mobile nav issue '+JSON.stringify(metrics));
   }else{
     if(metrics.mobile||metrics.labels.length!==6)throw Error(route+'/'+width+' desktop nav issue');
     if(width===1536){
       const approved={Adunanza:[216.63,148.27],Avventurieri:[191.99,391.53],Alleanze:[1332.66,150.14]};
       for(const label of metrics.labels){
         if(approved[label.name]&&Math.max(Math.abs(label.x-approved[label.name][0]),Math.abs(label.y-approved[label.name][1]))>1.2)throw Error(route+': LOCKED label moved '+JSON.stringify(label));
       }
       for(const [name,expected] of [['instagram','instagram'],['youtube','youtube']]){
         const hotspot=page.locator('[data-social="'+name+'"]').first();
         await hotspot.hover();
         if(await page.locator('.ica-banner').getAttribute('data-social-state')!==expected)throw Error(route+' '+name+' hover activation failed');
       }
       await page.mouse.move(5,5);
       if(await page.locator('.ica-banner').getAttribute('data-social-state')!=='')throw Error(route+' social hover remains active');
     }
   }
   const filename=route.replace(/[^a-z0-9]/gi,'_')||'root';
   await page.screenshot({path:out+'/'+filename+'_'+width+'.png',fullPage:false,animations:'disabled'});
   await page.close();checks++;
  }
 }
 console.log('BETA V2 rendered browser QA PASS: '+checks+' page/viewport combinations; image decoding, six-label layout, approved locked positions, mobile fallback, links, social hover and no overflow.');
}finally{await browser.close();}
