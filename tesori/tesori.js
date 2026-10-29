import { chestForEvent } from './treasure-chests.mjs';

const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const familyLabel={artist_proof:'Artist Proof',card:'Carta',champion_card:'Carta Champion',limited_print:'Stampa a serie limitata',box:'Box',precon:'Precon',booster:'Bustina'};
const finishLabel={foil:'Foil',non_foil:'Non-Foil'};
const fmtDate=v=>{if(!v)return'Data da verificare';const [y,m,d]=v.split('-').map(Number);return new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'}).format(new Date(y,m-1,d));};

const root=$('#treasure-events');
const tools=$('.tesori-tools');
$('#filters-toggle')?.addEventListener('click',()=>tools.classList.toggle('is-open'));
$('#reset-filters')?.addEventListener('click',()=>{tools.querySelectorAll('input,select').forEach(el=>el.value='');render();});

let events=[],treasures=[];
Promise.all([
 fetch('../data/events.json?v=20261029-24-iscritti',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('events.json HTTP '+r.status);return r.json();}),
 fetch('../data/treasures.json?v=20261029-24-iscritti',{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('treasures.json HTTP '+r.status);return r.json();})
]).then(([e,t])=>{events=e.events||[];treasures=t.items||[];populate();render();}).catch(err=>{console.error(err);root.innerHTML='<p class="tesori-empty">Archivio Tesori non disponibile in questo momento.</p>';});

function populate(){
 const defs=[['family','family'],['expansion','expansion'],['rarity','rarity'],['finish','finish']];
 defs.forEach(([id,key])=>{const sel=$('#filter-'+id);[...new Set(treasures.map(x=>x[key]).filter(Boolean))].sort().forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=key==='family'?(familyLabel[v]||v):key==='finish'?(finishLabel[v]||v):v;sel.append(o);});});
 const sign=$('#filter-signature');
 [...new Set(treasures.map(x=>x.signature?.status).filter(Boolean))].sort().forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v==='signed'?'Signed':'Non Signed';sign.append(o);});
}
['#treasure-search','#filter-family','#filter-expansion','#filter-rarity','#filter-finish','#filter-signature'].forEach(s=>$(s)?.addEventListener('input',render));

function chestMarkup(ev){
 const {count,band}=chestForEvent(ev);
 if(!band){
  const status=count===null?'Partecipanti da aggiornare':'Nessuno scrigno previsto per questa fascia';
  return '<div class="tesoro-event-art is-pending" data-player-count="'+esc(count??'')+'" data-chest-band="none"><div class="tesoro-chest-pending" aria-hidden="true">?</div><span class="tesoro-band-label">'+esc(status)+'</span></div>';
 }
 const src='../assets/tesori/'+band.file;
 return '<div class="tesoro-event-art" data-player-count="'+esc(count)+'" data-chest-band="'+esc(band.label)+'"><img class="tesoro-chest-image" src="'+esc(src)+'" width="320" height="320" alt="" loading="lazy"><span class="tesoro-band-label">'+esc(count)+(ev?.status==='futura'&&ev?.registration_count!=null?' iscritti':' partecipanti')+' · Scrigno '+esc(band.label)+'</span></div>';
}

function render(){
 const q=$('#treasure-search').value.trim().toLowerCase(),f=$('#filter-family').value,x=$('#filter-expansion').value,r=$('#filter-rarity').value,fi=$('#filter-finish').value,sg=$('#filter-signature').value;
 const matches=treasures.filter(t=>{
  const ev=events.find(e=>e.event_id===t.event_id)||{};
  const hay=[t.name,t.family,t.expansion,t.rarity,t.finish,t.signature?.artist,t.prize_position,t.notes,ev.title,ev.series_name].filter(Boolean).join(' ').toLowerCase();
  return (!q||hay.includes(q))&&(!f||t.family===f)&&(!x||t.expansion===x)&&(!r||t.rarity===r)&&(!fi||t.finish===fi)&&(!sg||t.signature?.status===sg);
 });
 const ids=[...new Set(matches.map(t=>t.event_id))];
 const cards=ids.map(id=>{
  const ev=events.find(e=>e.event_id===id);if(!ev)return'';
  const count=matches.filter(t=>t.event_id===id).length;
  const series=[ev.series_name,ev.stage_number?('Tappa '+ev.stage_number):''].filter(Boolean).join(' · ');
  return '<a class="tesoro-event-card" data-event-id="'+esc(id)+'" href="evento.html?event='+encodeURIComponent(id)+'">'+chestMarkup(ev)+'<div class="tesoro-event-copy"><h2>'+esc(ev.title)+'</h2>'+(series?'<p>'+esc(series)+'</p>':'')+'<p>'+esc(fmtDate(ev.date))+'</p></div><div class="tesoro-count">'+count+' '+(count===1?'Tesoro':'Tesori')+'</div></a>';
 }).join('');
 root.innerHTML=cards||'<p class="tesori-empty">Nessun Tesoro corrisponde ai filtri selezionati.</p>';
}
