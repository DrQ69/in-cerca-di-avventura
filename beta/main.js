const menu=document.getElementById('menu');
const nav=document.getElementById('mobile-nav');
if(menu&&nav){
  const close=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')};
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') close()});
}
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
