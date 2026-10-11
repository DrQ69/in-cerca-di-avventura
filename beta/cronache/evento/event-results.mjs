const title=document.getElementById('event-title');
const subtitle=document.getElementById('event-subtitle');
const loading=document.getElementById('loading');
const error=document.getElementById('error');
const summary=document.getElementById('summary');
const standingsSection=document.getElementById('standings-section');
const standingsBody=document.getElementById('standings-body');
const dialog=document.getElementById('deck-dialog');
const deckContent=document.getElementById('deck-content');
document.getElementById('year').textContent=new Date().getFullYear();

const esc=value=>String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const fmtPct=value=>Number.isFinite(value)?new Intl.NumberFormat('it-IT',{style:'percent',maximumFractionDigits:2}).format(value):'—';
const fmtDate=value=>value?new Intl.DateTimeFormat('it-IT',{day:'numeric',month:'long',year:'numeric'}).format(new Date(value+'T12:00:00')):'—';

function sorceryId(event){
  const url=event?.official_results_url||event?.official_event_url||event?.registration_url||'';
  return url.match(/\/events\/([a-z0-9]+)/i)?.[1]||null;
}

function deckSections(deck){
  const sections=new Map([['Avatar',[]],['Atlas',[]],['Spellbook',[]],['Collection',[]]]);
  for(const card of deck?.cards||[]){
    if(card.board_source==='Avatar') sections.get('Avatar').push(card);
    else if(card.board_source==='Main'&&card.category==='Site') sections.get('Atlas').push(card);
    else if(card.board_source==='Main') sections.get('Spellbook').push(card);
    else if(card.board_source==='Collection') sections.get('Collection').push(card);
    else{
      if(!sections.has(card.board_source||'Altro')) sections.set(card.board_source||'Altro',[]);
      sections.get(card.board_source||'Altro').push(card);
    }
  }
  return sections;
}

function deckMarkup(registration){
  const deck=registration?.deck;
  if(!deck||deck.deck_status!=='available') return '<p class="deck-empty">Decklist non disponibile.</p>';
  const groups=deckSections(deck);
  const order=['Avatar','Atlas','Spellbook','Collection',...Array.from(groups.keys()).filter(key=>!['Avatar','Atlas','Spellbook','Collection'].includes(key))];
  return '<div class="deck-heading"><p>Decklist evento</p><h2 id="deck-title">'+esc(registration.display_name)+'</h2>'+
    (deck.deck_name?'<span>'+esc(deck.deck_name)+'</span>':'')+
    '<small>Presentazione ICA derivata dalla snapshot Sorcery: Main viene separato in Atlas (Sites) e Spellbook (Spells); Collection resta indicata con il nome sorgente.</small></div>'+
    order.filter(key=>(groups.get(key)||[]).length).map(key=>{
      const cards=groups.get(key);
      const total=cards.reduce((sum,card)=>sum+(Number(card.quantity)||0),0);
      return '<section class="deck-board"><h3>'+esc(key)+' <small>'+total+' carte</small></h3><div class="deck-grid">'+
        cards.map(card=>'<article class="deck-card">'+
          (card.image_source_url?'<img src="'+esc(card.image_source_url)+'" alt="" loading="lazy">':'')+
          '<div><strong>'+esc(card.name)+'</strong><span>×'+esc(card.quantity)+'</span><small>'+esc(card.category||'')+'</small></div></article>').join('')+
        '</div></section>';
    }).join('');
}

function openDeck(registration){
  deckContent.innerHTML=deckMarkup(registration);
  dialog.showModal();
}

function render(event,snapshot){
  const played=snapshot.registrations.filter(item=>item.participation_status==='played');
  const noShows=snapshot.registrations.filter(item=>item.participation_status==='registered_no_show');
  const registrationById=new Map(snapshot.registrations.map(item=>[item.registration_id,item]));
  const playedIds=new Set(played.map(item=>item.registration_id));
  const standings=snapshot.standings.filter(item=>playedIds.has(item.registration_id));

  title.textContent=event.title||snapshot.event.title||'Evento concluso';
  subtitle.textContent=[fmtDate(event.date),event.venue,event.city].filter(Boolean).join(' · ');

  summary.innerHTML=[
    ['Partecipanti',played.length],
    ['Registrazioni online',snapshot.registrations.length],
    ['No-show',noShows.length],
    ['Decklist disponibili',played.filter(item=>item.deck?.deck_status==='available').length+'/'+played.length]
  ].map(([label,value])=>'<div class="summary-stat"><span>'+esc(label)+'</span><strong>'+esc(value)+'</strong></div>').join('');
  summary.hidden=false;

  standingsBody.innerHTML=standings.map(row=>{
    const reg=registrationById.get(row.registration_id);
    const deckAvailable=reg?.deck?.deck_status==='available';
    return '<tr'+(row.rank===1?' class="is-winner"':'')+'>'+
      '<td data-label="Pos.">'+esc(row.rank)+'</td>'+
      '<td data-label="Giocatore"><strong>'+esc(row.display_name)+'</strong></td>'+
      '<td data-label="Avatar"><span class="avatar-cell">'+
        (row.avatar?.image_source_url?'<img src="'+esc(row.avatar.image_source_url)+'" alt="" loading="lazy">':'')+
        '<span>'+esc(row.avatar?.name||'—')+'</span></span></td>'+
      '<td data-label="W-D-L">'+esc(row.wins)+'-'+esc(row.draws)+'-'+esc(row.losses)+'</td>'+
      '<td data-label="Pt.">'+esc(row.points)+'</td>'+
      '<td data-label="OMW">'+esc(fmtPct(row.omw))+'</td>'+
      '<td data-label="CMP">'+esc(row.cmp??'—')+'</td>'+
      '<td data-label="Mazzo">'+(deckAvailable?'<button class="deck-button" type="button" data-registration="'+esc(row.registration_id)+'">Vedi mazzo</button>':'<span class="deck-unavailable">—</span>')+'</td>'+
      '</tr>';
  }).join('');

  standingsBody.querySelectorAll('.deck-button').forEach(button=>button.addEventListener('click',()=>openDeck(registrationById.get(button.dataset.registration))));
  standingsSection.hidden=false;
  loading.hidden=true;
}

async function load(){
  try{
    const params=new URLSearchParams(location.search);
    const eventId=params.get('id');
    if(!eventId) throw new Error('Missing ICA event id');
    const eventsResponse=await fetch('../../../data/events.json',{cache:'no-store'});
    if(!eventsResponse.ok) throw new Error('events.json HTTP '+eventsResponse.status);
    const eventsDoc=await eventsResponse.json();
    const event=(eventsDoc.events||[]).find(item=>item.event_id===eventId);
    if(!event) throw new Error('ICA event not found');
    const externalId=sorceryId(event);
    if(!externalId) throw new Error('Sorcery event id not available');
    const sourceResponse=await fetch('../../../data/external/sorcery/events/'+encodeURIComponent(externalId)+'.json',{cache:'no-store'});
    if(!sourceResponse.ok) throw new Error('Sorcery normalized snapshot HTTP '+sourceResponse.status);
    const snapshot=await sourceResponse.json();
    render(event,snapshot);
  }catch(reason){
    console.error('Event results load failed',reason);
    loading.hidden=true;
    error.hidden=false;
  }
}

dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
load();
