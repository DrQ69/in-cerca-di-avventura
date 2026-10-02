import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL=process.env.ICA_BASE_URL||'http://127.0.0.1:8000';
const outDir=process.env.HEADER_QA_DIR||'artifacts/header-consistency';
const pages=[
  ['home','/beta/'],
  ['adunanze','/beta/adunanze/'],
  ['nazionale','/beta/adunanze/nazionale/'],
  ['cronache','/beta/cronache/'],
  ['avventurieri','/beta/avventurieri/'],
  ['alleanze','/beta/alleanze/'],
  ['tesori','/beta/tesori/'],
];
const viewports=[
  {name:'mobile-390',width:390,height:844},
  {name:'desktop-1280',width:1280,height:800},
];

await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});

function near(a,b,t=1){return Math.abs(a-b)<=t;}

try{
  for(const viewport of viewports){
    const results=[];
    for(const [name,path] of pages){
      const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
      const errors=[];
      page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
      page.on('pageerror',e=>errors.push(String(e)));
      await page.goto(baseURL+path,{waitUntil:'networkidle',timeout:30000});
      await page.waitForSelector('.ica-main-banner',{timeout:10000});
      await page.evaluate(()=>document.fonts?.ready);

      const result=await page.evaluate(()=>{
        const desktop=window.innerWidth>=1024;
        const header=document.querySelector('.ica-main-banner');
        const surface=document.querySelector(desktop?'.ica-main-banner__desktop':'.ica-main-banner__mobile');
        const art=document.querySelector(desktop?'.ica-main-banner__art':'.ica-main-banner__mobile-brand img');
        const navLink=document.querySelector(desktop?'.ica-main-banner__link':'.ica-main-banner__mobile-menu a');
        const adunanzeLinks=[...document.querySelectorAll('.ica-main-banner a')].filter(a=>a.textContent.trim()==='Adunanze');
        const hr=header.getBoundingClientRect();
        const sr=surface.getBoundingClientRect();
        const ar=art.getBoundingClientRect();
        const hs=getComputedStyle(header);
        const ns=getComputedStyle(navLink);
        return {
          header:{x:hr.x,y:hr.y,width:hr.width,height:hr.height,background:hs.backgroundImage},
          surface:{x:sr.x,y:sr.y,width:sr.width,height:sr.height},
          art:{x:ar.x,y:ar.y,width:ar.width,height:ar.height,source:desktop?getComputedStyle(art).backgroundImage:art.getAttribute('src')},
          navFont:ns.fontFamily,
          navWeight:ns.fontWeight,
          navTransform:ns.textTransform,
          navLetterSpacing:ns.letterSpacing,
          adunanzeTargets:adunanzeLinks.map(a=>new URL(a.href,location.href).pathname),
        };
      });

      if(errors.length) throw new Error(`${viewport.name}/${name}: console errors: ${errors.join(' | ')}`);
      if(!result.adunanzeTargets.length||result.adunanzeTargets.some(path=>!path.endsWith('/beta/adunanze/nazionale/'))){
        throw new Error(`${viewport.name}/${name}: Adunanze must route directly to national events: ${JSON.stringify(result.adunanzeTargets)}`);
      }
      results.push({name,...result});
      await page.screenshot({path:`${outDir}/${viewport.name}-${name}.png`,fullPage:false,animations:'disabled'});
      await page.close();
    }

    const reference=results[0];
    for(const current of results.slice(1)){
      const h=current.header,rh=reference.header,s=current.surface,rs=reference.surface,a=current.art,ra=reference.art;
      if(!near(h.x,rh.x)||!near(h.y,rh.y)||!near(h.width,rh.width)||!near(h.height,rh.height)){
        throw new Error(`${viewport.name}/${current.name}: banner host geometry differs from Home`);
      }
      if(!near(s.x,rs.x)||!near(s.y,rs.y)||!near(s.width,rs.width)||!near(s.height,rs.height)){
        throw new Error(`${viewport.name}/${current.name}: active banner surface geometry differs from Home`);
      }
      if(!near(a.x,ra.x)||!near(a.y,ra.y)||!near(a.width,ra.width)||!near(a.height,ra.height)){
        throw new Error(`${viewport.name}/${current.name}: banner/brand art geometry differs from Home`);
      }
      if(h.background!==rh.background) throw new Error(`${viewport.name}/${current.name}: banner host background differs from Home`);
      if(current.navFont!==reference.navFont||current.navWeight!==reference.navWeight||current.navTransform!==reference.navTransform||current.navLetterSpacing!==reference.navLetterSpacing){
        throw new Error(`${viewport.name}/${current.name}: navigation typography differs from Home`);
      }
    }

    await fs.writeFile(`${outDir}/${viewport.name}.json`,JSON.stringify(results,null,2),'utf8');
  }
}finally{
  await browser.close();
}
