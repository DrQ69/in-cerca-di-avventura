const queryEl=document.getElementById('archive-query');
const typeEl=document.getElementById('archive-type');
const yearEl=document.getElementById('archive-year');
const formatEl=document.getElementById('archive-format');
const resetEl=document.getElementById('archive-reset');
const resultsEl=document.getElementById('archive-results');
const emptyEl=document.getElementById('archive-empty');
const countEl=document.getElementById('archive-count');
const statusEl=document.getElementById('archive-status');

const KIND_LABELS={evento:'Evento',cronaca:'Cronaca',avventuriero:'Avventuriero',tesoro:'Tesoro',deck:'Deck',proclama:'Proclama'};
const esc=value=>String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const norm=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('it').trim();
const fmtDate=value=>value?new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'}).format(new Date(value+'T12:00:00')):'Data non registrata';
const eventExternalId=event=>(event.official_results_url||event.official_event_url||event.registration_url||'').match(/\/events\/([a-z0-9]+)/i)?.[1]||null;
const eventHref=event=>event.status==='conclusa'?'../cronache/evento/?id='+encodeURIComponent(event.event_id):'../adunanze/nazionale/#event-'+encodeURIComponent(event.event_id);

let records=[];

function record(base){
 const searchText=[base.title,base.description,base.meta,base.kind,base.format,base.year,...(base.terms||[])].filter(Boolean).join(' ');
 return {...base,search:norm(searchText)};
}

function buildCore(events,players,treasures,proclami){
 const out=[];
 for(const event of events){
  const year=event.date?.slice(0,4)||'';
  const meta=[event.date?fmtDate(event.date):'',event.venue,event.city,event.format].filter(Boolean).join(' · ');
  out.push(record({id:'event:'+event.event_id,kind:'evento',title:event.title,meta,description:[event.series_name,event.organizer,event.player_count?event.player_count+' partecipanti':null].filter(Boolean).join(' · '),href:eventHref(event),date:event.date||'',year,format:event.format||'',terms:[event.event_id,event.classification,event.status]}));
  if(event.status==='conclusa'){
   out.push(record({id:'chronicle:'+event.event_id,kind:'cronaca',title:event.title,meta,description:['Evento concluso',event.winner_display_name?'Vincitore: '+event.winner_display_name:null,event.player_count?event.player_count+' partecipanti':null].filter(Boolean).join(' · '),href:'../cronache/evento/?id='+encodeURIComponent(event.event_id),date:event.date||'',year,format:event.format||'',terms:[event.event_id,'risultati classifica cronache']}));
  }
 }
 for(const player of players){
  out.push(record({id:'player:'+player.id,kind:'avventuriero',title:player.nickname,meta:[player.city,player.community_name].filter(Boolean).join(' · '),description:'Profilo pubblico nel registro degli Avventurieri.',href:'../avventurieri/?player='+encodeURIComponent(player.id)+'#player-'+encodeURIComponent(player.id),date:'',year:'',format:'',terms:[player.id,player.slug,player.play_style,player.last_deck]}));
 }
 const eventById=new Map(events.map(event=>[event.event_id,event]));
 for(const item of treasures){
  const event=eventById.get(item.event_id);
  out.push(record({id:'treasure:'+item.treasure_id,kind:'tesoro',title:item.name,meta:[item.prize_position,event?.title,item.expansion,item.rarity,item.finish==='foil'?'Foil':item.finish==='non_foil'?'Non-Foil':null].filter(Boolean).join(' · '),description:item.notes||'Premio registrato nell’Archivio dei Tesori.',href:'../tesori/evento.html?event='+encodeURIComponent(item.event_id),date:event?.date||'',year:event?.date?.slice(0,4)||'',format:event?.format||'',terms:[item.treasure_id,item.family,item.signature,item.champion_type]}));
 }
 for(const item of proclami){
  out.push(record({id:'proclamation:'+(item.id||item.slug||item.title),kind:'proclama',title:item.title||'Proclama',meta:item.date?fmtDate(item.date):'',description:item.summary||item.excerpt||'',href:item.url||'../#proclami',date:item.date||'',year:item.date?.slice(0,4)||'',format:'',terms:[item.slug,item.category]}));
 }
 return out;
}

