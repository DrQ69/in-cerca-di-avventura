import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL=process.env.ICA_BASE_URL||'http://127.0.0.1:8000';
const outDir=process.env.HOME_SCREENSHOT_DIR||'artifacts/homepage-visual';
const viewports=[
  {name:'mobile-390',width:390,height:844},
  {name:'tablet-768',width:768,height:1024},
  {name:'desktop-1280',width:1280,height:800},
  {name:'large-1920',width:1920,height:1080},
];

await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});

try{
  for(const viewport of viewports){
    const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
    const errors=[];
    page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
    page.on('pageerror',err=>errors.push(String(err)));

    await page.goto(baseURL+'/beta/',{waitUntil:'networkidle',timeout:30000});
    await page.waitForSelector('#next-event-card[data-event-id]',{timeout:10000});
    await page.waitForSelector('#latest-chronicle[data-event-id]',{timeout:10000});

    const result=await page.evaluate(()=>{
      const main=document.querySelector('main');
      const direct=[...main.children].filter(el=>el.matches('section')).map(el=>el.id||el.className);
      const next=document.querySelector('#next-event-card');
      const chronicle=document.querySelector('#latest-chronicle');
      const standingCards=[...document.querySelectorAll('#league-standings .standing-card')];
      const body=document.body,html=document.documentElement;
      return {
        order:direct,
        nextId:next?.getAttribute('data-event-id')||null,
        nextTitle:document.querySelector('#next-title')?.textContent?.trim()||'',
        chronicleId:chronicle?.getAttribute('data-event-id')||null,
        chronicleTitle:document.querySelector('#chronicle-title')?.textContent?.trim()||'',
        standingsCount:standingCards.length,
        standingsLoading:standingCards.every(card=>card.classList.contains('standing-loading')),
        standingsNames:standingCards.map(card=>card.querySelector('strong')?.textContent?.trim()||''),
        standingsPoints:standingCards.map(card=>card.querySelector('small')?.textContent?.trim()||''),
        proclamationTitle:document.querySelector('#proclamation-title')?.textContent?.trim()||'',
        nextMapHref:document.querySelector('#next-event-facts .map-link')?.getAttribute('href')||'',
        chronicleMapHref:document.querySelector('#chronicle-facts .map-link')?.getAttribute('href')||'',
        overflow:Math.max(body.scrollWidth,html.scrollWidth)>window.innerWidth+2,
      };
    });

    const expected=['home','next-event','classifica','cronache-home','proclami'];
    if(JSON.stringify(result.order)!==JSON.stringify(expected)){
      throw new Error(viewport.name+': homepage block order mismatch: '+JSON.stringify(result.order));
    }
    if(result.nextId!=='bog-2026-duello-02') throw new Error(viewport.name+': next event mismatch '+result.nextId);
    if(result.nextTitle!=='Peasant') throw new Error(viewport.name+': next event title mismatch');
    if(result.chronicleId!=='bog-2026-duello-01') throw new Error(viewport.name+': latest chronicle mismatch '+result.chronicleId);
    if(result.standingsCount!==3) throw new Error(viewport.name+': top-3 visual structure missing');
    if(result.standingsLoading) throw new Error(viewport.name+': official standings should not be in loading state');
    if(JSON.stringify(result.standingsNames)!==JSON.stringify(['Nick the Wizard','Limitbreaker','Mikininja'])) throw new Error(viewport.name+': top-3 ranking mismatch '+JSON.stringify(result.standingsNames));
    if(JSON.stringify(result.standingsPoints)!==JSON.stringify(['25 punti lega','22 punti lega','20 punti lega'])) throw new Error(viewport.name+': top-3 points mismatch '+JSON.stringify(result.standingsPoints));
    if(result.proclamationTitle!=='Nessun Proclama pubblicato') throw new Error(viewport.name+': empty Proclami state mismatch');
    if(!result.nextMapHref.startsWith('https://www.google.com/maps/search/?api=1&query=')) throw new Error(viewport.name+': next event location is not linked to Google Maps');
    if(!result.chronicleMapHref.startsWith('https://www.google.com/maps/search/?api=1&query=')) throw new Error(viewport.name+': chronicle location is not linked to Google Maps');
    if(result.overflow) throw new Error(viewport.name+': horizontal overflow');
    if(errors.length) throw new Error(viewport.name+': console errors: '+errors.join(' | '));

    await page.screenshot({path:outDir+'/homepage-'+viewport.name+'.png',fullPage:true,animations:'disabled'});
    await fs.writeFile(outDir+'/'+viewport.name+'.json',JSON.stringify(result,null,2),'utf8');
    await page.close();
  }
}finally{
  await browser.close();
}
