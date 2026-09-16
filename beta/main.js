const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
const header=document.querySelector('[data-header]');

if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  }));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&nav.classList.contains('open')){
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
      menu.focus();
    }
  });
}

document.getElementById('year').textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll('.primary-nav a').forEach(a=>a.removeAttribute('aria-current'));
      const active=document.querySelector(`.primary-nav a[href="#${entry.target.id}"]`);
      if(active) active.setAttribute('aria-current','page');
    }
  });
},{rootMargin:'-40% 0px -50% 0px'});

document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));

window.addEventListener('scroll',()=>{
  if(header) header.dataset.scrolled=String(window.scrollY>20);
},{passive:true});