async function buildDeckRecords(events){
 const eventByExternal=new Map(events.map(event=>[eventExternalId(event),event]).filter(([id])=>id));
 let index;
 try{
  const response=await fetch('../data/external/sorcery/events/index.json',{cache:'no-store'});
  if(!response.ok)return[];
  index=await response.json();
 }catch{return[];}
 const snapshots=await Promise.all((index.events||[]).map(async id=>{
  try{
   const response=await fetch('../data/external/sorcery/events/'+encodeURIComponent(id)+'.json',{cache:'no-store'});
   return response.ok?await response.json():null;
  }catch{return null;}
 }));
 const out=[];
 for(const snapshot of snapshots.filter(Boolean)){
  const event=eventByExternal.get(snapshot.event?.id);
  if(!event)continue;
  for(const registration of snapshot.registrations||[]){
   const deck=registration.deck;
   if(!deck||deck.deck_status!=='available')continue;
   const cards=deck.cards||[];
   const avatar=cards.find(card=>card.board_source==='Avatar');
   const siteCount=cards.filter(card=>card.board_source==='Main'&&card.category==='Site').reduce((s,c)=>s+(Number(c.quantity)||0),0);
   const spellCount=cards.filter(card=>card.board_source==='Main'&&card.category!=='Site').reduce((s,c)=>s+(Number(c.quantity)||0),0);
   const description=[deck.deck_name||'Decklist evento',avatar?.name?'Avatar: '+avatar.name:null,'Atlas: '+siteCount,'Spellbook: '+spellCount].filter(Boolean).join(' · ');
   out.push(record({id:'deck:'+snapshot.event.id+':'+registration.registration_id,kind:'deck',title:(deck.deck_name||'Deck')+' — '+registration.display_name,meta:[event.title,event.date?fmtDate(event.date):'',deck.format].filter(Boolean).join(' · '),description,href:'../cronache/evento/?id='+encodeURIComponent(event.event_id),date:event.date||'',year:event.date?.slice(0,4)||'',format:deck.format||event.format||'',terms:[registration.display_name,avatar?.name,...cards.map(card=>card.name),...cards.map(card=>card.slug)]}));
  }
 }
 return out;
}

function populateFilters(){
 const kinds=[...new Set(records.map(r=>r.kind))].sort((a,b)=>(KIND_LABELS[a]||a).localeCompare(KIND_LABELS[b]||b,'it'));
 typeEl.insertAdjacentHTML('beforeend',kinds.map(kind=>'<option value="'+esc(kind)+'">'+esc(KIND_LABELS[kind]||kind)+'</option>').join(''));
 const years=[...new Set(records.map(r=>r.year).filter(Boolean))].sort((a,b)=>b.localeCompare(a));
 yearEl.insertAdjacentHTML('beforeend',years.map(year=>'<option>'+esc(year)+'</option>').join(''));
 const formats=[...new Set(records.map(r=>r.format).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'it'));
 formatEl.insertAdjacentHTML('beforeend',formats.map(format=>'<option>'+esc(format)+'</option>').join(''));
}

function render(){
 const q=norm(queryEl.value);
 const type=typeEl.value;
 const year=yearEl.value;
 const format=formatEl.value;
 const filtered=records.filter(r=>(!q||r.search.includes(q))&&(!type||r.kind===type)&&(!year||r.year===year)&&(!format||r.format===format));
 filtered.sort((a,b)=>{
  if(a.date&&b.date&&a.date!==b.date)return b.date.localeCompare(a.date);
  if(a.date!==b.date)return a.date?-1:1;
  return a.title.localeCompare(b.title,'it');
 });
 resultsEl.innerHTML=filtered.map(r=>'<article class="archive-card" data-kind="'+esc(r.kind)+'"><span class="archive-badge">'+esc(KIND_LABELS[r.kind]||r.kind)+'</span><h3>'+esc(r.title)+'</h3>'+(r.meta?'<p class="archive-meta">'+esc(r.meta)+'</p>':'')+(r.description?'<p class="archive-description">'+esc(r.description)+'</p>':'')+'<a class="archive-link" href="'+esc(r.href)+'">Apri →</a></article>').join('');
 emptyEl.hidden=filtered.length!==0;
 countEl.textContent=String(filtered.length);
 statusEl.textContent=filtered.length===1?'risultato':'risultati';
}

async function load(){
 try{
  const [eventsR,playersR,treasuresR,proclamiR]=await Promise.all([
   fetch('../data/events.json',{cache:'no-store'}),
   fetch('../data/players.json',{cache:'no-store'}),
   fetch('../data/treasures.json',{cache:'no-store'}),
   fetch('../data/proclami.json',{cache:'no-store'})
  ]);
  if([eventsR,playersR,treasuresR,proclamiR].some(r=>!r.ok))throw new Error('Uno o più dataset non sono disponibili');
  const [eventsDoc,playersDoc,treasuresDoc,proclamiDoc]=await Promise.all([eventsR.json(),playersR.json(),treasuresR.json(),proclamiR.json()]);
  const events=eventsDoc.events||[];
  records=[
   ...buildCore(events,playersDoc.players||[],treasuresDoc.items||[],proclamiDoc.items||[]),
   ...await buildDeckRecords(events)
  ];
  populateFilters();
  statusEl.textContent='risultati';
  render();
 }catch(error){
  console.error('Archivio load failed',error);
  countEl.textContent='0';
  statusEl.textContent='Archivio non disponibile';
  emptyEl.hidden=false;
  emptyEl.textContent='L’Archivio non è disponibile in questo momento.';
 }
}

[queryEl,typeEl,yearEl,formatEl].forEach(control=>control.addEventListener(control===queryEl?'input':'change',render));
resetEl.addEventListener('click',()=>{queryEl.value='';typeEl.value='';yearEl.value='';formatEl.value='';render();queryEl.focus();});
load();
