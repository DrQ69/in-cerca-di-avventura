const esc=v=>String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const familyLabel={artist_proof:'Artist Proof',card:'Carta',champion_card:'Carta Champion',limited_print:'Stampa a serie limitata',box:'Box',precon:'Precon',booster:'Bustina'};
const finishLabel={foil:'Foil',non_foil:'Non-Foil'};
const stateLabel={announced:'Annunciato',confirmed:'Confermato',awarded:'Assegnato'};
const fmtDate=v=>{if(!v)return'Data da verificare';const [y,m,d]=v.split('-').map(Number);return new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'}).format(new Date(y,m-1,d));};
const eventId=new URLSearchParams(location.search).get('event');
let eventData,items=[];
Promise.all([fetch('../../data/events.json',{cache:'no-store'}).then(r=>r.json()),fetch('../../data/treasures.json',{cache:'no-store'}).then(r=>r.json())]).then(([e,t])=>{
 eventData=(e.events||[]).find(x=>x.event_id===eventId);items=(t.items||[]).filter(x=>x.event_id===eventId);
 if(!eventData)throw new Error('event not found');renderHead();renderFilters();renderItems('all');
}).catch(err=>{console.error(err);document.querySelector('#event-content').innerHTML='<p class="tesori-empty">Evento Tesori non disponibile.</p>';});
function renderHead(){
 document.title='Tesori — '+eventData.title+' — In Cerca di Avventura';
 const series=[eventData.series_name,eventData.stage_number?('Tappa '+eventData.stage_number):''].filter(Boolean).join(' · ');
 document.querySelector('#event-head').innerHTML='<div><p class="section-kicker">Tesori dell’Adunanza</p><h1>'+esc(eventData.title)+'</h1>'+(series?'<p>'+esc(series)+'</p>':'')+'<div class="tesori-event-meta"><span>'+esc(fmtDate(eventData.date))+'</span><span>'+esc([eventData.venue,eventData.city].filter(Boolean).join(' · '))+'</span><span>'+items.length+' '+(items.length===1?'premio catalogato':'premi catalogati')+'</span></div><div class="tesori-event-actions"><a href="../adunanze/nazionale/#event-'+encodeURIComponent(eventData.event_id)+'">Vai all’Adunanza</a><a href="../cronache/">Cronache</a></div></div>';
}
function renderFilters(){
 const fams=[...new Set(items.map(x=>x.family).filter(Boolean))];const row=document.querySelector('#prize-filters');
 row.innerHTML='<button class="is-active" data-family="all">Tutti ('+items.length+')</button>'+fams.map(f=>'<button data-family="'+esc(f)+'">'+esc(familyLabel[f]||f)+' ('+items.filter(x=>x.family===f).length+')</button>').join('');
 row.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;row.querySelectorAll('button').forEach(x=>x.classList.remove('is-active'));b.classList.add('is-active');renderItems(b.dataset.family);});
}
function card(t){
 const attrs=[familyLabel[t.family]||t.family,t.expansion,finishLabel[t.finish]||t.finish,t.rarity].filter(Boolean);
 return '<button class="prize-card" data-id="'+esc(t.treasure_id)+'"><div class="prize-media">'+(t.image?'<img src="../../'+esc(t.image)+'" alt="'+esc(t.name)+'">':'<span class="prize-placeholder">Immagine in arrivo</span>')+'</div><div class="prize-copy"><h3>'+esc(t.name)+'</h3>'+attrs.map(a=>'<p>'+esc(a)+'</p>').join('')+(t.prize_position?'<p><strong>'+esc(t.prize_position)+'</strong></p>':'')+'<span class="prize-state">'+esc(stateLabel[t.state]||t.state)+'</span></div></button>';
}
function renderItems(f){const show=f==='all'?items:items.filter(x=>x.family===f);const grid=document.querySelector('#prize-grid');grid.innerHTML=show.map(card).join('')||'<p class="tesori-empty">Nessun premio in questa categoria.</p>';grid.querySelectorAll('.prize-card').forEach(b=>b.addEventListener('click',()=>openDialog(items.find(x=>x.treasure_id===b.dataset.id),b)));}
const dialog=document.querySelector('#treasure-dialog'),closeBtn=document.querySelector('#dialog-close');let opener=null;
function row(k,v){return v?'<dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd>':''}
function openDialog(t,button){opener=button;document.querySelector('#dialog-title').textContent=t.name;document.querySelector('#dialog-media').innerHTML=t.image?'<img src="../../'+esc(t.image)+'" alt="'+esc(t.name)+'">':'<span class="prize-placeholder">Immagine in arrivo</span>';document.querySelector('#dialog-meta').innerHTML=row('Tipo',familyLabel[t.family]||t.family)+row('Espansione',t.expansion)+row('Rarità',t.rarity)+row('Finitura',finishLabel[t.finish]||t.finish)+row('Firma',t.signature?.status)+row('Stile firma',t.signature?.style)+row('Colore firma',t.signature?.colour)+row('Artista',t.signature?.artist)+row('Premio',t.prize_position)+row('Stato',stateLabel[t.state]||t.state)+row('Quantità',String(t.quantity??''))+row('Note',t.notes);dialog.showModal();closeBtn.focus();}
function closeDialog(){dialog.close();opener?.focus();}
closeBtn.addEventListener('click',closeDialog);dialog.addEventListener('cancel',e=>{e.preventDefault();closeDialog();});
