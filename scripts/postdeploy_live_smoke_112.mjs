import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const base='https://drq69.github.io/in-cerca-di-avventura';
const out='artifacts/postdeploy-smoke-112';
await fs.mkdir(out,{recursive:true});

const targets=[
 {name:'desktop',viewport:{width:1440,height:900}},
 {name:'mobile',viewport:{width:390,height:844}}
];

const browser=await chromium.launch({headless:true});
const failures=[];

async function checkTarget(t){
 const page=await browser.newPage({viewport:t.viewport,reducedMotion:'reduce'});
 const consoleErrors=[]; const requestFailures=[];
 page.on('console',m=>{if(m.type()==='error')consoleErrors.push(m.text());});
 page.on('pageerror',e=>consoleErrors.push(String(e)));
 page.on('requestfailed',r=>requestFailures.push(r.url()+' :: '+(r.failure()?.errorText||'')));

 const goto=async(path,label)=>{
   const res=await page.goto(base+path,{waitUntil:'networkidle',timeout:45000});
   if(!res||!res.ok())throw new Error(t.name+' '+label+' HTTP '+(res?.status()||'NO_RESPONSE'));
 };

 await goto('/beta/','home');
 await page.waitForSelector('#home-title');
 const home=await page.evaluate(()=>({
   title:document.querySelector('#home-title')?.textContent?.trim(),
   cta:document.querySelector('a[href*="#lega-blaze-of-glory-2026-2027"]')?.getAttribute('href')||'',
   top3Cards:document.querySelectorAll('.league-podium-card,.podium-card,[data-rank]').length,
   overflow:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)>window.innerWidth+2
 }));
 if(home.title!=='In Cerca di Avventura')throw new Error(t.name+' home title missing');
 if(!home.cta.includes('#lega-blaze-of-glory-2026-2027'))throw new Error(t.name+' league CTA/deep-link missing');
 if(home.overflow)throw new Error(t.name+' home horizontal overflow');
 await page.screenshot({path:`${out}/home-${t.name}.png`,fullPage:true,animations:'disabled'});

 await goto('/beta/adunanze/nazionale/','adunanze');
 await page.waitForSelector('#active-leagues-root .league-card',{timeout:20000});
 await page.waitForSelector('.adunanza-card',{timeout:20000});
 const adu=await page.evaluate(()=>({
   errorVisible:!document.querySelector('#error')?.hidden,
   cards:document.querySelectorAll('.adunanza-card').length,
   stages:document.querySelectorAll('#lega-blaze-of-glory-2026-2027 .league-stage-row').length,
   top3:document.querySelectorAll('#lega-blaze-of-glory-2026-2027 .league-podium-card').length,
   expanded:document.querySelector('#lega-blaze-of-glory-2026-2027 .league-toggle')?.getAttribute('aria-expanded'),
   stageText:[...document.querySelectorAll('#lega-blaze-of-glory-2026-2027 .league-stage-row')].map(x=>x.textContent||''),
   overflow:Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)>window.innerWidth+2
 }));
 if(adu.errorVisible)throw new Error(t.name+' Adunanze error state visible');
 if(adu.cards<1)throw new Error(t.name+' no event cards');
 if(adu.stages!==8)throw new Error(t.name+' expected 8 league stages, got '+adu.stages);
 if(adu.top3!==3)throw new Error(t.name+' expected Top3 in league, got '+adu.top3);
 if(adu.expanded!=='false')throw new Error(t.name+' league should be closed on normal entry');
 if(!adu.stageText.some(x=>x.includes('Tappa II')&&x.includes('Peasant')))throw new Error(t.name+' E02/Tappa II missing');
 if(!adu.stageText.some(x=>x.includes('Tappa IV')&&x.includes('Constructed Full')))throw new Error(t.name+' E04/Tappa IV missing');
 if(adu.overflow)throw new Error(t.name+' Adunanze horizontal overflow');
 await page.screenshot({path:`${out}/adunanze-${t.name}.png`,fullPage:true,animations:'disabled'});

 await goto('/beta/adunanze/nazionale/#lega-blaze-of-glory-2026-2027','league-deeplink');
 await page.waitForSelector('#lega-blaze-of-glory-2026-2027 .league-toggle[aria-expanded="true"]',{timeout:15000});
 const deep=await page.evaluate(()=>({
   hash:location.hash,
   expanded:document.querySelector('#lega-blaze-of-glory-2026-2027 .league-toggle')?.getAttribute('aria-expanded'),
   panelHidden:document.querySelector('#lega-blaze-of-glory-2026-2027 .league-panel')?.hidden
 }));
 if(deep.hash!=='#lega-blaze-of-glory-2026-2027'||deep.expanded!=='true'||deep.panelHidden)throw new Error(t.name+' league deep-link did not auto-open');
 await page.screenshot({path:`${out}/league-deeplink-${t.name}.png`,fullPage:true,animations:'disabled'});

 await goto('/beta/cronache/','cronache');
 await page.waitForSelector('#chronicles-root',{timeout:15000});
 if(await page.locator('#error').isVisible())throw new Error(t.name+' Cronache error state visible');

 await goto('/beta/avventurieri/','avventurieri');
 await page.waitForFunction(()=>document.querySelectorAll('#player-track > *').length>0,{timeout:20000});
 if(await page.locator('#player-empty').isVisible())throw new Error(t.name+' Avventurieri empty unexpectedly');

 if(t.name==='mobile'){
   await goto('/beta/','home-mobile-menu');
   const menu=page.locator('#menu');
   await menu.click();
   if(await menu.getAttribute('aria-expanded')!=='true')throw new Error('mobile menu did not open');
 }

 if(consoleErrors.length)throw new Error(t.name+' console errors: '+consoleErrors.join(' | '));
 if(requestFailures.length)throw new Error(t.name+' request failures: '+requestFailures.join(' | '));
 await page.close();
}

for(const t of targets){
 try{await checkTarget(t);console.log('PASS',t.name);}
 catch(e){failures.push(String(e));console.error('FAIL',t.name,String(e));}
}
await browser.close();
if(failures.length){console.error(JSON.stringify({failures},null,2));process.exit(1);}
console.log('POSTDEPLOY_SMOKE_PASS desktop+mobile');
