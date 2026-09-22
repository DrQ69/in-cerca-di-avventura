import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL = process.env.ICA_BASE_URL || 'http://127.0.0.1:8000';
const outDir = process.env.AVVENTURIERI_SCREENSHOT_DIR || 'artifacts/avventurieri-visual';
const viewports = [
  { name:'mobile-360', width:360, height:800, expected:1 },
  { name:'mobile-390', width:390, height:844, expected:1 },
  { name:'tablet-768', width:768, height:1024, expected:2 },
  { name:'compact-1024', width:1024, height:768, expected:3 },
  { name:'desktop-1280', width:1280, height:800, expected:3 },
  { name:'desktop-1440', width:1440, height:900, expected:3 },
  { name:'large-1920', width:1920, height:1080, expected:3 },
];

await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});

try{
  for(const viewport of viewports){
    const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
    const errors=[];
    page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
    page.on('pageerror',err=>errors.push(String(err)));

    await page.goto(`${baseURL}/beta/avventurieri/`,{waitUntil:'networkidle',timeout:30000});
    await page.waitForFunction(()=>document.querySelectorAll('.player-card').length>0,null,{timeout:10000});

    const initial=await page.evaluate(()=>{
      const cards=[...document.querySelectorAll('.player-card')];
      const nicknames=cards.map(card=>card.querySelector('h3')?.textContent?.trim()||'');
      const body=document.body,html=document.documentElement;
      return {
        visibleCards:cards.length,
        nicknames,
        countText:document.querySelector('#player-count')?.textContent||'',
        nextDisabled:document.querySelector('#next-page')?.disabled ?? true,
        overflow:Math.max(body.scrollWidth,html.scrollWidth)>window.innerWidth+2,
      };
    });

    if(initial.visibleCards!==viewport.expected) throw new Error(`${viewport.name}: expected ${viewport.expected} visible cards, got ${initial.visibleCards}`);
    if(!initial.countText.includes('32')) throw new Error(`${viewport.name}: canonical 32-player count not rendered`);
    if(initial.overflow) throw new Error(`${viewport.name}: horizontal overflow`);
    if(initial.nextDisabled) throw new Error(`${viewport.name}: next arrow unexpectedly disabled on first page`);

    await page.fill('#player-search','Dr. Q');
    await page.waitForTimeout(50);
    const searchResult=await page.evaluate(()=>({
      count:document.querySelectorAll('.player-card').length,
      nickname:document.querySelector('.player-card h3')?.textContent?.trim()||'',
      countText:document.querySelector('#player-count')?.textContent||''
    }));
    if(searchResult.count!==1||searchResult.nickname!=='Dr. Q') throw new Error(`${viewport.name}: nickname search failed`);

    await page.click('#clear-filters');
    await page.waitForFunction(()=>document.querySelectorAll('.player-card').length>0);
    await page.click('#next-page');
    const nextPage=await page.evaluate(()=>document.querySelector('#page-indicator')?.textContent||'');
    if(!nextPage.startsWith('Pagina 2')) throw new Error(`${viewport.name}: next profile page failed`);

    await page.screenshot({path:`${outDir}/avventurieri-${viewport.name}.png`,fullPage:true,animations:'disabled'});

    if(errors.length) throw new Error(`${viewport.name}: browser console errors: ${errors.join(' | ')}`);
    await fs.writeFile(`${outDir}/${viewport.name}.json`,JSON.stringify({viewport,initial,searchResult,nextPage,errors},null,2),'utf8');
    await page.close();
  }
}finally{
  await browser.close();
}
