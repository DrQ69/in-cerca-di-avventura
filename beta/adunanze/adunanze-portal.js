const menu=document.getElementById('menu');
const mobile=document.getElementById('mobile-nav');

if(menu&&mobile){
  const closeMenu=()=>{
    mobile.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
  };

  menu.addEventListener('click',()=>{
    const open=mobile.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });

  mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape')closeMenu();
  });
}
