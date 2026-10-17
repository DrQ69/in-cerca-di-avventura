import {readSiteBundle} from '../shared/release-reader.mjs';
import {applySorceryEventOverlays} from '../shared/sorcery-event-overlay.mjs';

const form=document.getElementById('archive-filters');
const output=document.getElementById('archive-results');
const status=document.getElementById('archive-status');
const search=document.getElementById('q');
const year=document.getElementById('year-filter');
const format=document.getElementById('format-filter');
const series=document.getElementById('series-filter');
document.getElementById('year').textContent=new Date().getFullYear();

const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=value=>String(value??'').trim();
const asDate=value=>/^\d{4}-\d{2}-\d{2}$/.test(text(value))?new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T12:00:00Z')):'Data da verificare';
const key=value=>text(value).toLocaleLowerCase('it-IT').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const eventYear=e=>/^\d{4}/.test(text(e.date))?e.date.slice(0,4):text(e.season);
const venue=e=>[e.venue,e.city].filter(Boolean).join(', ')||'Luogo da verificare';
const circuit=e=>text(e.series_name)||'Evento autonomo';
const fmt=e=>text(e.format)||'Formato da verificare';
const distinct=(events,fn)=>[...new Set(events.map(fn).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'it'));
const option=(value,label)=>'<option value="'+escapeHTML(value)+'">'+escapeHTML(label)+'</option>';
const eventDetails=e=>e.event_id&&(e.official_results_url||e.official_event_url)
  ?'<a href="../cronache/evento/?id='+encodeURIComponent(e.event_id)+'">Risultati e dettagli →</a>'
  :'<a href="../cronache/">Consulta le Cronache →</a>';
let completed=[];

function render(){
  const query=key(search.value);
  const filtered=completed.filter(e=>
    (!year.value||eventYear(e)===year.value)&&
    (!format.value||fmt(e)===format.value)&&
    (!series.value||circuit(e)===series.value)&&
    (!query||key([e.title,e.city,e.venue,e.format,e.series_name,e.winner_display_name,e.event_code].join(' ')).includes(query))
  );
  status.textContent=filtered.length===1?'1 evento trovato':filtered.length+' eventi trovati';
  output.innerHTML=filtered.length?filtered.map(e=>`<article class="archive-record">
    <h3>${escapeHTML(e.title||'Evento senza titolo')}</h3>
    <div class="archive-meta">
      <span>Data: ${escapeHTML(asDate(e.date))}</span>
      <span>Luogo: ${escapeHTML(venue(e))}</span>
      <span>Formato: ${escapeHTML(fmt(e))}</span>
      <span>Campagna: ${escapeHTML(circuit(e))}</span>
      ${e.player_count!=null?'<span>Partecipanti: '+escapeHTML(e.player_count)+'</span>':''}
    </div>${eventDetails(e)}</article>`).join('')
    :'<p class="archive-empty">Nessun evento corrisponde ai filtri selezionati.</p>';
}
form.addEventListener('input',render);
form.addEventListener('change',render);
form.addEventListener('reset',()=>setTimeout(render,0));

try{
  const {events:data}=await readSiteBundle(
    new URL('../data/current-release.json',document.baseURI).href,
    {players:new URL('../data/players.json',document.baseURI).href,
      events:new URL('../data/events.json',document.baseURI).href,
      standings:new URL('../data/league-standings.json',document.baseURI).href}
  );
  const raw=Array.isArray(data.events)?data.events:[];
  const normalized=window.ICAEventStatus?.normalize(raw)??raw;
  completed=(await applySorceryEventOverlays(normalized,{dataRoot:new URL('../data/',document.baseURI).href}))
    .filter(e=>e.status==='conclusa')
    .sort((a,b)=>text(b.date).localeCompare(text(a.date))||text(a.title).localeCompare(text(b.title),'it'));
  year.insertAdjacentHTML('beforeend',distinct(completed,eventYear).sort().reverse().map(v=>option(v,v)).join(''));
  format.insertAdjacentHTML('beforeend',distinct(completed,fmt).map(v=>option(v,v)).join(''));
  series.insertAdjacentHTML('beforeend',distinct(completed,circuit).map(v=>option(v,v)).join(''));
  render();
}catch(error){
  console.error('Archivio: impossibile leggere i dati verificati',error);
  status.textContent='Archivio temporaneamente non disponibile.';
  output.innerHTML='<p class="archive-empty">Non è stato possibile caricare gli eventi. Riprova più tardi.</p>';
  form.hidden=true;
}