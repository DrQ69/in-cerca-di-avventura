import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL=process.env.ICA_BASE_URL||'http://127.0.0.1:8000';
const outDir=process.env.LCS02_ARTIFACT_DIR||'artifacts/lcs02-runtime';
const pages=[
  {code:'HOME',path:'/beta/',min:18},
  {code:'ADU',path:'/beta/adunanze/',min:8},
  {code:'ADU-NAT',path:'/beta/adunanze/nazionale/',min:10},
  {code:'CRO',path:'/beta/cronache/',min:12},
  {code:'AVV',path:'/beta/avventurieri/',min:18},
];

await fs.mkdir(outDir,{recursive:true});
const browser=await chromium.launch({headless:true});

try{
  for(const target of pages){
    const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,reducedMotion:'reduce'});
    const errors=[];
    page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
    page.on('pageerror',err=>errors.push(String(err)));
    await page.goto(baseURL+target.path+'?lcs=1',{waitUntil:'networkidle',timeout:30000});
    await page.waitForSelector('#ica-lcs-panel',{timeout:10000});
    await page.waitForTimeout(150);

    const result=await page.evaluate(expectedCode=>{
      const nodes=[...document.querySelectorAll('[data-ica-id]')];
      const ids=nodes.map(el=>el.dataset.icaId);
      const duplicates=ids.filter((id,index)=>ids.indexOf(id)!==index);
      const sections=[...document.querySelectorAll('[data-ica-section]')].map(el=>el.dataset.icaSection);
      const measured=window.ICA_LCS02?.measure?.()||[];
      const invalid=measured.filter(row=>![row.x,row.y,row.w,row.h].every(Number.isFinite));
      const wrongPage=document.body.dataset.icaPage!==expectedCode;
      return {ids,duplicates:[...new Set(duplicates)],sections,measured,invalid,wrongPage,panel:document.querySelector('#ica-lcs-panel')?.textContent||''};
    },target.code);

    if(result.wrongPage)throw new Error(target.code+': body data-ica-page mismatch');
    if(result.ids.length<target.min)throw new Error(target.code+': only '+result.ids.length+' LCS IDs, expected at least '+target.min);
    if(result.duplicates.length)throw new Error(target.code+': duplicate LCS IDs '+result.duplicates.join(', '));
    if(!result.sections.includes('NAV'))throw new Error(target.code+': NAV section missing');
    if(!result.measured.length)throw new Error(target.code+': inspector returned no measurements');
    if(result.invalid.length)throw new Error(target.code+': invalid measurements found');
    if(errors.length)throw new Error(target.code+': browser errors '+errors.join(' | '));

    await fs.writeFile(outDir+'/'+target.code+'.json',JSON.stringify(result,null,2),'utf8');
    await page.screenshot({path:outDir+'/'+target.code+'.png',fullPage:false,animations:'disabled'});
    await page.close();
  }
}finally{
  await browser.close();
}
