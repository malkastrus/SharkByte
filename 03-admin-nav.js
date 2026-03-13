// Secret admin — click logo 5x rápido
let lc=0,lt=null;
function logoClick(){sv('l');}
let sc=0,st2=null;
function secretAdmin(){sc++;if(st2)clearTimeout(st2);st2=setTimeout(()=>sc=0,3000);if(sc>=3){sc=0;sv('l');}}
// Hash-based admin access: go to URL#admin
window.addEventListener('hashchange',()=>{if(location.hash==='#admin')sv('l');});
if(location.hash==='#admin') setTimeout(()=>sv('l'),100);

function sv(v){
  g('vs').style.display='none';g('vl').style.display='none';g('va').style.display='none';
  if(v==='s'){g('vs').style.display='block';rS();renderHero();}
  else if(v==='l'){g('vl').style.display='flex';}
  else if(v==='a'){g('va').style.display='flex';D.ctab=sanitizeAdminTab(D.ctab);buildNav();rT(D.ctab);}
}


const ADMIN_TABS=[['p','📦','Productos'],['r','💬','Reseñas'],['k','🧮','Calculadora'],['s','⚙️','Ajustes']];
function sanitizeAdminTab(tab){return ADMIN_TABS.some(([id])=>id===tab)?tab:'p';}

function buildNav(){
  D.ctab=sanitizeAdminTab(D.ctab);
  g('nav').innerHTML=ADMIN_TABS.map(([id,ic,lb])=>`<button class="nb${D.ctab===id?' on':''}" onclick="sT('${id}',this)">${ic} ${lb}</button>`).join('');
}

function sT(t,btn){
  t=sanitizeAdminTab(t);
  document.querySelectorAll('.tab').forEach(el=>{el.classList.remove('on');el.style.display='none';});
  document.querySelectorAll('.nb').forEach(el=>el.classList.remove('on'));
  g('tab-'+t).classList.add('on');g('tab-'+t).style.display='block';
  if(btn) btn.classList.add('on');
  D.ctab=t;rT(t);
}
function rT(t){({p:rProd,r:rRevAdmin,k:rCalc,s:rCfg})[sanitizeAdminTab(t)]?.();}
function cm(id){g(id).style.display='none';}

function doLogin(){
  const em=g('le').value.trim().toLowerCase();
  const pw=g('lp').value;
  if(em==='malkastrus99@gmail.com' && pw==='Nikki11'){sv('a');}
  else{g('lerr').style.display='block';setTimeout(()=>g('lerr').style.display='none',2500);}
}
