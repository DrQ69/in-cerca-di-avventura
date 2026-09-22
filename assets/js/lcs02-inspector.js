(()=>{
  const params=new URLSearchParams(location.search);
  const enabled=params.get('lcs')==='1'||location.hash==='#lcs';
  const pageCode=document.body.dataset.icaPage||'PAGE';

  function viewportCode(){
    const w=window.innerWidth;
    if(w<768)return 'M';
    if(w<1024)return 'T';
    return 'D';
  }

  function round(value){
    return Math.round(value*10)/10;
  }

  function sectionFor(el){
    if(el.dataset.icaSection)return el;
    return el.closest('[data-ica-section]');
  }

  function measureElement(el){
    const section=sectionFor(el);
    if(!section)return null;
    const sr=section.getBoundingClientRect();
    const er=el.getBoundingClientRect();
    if(!sr.width||!sr.height)return null;
    const x=round((er.left-sr.left)/sr.width*100);
    const y=round((er.top-sr.top)/sr.height*100);
    const w=round(er.width/sr.width*100);
    const h=round(er.height/sr.height*100);
    const sectionId=section.dataset.icaSection||'SECTION';
    return {
      id:el.dataset.icaId,
      page:pageCode,
      section:sectionId,
      viewport:viewportCode(),
      x,y,w,h,
      lcs:pageCode+'/'+sectionId+'@'+viewportCode()+':X'+x+'-Y'+y+'-W'+w+'-H'+h
    };
  }

  function measure(){
    return [...document.querySelectorAll('[data-ica-id]')]
      .map(measureElement)
      .filter(Boolean);
  }

  window.ICA_LCS02={measure,viewportCode};

  if(!enabled)return;

  const style=document.createElement('style');
  style.textContent=`
    [data-ica-id]{outline:1px dashed rgba(155,215,244,.72)!important;outline-offset:-1px}
    [data-ica-section]{box-shadow:inset 0 0 0 1px rgba(225,201,132,.38)!important}
    #ica-lcs-panel{position:fixed;z-index:99999;right:10px;bottom:10px;width:min(430px,calc(100vw - 20px));max-height:52vh;overflow:auto;background:rgba(5,8,11,.96);border:1px solid #b58c4c;color:#e7dcc1;font:12px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;box-shadow:0 12px 34px rgba(0,0,0,.55)}
    #ica-lcs-panel header{position:sticky;top:0;display:flex;gap:8px;align-items:center;justify-content:space-between;padding:9px 10px;background:#11181e;border-bottom:1px solid rgba(181,140,76,.45)}
    #ica-lcs-panel button{min-height:30px;border:1px solid rgba(181,140,76,.5);background:#0c1217;color:#e1c984;padding:0 9px;cursor:pointer}
    #ica-lcs-list{padding:6px 10px 10px}
    .ica-lcs-row{padding:6px 0;border-bottom:1px solid rgba(255,255,255,.08)}
    .ica-lcs-row b{display:block;color:#e1c984}
  `;
  document.head.append(style);

  const panel=document.createElement('aside');
  panel.id='ica-lcs-panel';
  panel.setAttribute('aria-label','LCS-02 Inspector');
  panel.innerHTML='<header><strong>LCS-02 · '+pageCode+' · <span id="ica-lcs-view"></span></strong><div><button id="ica-lcs-copy" type="button">Copia JSON</button><button id="ica-lcs-close" type="button">×</button></div></header><div id="ica-lcs-list"></div>';
  document.body.append(panel);

  const list=panel.querySelector('#ica-lcs-list');
  const view=panel.querySelector('#ica-lcs-view');

  function render(){
    const rows=measure();
    view.textContent=viewportCode()+' · '+window.innerWidth+'×'+window.innerHeight+' · '+rows.length+' elementi';
    list.innerHTML=rows.map(row=>'<div class="ica-lcs-row"><b>'+row.id+'</b><span>'+row.lcs+'</span></div>').join('');
  }

  panel.querySelector('#ica-lcs-copy').addEventListener('click',async()=>{
    const payload=JSON.stringify({page:pageCode,viewport:viewportCode(),width:window.innerWidth,height:window.innerHeight,elements:measure()},null,2);
    try{await navigator.clipboard.writeText(payload);}catch{console.log(payload);}
  });
  panel.querySelector('#ica-lcs-close').addEventListener('click',()=>panel.remove());

  let raf=0;
  const schedule=()=>{
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(render);
  };
  window.addEventListener('resize',schedule);
  new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','class']});
  render();
})();