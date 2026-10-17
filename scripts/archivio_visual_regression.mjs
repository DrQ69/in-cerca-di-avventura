import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL=process.env.ICA_BASE_URL||'http://127.0.0.1:8000';
const outDir=process.env.ARCHIVIO_SCREENSHOT_DIR||'artifacts/archivio-visual';
const viewports=[
 {name:'mobile-390',width:390,height:844},
 {name:'tablet-768',width:768,height:1024},
 {name:'desktop-1440',width:1440,height:1000}
];

await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});
try{
 for(const viewport of viewports){
  const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
  const errors=[];
  page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
  page.on('pageerror',err=>errors.push(String(err)));
  await page.goto(baseURL+'/archivio/',{waitUntil:'networkidle',timeout:30000});
  await page.waitForFunction(()=>document.querySelectorAll('.archive-card').length>0,null,{timeout:15000});

  const initial=await page.evaluate(()=>({
    count:Number(document.getElementById('archive-count')?.textContent||0),
    kinds:[...new Set([...document.querySelectorAll('.archive-card')].map(card=>card.dataset.kind))],
    typeOptions:[...document.querySelectorAll('#archive-type option')].map(o=>o.value),
    overflow:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)>window.innerWidth+2,
    archiveHome:[...document.querySelectorAll('a')].some(a=>a.getAttribute('href')==='../')
  }));
  for(const kind of ['evento','cronaca','avventuriero','tesoro','deck']){
    if(!initial.kinds.includes(kind))throw new Error(`${viewport.name}: missing archive kind ${kind}`);
  }
  for(const kind of ['evento','cronaca','avventuriero','tesoro','deck','proclama']){
    if(!initial.typeOptions.includes(kind))throw new Error(`${viewport.name}: missing type filter ${kind}`);
  }
  if(initial.count<70)throw new Error(`${viewport.name}: unexpectedly small unified archive ${initial.count}`);
  if(initial.overflow)throw new Error(`${viewport.name}: horizontal overflow`);

  await page.selectOption('#archive-type','deck');
  await page.waitForTimeout(50);
  const deckCount=Number(await page.locator('#archive-count').textContent());
  if(deckCount<1)throw new Error(`${viewport.name}: deck filter returned no indexed deck`);

  await page.selectOption('#archive-type','');
  await page.fill('#archive-query','Flaming Skull');
  await page.waitForTimeout(50);
  const flaming=await page.evaluate(()=>({
    count:Number(document.getElementById('archive-count')?.textContent||0),
    kinds:[...new Set([...document.querySelectorAll('.archive-card')].map(card=>card.dataset.kind))]
  }));
  if(flaming.count<2||!flaming.kinds.includes('tesoro')||!flaming.kinds.includes('deck')){
    throw new Error(`${viewport.name}: cross-domain search does not combine Tesori and Deck: ${JSON.stringify(flaming)}`);
  }

  await page.click('#archive-reset');
  await page.selectOption('#archive-type','proclama');
  await page.waitForTimeout(50);
  const proclamation=await page.evaluate(()=>({
    count:Number(document.getElementById('archive-count')?.textContent||0),
    empty:!document.getElementById('archive-empty')?.hidden
  }));
  if(proclamation.count!==0||!proclamation.empty)throw new Error(`${viewport.name}: empty Proclami archive state incorrect`);

  await page.click('#archive-reset');
  await page.screenshot({path:`${outDir}/archivio-${viewport.name}.png`,fullPage:true,animations:'disabled'});
  if(errors.length)throw new Error(`${viewport.name}: browser errors: ${errors.join(' | ')}`);
  await fs.writeFile(`${outDir}/${viewport.name}.json`,JSON.stringify({viewport,initial,deckCount,flaming,proclamation,errors},null,2),'utf8');
  await page.close();
 }
}finally{
 await browser.close();
}
