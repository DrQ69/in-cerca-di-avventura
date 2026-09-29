import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const baseURL=process.env.ICA_BASE_URL||'http://127.0.0.1:8000';
const outDir=process.env.ALLEANZE_SCREENSHOT_DIR||'artifacts/alleanze-visual';
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

    await page.goto(baseURL+'/beta/alleanze/',{waitUntil:'networkidle',timeout:30000});
    await page.waitForSelector('.map-marker',{timeout:10000});

    const result=await page.evaluate(()=>{
      const markers=[...document.querySelectorAll('.map-marker')];
      const influences=[...document.querySelectorAll('.influence-zone')];
      const imgs=[...document.querySelectorAll('.italy-map,.map-marker img')];
      const body=document.body,html=document.documentElement;
      return {
        markerCount:markers.length,
        influenceCount:influences.length,
        labels:markers.map(el=>el.getAttribute('aria-label')),
        imagesLoaded:imgs.every(img=>img.complete&&img.naturalWidth>0),
        mapLoaded:document.querySelector('.italy-map')?.naturalWidth>0,
        mapGeometry:{
          width:document.querySelector('.italy-map')?.naturalWidth||0,
          height:document.querySelector('.italy-map')?.naturalHeight||0
        },
        bronzeGeometry:{
          width:document.querySelector('.marker-frame')?.naturalWidth||0,
          height:document.querySelector('.marker-frame')?.naturalHeight||0
        },
        ordinaryGeometry:(()=>{
          const marker=markers.find(el=>el.getAttribute('aria-label')?.startsWith('Ordinary Mortals'));
          const img=marker?.querySelector('.marker-logo');
          return {width:img?.naturalWidth||0,height:img?.naturalHeight||0};
        })(),
        status:document.querySelector('#map-status')?.textContent||'',
        bodyOverflow:Math.max(body.scrollWidth,html.scrollWidth)>window.innerWidth+2,
        allFilter:document.querySelector('[data-filter="all"]')?.classList.contains('is-active')||false
      };
    });

    if(result.markerCount!==3)throw new Error(viewport.name+': expected 3 pilot community markers, got '+result.markerCount);
    if(result.influenceCount!==3)throw new Error(viewport.name+': expected 3 influence zones, got '+result.influenceCount);
    if(!result.imagesLoaded||!result.mapLoaded)throw new Error(viewport.name+': map or marker asset failed to load');
    if(result.mapGeometry.width!==900||result.mapGeometry.height!==563)throw new Error(viewport.name+': Italy map asset is not the approved source '+JSON.stringify(result.mapGeometry));
    if(result.bronzeGeometry.width!==360||result.bronzeGeometry.height!==351)throw new Error(viewport.name+': bronze medallion asset is not the approved frame '+JSON.stringify(result.bronzeGeometry));
    if(result.ordinaryGeometry.width!==320||result.ordinaryGeometry.height!==320)throw new Error(viewport.name+': Ordinary Mortals logo is not the approved source asset '+JSON.stringify(result.ordinaryGeometry));
    for(const expected of ['Il Regno di Cremos — Crema','Team Void — Prato','Ordinary Mortals — Roma']){
      if(!result.labels.includes(expected))throw new Error(viewport.name+': missing marker '+expected);
    }

    const positions=await page.evaluate(()=>{
      const byLabel=label=>{
        const el=[...document.querySelectorAll('.map-marker')].find(node=>node.getAttribute('aria-label')===label);
        if(!el)return null;
        return {
          x:parseFloat(el.style.getPropertyValue('--x')),
          y:parseFloat(el.style.getPropertyValue('--y'))
        };
      };
      return {
        cremos:byLabel('Il Regno di Cremos — Crema'),
        prato:byLabel('Team Void — Prato'),
        roma:byLabel('Ordinary Mortals — Roma')
      };
    });
    if(!positions.cremos||!positions.prato||!positions.roma)throw new Error(viewport.name+': marker position data unavailable');
    if(!(positions.cremos.x>=36&&positions.cremos.x<=39&&positions.cremos.y>=32&&positions.cremos.y<=35)){
      throw new Error(viewport.name+': Cremos marker is outside the calibrated Lombardia envelope '+JSON.stringify(positions.cremos));
    }
    if(!(positions.cremos.y<positions.prato.y&&positions.cremos.y<positions.roma.y)){
      throw new Error(viewport.name+': Cremos must remain north of Prato and Roma');
    }
    if(!(positions.cremos.x<positions.prato.x)){
      throw new Error(viewport.name+': Crema must remain west of Prato on this map calibration');
    }
    if(result.bodyOverflow)throw new Error(viewport.name+': horizontal body overflow');
    if(!result.allFilter)throw new Error(viewport.name+': default filter is not Tutti');

    await page.click('[data-filter="merchant"]');
    const merchantFilter=await page.evaluate(()=>({
      visibleMarkers:[...document.querySelectorAll('.map-marker')].filter(el=>getComputedStyle(el).display!=='none').length,
      visibleInfluence:[...document.querySelectorAll('.influence-zone')].filter(el=>getComputedStyle(el).opacity!=='0').length
    }));
    if(merchantFilter.visibleMarkers!==0||merchantFilter.visibleInfluence!==0){
      throw new Error(viewport.name+': merchant filter should show no placed entities yet');
    }

    await page.click('[data-filter="community"]');
    const communityVisible=await page.locator('.map-marker:not(.is-hidden)').count();
    if(communityVisible!==3)throw new Error(viewport.name+': community filter should show all 3 pilots');

    const first=page.locator('.map-marker').first();
    await first.click();
    if(!await first.locator('.marker-popover').isVisible())throw new Error(viewport.name+': marker popover does not open on click');

    await page.screenshot({path:outDir+'/alleanze-'+viewport.name+'.png',fullPage:true,animations:'disabled'});
    await fs.writeFile(outDir+'/'+viewport.name+'.json',JSON.stringify({viewport,result,merchantFilter,communityVisible,errors},null,2),'utf8');

    if(errors.length)throw new Error(viewport.name+': browser console errors: '+errors.join(' | '));
    await page.close();
  }
}finally{
  await browser.close();
}
