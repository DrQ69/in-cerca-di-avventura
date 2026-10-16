import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL=process.env.TESORI_URL||'http://127.0.0.1:8000/beta/tesori/';
const outDir=process.env.TESORI_SCREENSHOT_DIR||'artifacts/tesori-visual';
const viewports=[
 {name:'desktop-1440',width:1440,height:1200},
 {name:'tablet-768',width:768,height:1200},
 {name:'mobile-390',width:390,height:844},
];
await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});

const overflow=page=>page.evaluate(()=>({
 horizontal:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)>window.innerWidth+2,
 scrollWidth:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),
 viewportWidth:window.innerWidth,
}));

try{
 for(const viewport of viewports){
  const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
  const consoleErrors=[];
  page.on('console',msg=>{if(msg.type()==='error')consoleErrors.push(msg.text());});
  page.on('pageerror',error=>consoleErrors.push(String(error)));
  await page.goto(baseURL,{waitUntil:'networkidle',timeout:30000});
  await page.waitForSelector('.tesoro-event-card[data-event-id="bog-2026-duello-02"]',{timeout:15000});

  const state=await page.evaluate(()=>{
   const e02=document.querySelector('.tesoro-event-card[data-event-id="bog-2026-duello-02"]');
   const cornerstone=document.querySelector('.tesoro-event-card[data-event-id="cremos-cornerstone-2026"]');
   const e02Art=e02?.querySelector('.tesoro-event-art');
   const cornerArt=cornerstone?.querySelector('.tesoro-event-art');
   const e02Image=e02?.querySelector('.tesoro-chest-image');
   return {
    eventCards:document.querySelectorAll('.tesoro-event-card').length,
    e02Band:e02Art?.dataset.chestBand||null,
    e02Players:e02Art?.dataset.playerCount||null,
    e02Image:e02Image?.getAttribute('src')||null,
    e02ImageLoaded:Boolean(e02Image?.complete&&e02Image?.naturalWidth>0),
    cornerstoneBand:cornerArt?.dataset.chestBand||null,
    cornerstonePending:cornerstone?.textContent?.includes('Partecipanti da aggiornare')||false,
    cornerstoneCount:cornerstone?.querySelector('.tesoro-count')?.textContent?.trim()||'',
   };
  });
  if(state.e02Band!=='20–39 giocatori'||state.e02Players!=='23') throw new Error(`${viewport.name}: E02 chest band mismatch: ${JSON.stringify(state)}`);
  if(!state.e02Image?.endsWith('/assets/tesori/scrigno-20-39-giocatori.webp')||!state.e02ImageLoaded) throw new Error(`${viewport.name}: E02 chest image did not load: ${JSON.stringify(state)}`);
  if(state.cornerstoneBand!=='none'||!state.cornerstonePending) throw new Error(`${viewport.name}: Cornerstone must not infer capacity as attendance: ${JSON.stringify(state)}`);
  if(state.cornerstoneCount!=='17 Tesori') throw new Error(`${viewport.name}: expected 17 Cornerstone catalog entries, got ${state.cornerstoneCount}`);
  const ov=await overflow(page);
  if(ov.horizontal) throw new Error(`${viewport.name}: horizontal overflow ${ov.scrollWidth} > ${ov.viewportWidth}`);
  if(consoleErrors.length) throw new Error(`${viewport.name}: console errors: ${consoleErrors.join(' | ')}`);
  await page.screenshot({path:`${outDir}/index-${viewport.name}.png`,fullPage:true,animations:'disabled'});
  await fs.writeFile(`${outDir}/index-${viewport.name}.json`,JSON.stringify({viewport,state,overflow:ov,consoleErrors},null,2));
  await page.close();
 }

 for(const target of [
  {id:'bog-2026-duello-02',name:'e02',expectedBand:'20–39 giocatori',expectedPlayers:'23',expectedTreasures:9},
  {id:'cremos-cornerstone-2026',name:'cornerstone',expectedBand:'none',expectedPlayers:'',expectedTreasures:17},
 ]){
  for(const viewport of [viewports[0],viewports[2]]){
   const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
   const consoleErrors=[];
   page.on('console',msg=>{if(msg.type()==='error')consoleErrors.push(msg.text());});
   page.on('pageerror',error=>consoleErrors.push(String(error)));
   const url=new URL('evento.html?event='+encodeURIComponent(target.id),baseURL).href;
   await page.goto(url,{waitUntil:'networkidle',timeout:30000});
   await page.waitForSelector('#prize-grid .prize-card',{timeout:15000});
   const state=await page.evaluate(()=>({
    title:document.querySelector('#event-head h1')?.textContent?.trim()||'',
    prizes:document.querySelectorAll('#prize-grid .prize-card').length,
    band:document.querySelector('.tesori-event-chest')?.dataset.chestBand||null,
    players:document.querySelector('.tesori-event-chest')?.dataset.playerCount||'',
    chestImage:document.querySelector('.tesori-event-chest img')?.getAttribute('src')||null,
    names:[...document.querySelectorAll('#prize-grid .prize-card h3')].map(n=>n.textContent.trim()),
    text:document.querySelector('#event-content')?.textContent||'',
   }));
   if(state.prizes!==target.expectedTreasures) throw new Error(`${target.name}-${viewport.name}: expected ${target.expectedTreasures} prizes, got ${state.prizes}`);
   if(state.band!==target.expectedBand||state.players!==target.expectedPlayers) throw new Error(`${target.name}-${viewport.name}: chest metadata mismatch ${JSON.stringify(state)}`);
   if(target.name==='cornerstone'){
    for(const expected of ['Crown of the Victor','The Returned King','Beta Booster','Cornerstone']){
     if(!state.names.includes(expected)) throw new Error(`${target.name}-${viewport.name}: missing ${expected}`);
    }
    for(const expectedText of ['Community Champion','25']){
     if(!state.text.includes(expectedText)) throw new Error(`${target.name}-${viewport.name}: missing text ${expectedText}`);
    }
    if(state.chestImage) throw new Error(`${target.name}-${viewport.name}: unknown attendance must not select a chest image`);
   }else if(!state.chestImage?.endsWith('/assets/tesori/scrigno-20-39-giocatori.webp')){
    throw new Error(`${target.name}-${viewport.name}: wrong chest image ${state.chestImage}`);
   }

   const first=page.locator('#prize-grid .prize-card').first();
   await first.focus();
   await page.keyboard.press('Enter');
   await page.waitForSelector('#treasure-dialog[open]');
   const dialogFocus=await page.evaluate(()=>document.getElementById('treasure-dialog')?.contains(document.activeElement));
   if(!dialogFocus) throw new Error(`${target.name}-${viewport.name}: dialog did not receive focus`);
   await page.keyboard.press('Escape');
   if(await page.locator('#treasure-dialog[open]').count()) throw new Error(`${target.name}-${viewport.name}: dialog did not close with Escape`);

   const ov=await overflow(page);
   if(ov.horizontal) throw new Error(`${target.name}-${viewport.name}: horizontal overflow ${ov.scrollWidth} > ${ov.viewportWidth}`);
   if(consoleErrors.length) throw new Error(`${target.name}-${viewport.name}: console errors: ${consoleErrors.join(' | ')}`);
   await page.screenshot({path:`${outDir}/${target.name}-${viewport.name}.png`,fullPage:true,animations:'disabled'});
   await fs.writeFile(`${outDir}/${target.name}-${viewport.name}.json`,JSON.stringify({viewport,state,overflow:ov,consoleErrors},null,2));
   await page.close();
  }
 }
}finally{
 await browser.close();
}
