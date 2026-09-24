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
      await page.waitForSelector('.site-nav .logo-host img',{timeout:10000});
      await page.evaluate(()=>document.fonts?.ready);

      const result=await page.evaluate(()=>{
        const header=document.querySelector('.site-nav');
        const host=document.querySelector('.logo-host');
        const logo=document.querySelector('.logo-host img');
        const navLink=window.innerWidth>=1024
          ? document.querySelector('.nav-side a')
          : document.querySelector('.mobile-nav a');
        const adunanzeLinks=[...document.querySelectorAll('.site-nav a')].filter(a=>a.textContent.trim()==='Le Adunanze');
        const hr=header.getBoundingClientRect();
        const lr=logo.getBoundingClientRect();
        const hs=getComputedStyle(header);
        const ls=getComputedStyle(logo);
        const ns=getComputedStyle(navLink);
        return {
          header:{x:hr.x,y:hr.y,width:hr.width,height:hr.height,background:hs.backgroundImage},
          logo:{x:lr.x,y:lr.y,width:lr.width,height:lr.height,src:logo.getAttribute('src'),filter:ls.filter},
          hostClass:host?.className||'',
          navFont:ns.fontFamily,
          navWeight:ns.fontWeight,
          navTransform:ns.textTransform,
          navLetterSpacing:ns.letterSpacing,
          adunanzeTargets:adunanzeLinks.map(a=>new URL(a.href,location.href).pathname),
        };
      });
      if(errors.length) throw new Error(`${viewport.name}/${name}: console errors: ${errors.join(' | ')}`);
      if(!result.adunanzeTargets.length||result.adunanzeTargets.some(path=>!path.endsWith('/beta/adunanze/nazionale/'))){
        throw new Error(`${viewport.name}/${name}: Le Adunanze must route directly to national events: ${JSON.stringify(result.adunanzeTargets)}`);
      }
      results.push({name,...result});
      await page.screenshot({path:`${outDir}/${viewport.name}-${name}.png`,fullPage:false,animations:'disabled'});
      await page.close();
    }

    const reference=results[0];
    for(const current of results.slice(1)){
      const h=current.header, rh=reference.header;
      const l=current.logo, rl=reference.logo;
      if(!near(h.x,rh.x)||!near(h.y,rh.y)||!near(h.width,rh.width)||!near(h.height,rh.height)){
        throw new Error(`${viewport.name}/${current.name}: header geometry differs from Home`);
      }
      if(!near(l.x,rl.x)||!near(l.y,rl.y)||!near(l.width,rl.width)||!near(l.height,rl.height)){
        throw new Error(`${viewport.name}/${current.name}: logo geometry differs from Home`);
      }
      if(h.background!==rh.background) throw new Error(`${viewport.name}/${current.name}: banner background differs from Home`);
      if(l.filter!==rl.filter) throw new Error(`${viewport.name}/${current.name}: logo rendering differs from Home`);
      if(current.navFont!==reference.navFont||current.navWeight!==reference.navWeight||current.navTransform!==reference.navTransform||current.navLetterSpacing!==reference.navLetterSpacing){
        throw new Error(`${viewport.name}/${current.name}: navigation typography differs from Home`);
      }
    }

    await fs.writeFile(`${outDir}/${viewport.name}.json`,JSON.stringify(results,null,2),'utf8');
  }
}finally{
  await browser.close();
}
