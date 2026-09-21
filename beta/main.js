const menu=document.getElementById('menu');
const nav=document.getElementById('mobile-nav');
if(menu&&nav){
  const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');};
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')close();});
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

function esc(value){
  return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function todayKey(){
  const now=new Date();
  const y=now.getFullYear();
  const m=String(now.getMonth()+1).padStart(2,'0');
  const d=String(now.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

function fmtDate(value,options={day:'numeric',month:'long',year:'numeric'}){
  if(!value)return 'Data da verificare';
  return new Intl.DateTimeFormat('it-IT',options).format(new Date(value+'T12:00:00'));
}

function futureEvents(events){
  const today=todayKey();
  return events
    .filter(event=>event.status==='futura'&&event.date&&event.date>today)
    .sort((a,b)=>a.date.localeCompare(b.date));
}

function renderNextEvent(events){
  const title=document.getElementById('next-title');
  const facts=document.getElementById('next-event-facts');
  const card=document.getElementById('next-event-card');
  if(!title||!facts)return;

  const next=futureEvents(events)[0];
  if(!next){
    title.textContent='Nessuna Adunanza futura registrata';
    facts.innerHTML='<li>Il calendario verrà aggiornato quando sarà disponibile un nuovo evento verificato.</li>';
    card?.removeAttribute('data-event-id');
    return;
  }

  title.textContent=next.title;
  card?.setAttribute('data-event-id',next.event_id||'');
  const place=[next.venue,next.city].filter(Boolean).join(' · ')||'Luogo da definire';
  const format=next.format||'Formato da definire';
  facts.innerHTML=`
    <li><strong>${esc(fmtDate(next.date))}</strong></li>
    <li>${esc(place)}</li>
    <li>${esc(format)}</li>
  `;
}

function renderUpcomingPreview(events){
  const root=document.getElementById('upcoming-event-grid');
  if(!root)return;
  const list=futureEvents(events).slice(0,3);
  if(!list.length){
    root.innerHTML='<p>Nessuna Adunanza futura registrata.</p>';
    return;
  }
  const imageClasses=['image-a','image-b','image-c'];
  root.innerHTML=list.map((event,index)=>{
    const place=event.city||event.venue||'Luogo da definire';
    const date=fmtDate(event.date,{day:'numeric',month:'long'});
    const format=event.format||'Formato da definire';
    return `<article class="event-tile" data-event-id="${esc(event.event_id)}"><span class="event-image ${imageClasses[index]||'image-a'}" aria-hidden="true"></span><b>${esc(event.title)}</b><small>${esc(place)} · ${esc(date)}</small><em>${esc(format)}</em></article>`;
  }).join('');
}

fetch('../data/events.json',{cache:'no-store'})
  .then(response=>{if(!response.ok)throw new Error(`HTTP ${response.status}`);return response.json();})
  .then(data=>{
    const events=Array.isArray(data.events)?data.events:[];
    renderNextEvent(events);
    renderUpcomingPreview(events);
  })
  .catch(reason=>{
    console.error('Homepage event data load failed',reason);
    const title=document.getElementById('next-title');
    const facts=document.getElementById('next-event-facts');
    const root=document.getElementById('upcoming-event-grid');
    if(title)title.textContent='Calendario non disponibile';
    if(facts)facts.innerHTML='<li>Riprova più tardi.</li>';
    if(root)root.innerHTML='<p>Calendario non disponibile.</p>';
  });
