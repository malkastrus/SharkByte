const WA="584246689203";
const g=id=>document.getElementById(id);
let D={
  products:[
    {id:1,name:"Control PS5 DualSense",desc:"Control inalámbrico original Sony PS5, gatillos adaptativos y vibración háptica",priceUSD:45,cost:28,stock:3,status:'available',cat:'Consolas',em:'🎮',featured:true,discountPct:10,isNew:true,waitlist:[],reviews:[]},
    {id:2,name:"Audífonos Gaming RGB",desc:"Surround 7.1 virtual, micrófono desmontable, iluminación RGB multicolor",priceUSD:25,cost:12,stock:0,status:'agotado',cat:'Accesorios',em:'🎧',featured:false,waitlist:[],reviews:[]},
    {id:3,name:"Mousepad XL Gamer",desc:"900×400mm superficie textil premium, base antideslizante, costuras reforzadas",priceUSD:12,cost:5,stock:5,status:'available',cat:'PC Gaming',em:'🖱️',featured:true,discountPct:15,isNew:false,waitlist:[],reviews:[]},
    {id:4,name:"Figura Goku Ultra Instinct",desc:"Figura coleccionable 20cm PVC alta calidad, pintada a mano, base incluida",priceUSD:18,cost:8,stock:2,status:'available',cat:'Coleccionables',em:'⚡',featured:false,waitlist:[],reviews:[]},
    {id:5,name:"Teclado Mecánico TKL",desc:"Switch Blue táctil, retroiluminación RGB, formato sin numpad, muy compacto",priceUSD:38,cost:20,stock:1,status:'available',cat:'PC Gaming',em:'⌨️',featured:false,waitlist:[],reviews:[
      {id:1,name:"Luis P.",stars:5,comment:"Excelente teclado, lo recomiendo 100%",imgData:null,date:'2025-03-10'}
    ]},
    {id:6,name:"Mouse Gamer RGB 3200DPI",desc:"Sensor óptico de alta precisión, 7 botones programables, iluminación RGB",priceUSD:22,cost:10,stock:4,status:'available',cat:'PC Gaming',em:'🖱️',featured:false,discountPct:0,isNew:true,waitlist:[],reviews:[]},
    {id:7,name:"Silla Gamer ErgoX",desc:"Respaldo reclinable 180°, apoyabrazos ajustables, cojín lumbar incluido",priceUSD:120,cost:75,stock:2,status:'available',cat:'Accesorios',em:'🪑',featured:true,waitlist:[],reviews:[]},
    {id:8,name:"Control Xbox Series",desc:"Control inalámbrico original Microsoft, compatible PC y Xbox, cable USB-C",priceUSD:40,cost:25,stock:3,status:'available',cat:'Consolas',em:'🕹️',featured:false,discountPct:12,isNew:false,waitlist:[],reviews:[]},
    {id:9,name:"Figura Naruto Sage Mode",desc:"Figura coleccionable 22cm, edición limitada, vibrante pintura detallada",priceUSD:20,cost:9,stock:3,status:'available',cat:'Coleccionables',em:'🌀',featured:false,waitlist:[],reviews:[]},
    {id:10,name:"Camiseta Gamer Oversize",desc:"100% algodón premium, diseño exclusivo SharkByte, tallas S a XXL",priceUSD:15,cost:6,stock:10,status:'available',cat:'Ropa Gamer',em:'👕',featured:false,waitlist:[],reviews:[]},
    {id:11,name:"Webcam HD 1080p",desc:"Resolución Full HD, micrófono integrado con cancelación de ruido, plug & play",priceUSD:35,cost:18,stock:2,status:'available',cat:'PC Gaming',em:'📷',featured:false,waitlist:[],reviews:[]},
    {id:12,name:"Headset PS4/PS5 Gold",desc:"Audio 3D inmersivo, micrófono retráctil, compatible PS4/PS5/PC",priceUSD:30,cost:15,stock:0,status:'agotado',cat:'Accesorios',em:'🎧',featured:false,waitlist:[],reviews:[]},
    {id:13,name:"Figura Iron Man Mark 50",desc:"Figura articulada 20cm, escala 1:10, viene con base display incluida",priceUSD:25,cost:11,stock:2,status:'available',cat:'Coleccionables',em:'🦾',featured:false,waitlist:[],reviews:[]},
    {id:14,name:"Adaptador Nintendo Switch",desc:"Dock portátil USB-C, salida HDMI 4K, carga mientras jugás",priceUSD:28,cost:14,stock:1,status:'available',cat:'Consolas',em:'🎮',featured:false,waitlist:[],reviews:[]},
    {id:15,name:"Gorra Snapback Gamer",desc:"Diseño bordado premium, ajuste snapback, talla única",priceUSD:12,cost:5,stock:8,status:'available',cat:'Ropa Gamer',em:'🧢',featured:false,waitlist:[],reviews:[]},
  ],
  orders:[
    {id:1,client:"Carlos M.",phone:"+58412345678",email:"carlos@gmail.com",products:["Control PS5 DualSense"],total:45,payment:"Binance",status:'completado',date:'2025-03-01',tasa:38.5},
    {id:2,client:"María G.",phone:"+58424987654",email:"",products:["Mousepad XL Gamer"],total:12,payment:"Pago Móvil",status:'pendiente',date:'2025-03-08',tasa:38.5},
  ],
  expenses:[
    {id:1,desc:"Compra AliExpress x5",amount:60,currency:'USD',type:'compra',date:'2025-03-01'},
  ],
  clients:[
    {id:1,name:"Carlos M.",phone:"+58412345678",email:"carlos@gmail.com",source:'compra',purchases:2,total:63,lastBuy:'2025-03-01'},
    {id:2,name:"María G.",phone:"+58424987654",email:"",source:'compra',purchases:1,total:12,lastBuy:'2025-03-08'},
  ],
  waitlistContacts:[],
  subscribers:[],
  cfg:{
    tasaBCV:38.5,tasaParalelo:40.2,tasaCLP:950,
    binanceUser:'RoccoGaming',pagoMovil:'04246687613',cedula:'26618867',banco:'Banesco',
    zones:[{name:'Local',price:2},{name:'Caracas',price:5},{name:'Interior',price:8}],
    heroTitle:'SHARKBYTE',
    heroSub:'Los mejores productos geek y gamer de Venezuela 🇻🇪\nEnvíos a todo el país',
    phrases:['🔥 Nuevos productos cada semana','🚚 Envíos rápidos','✅ Calidad garantizada'],
    instaUrl:'https://instagram.com/sharkbyte',
    paymentPhrases:{
      Binance:'💡 Enviá el pago a nuestro usuario y adjuntá el screenshot como comprobante',
      'Pago Móvil':'📱 Realizá el pago móvil y adjuntá la captura de pantalla del recibo',
      Efectivo:'💵 El pago se realiza al momento de la entrega. Indicanos si necesitás vuelto'
    }
  },
  cp:null,cat:'Todos',ctab:'p',selectedPM:null,selectedStar:0,selectedRevProd:null,vuelto:null
};

function ntf(msg,type='ok'){
  const c={ok:'#22c55e',err:'#ef4444',info:'#00e5ff',purple:'#a855f7'};
  const el=g('notif');
  el.textContent=msg;el.style.borderLeft='3px solid '+c[type];el.style.color=c[type];
  el.style.border='1px solid '+c[type]+'44';
  el.classList.add('on');setTimeout(()=>el.classList.remove('on'),3500);
}


let prodImgData=null;
function handleProdImg(input){const file=input.files[0];if(!file)return;const r=new FileReader();r.onload=ev=>{prodImgData=ev.target.result;const box=g('pfimg-preview');if(box)box.innerHTML=`<img src="${prodImgData}" style="width:100%;max-height:140px;object-fit:cover;border-radius:12px"/><p style="font-size:11px;color:#16a34a;margin-top:6px">✅ Imagen lista</p>`;};r.readAsDataURL(file);}
function prodMedia(p,mode='card'){if(p.imgData){if(mode==='modal')return `<img src="${p.imgData}" style="width:100%;max-height:240px;object-fit:cover;border-radius:16px;margin-bottom:16px" class="gaming-glow"/>`;if(mode==='thumb')return `<img src="${p.imgData}" style="width:40px;height:40px;object-fit:cover;border-radius:10px"/>`;return `<img src="${p.imgData}" style="width:100%;height:100%;object-fit:cover"/>`;}return `<div style="font-size:${mode==='modal'?'72px':'60px'};display:flex;align-items:center;justify-content:center;width:100%;height:100%">${p.em}</div>`;}

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


const DEFAULT_TAXONOMY={
  'Consolas':['PlayStation','Xbox','Nintendo','Accesorios de consola'],
  'Accesorios':['Audio','Sillas','Cables','Streaming'],
  'PC Gaming':['Teclados','Mousepads','Mouses','Webcams'],
  'Coleccionables':['Anime','Marvel/DC','Figuras'],
  'Ropa Gamer':['Franelas','Gorras','Hoodies'],
  'Otros':['General']
};
function ensureTaxonomy(){
  if(!D.taxonomy) D.taxonomy=JSON.parse(JSON.stringify(DEFAULT_TAXONOMY));
  Object.keys(DEFAULT_TAXONOMY).forEach(cat=>{if(!D.taxonomy[cat])D.taxonomy[cat]=[...DEFAULT_TAXONOMY[cat]];});
  D.products.forEach(p=>{
    if(!D.taxonomy[p.cat]) D.taxonomy[p.cat]=[];
    if(p.subcat && !D.taxonomy[p.cat].includes(p.subcat)) D.taxonomy[p.cat].push(p.subcat);
    if(!p.subcat) p.subcat=D.taxonomy[p.cat][0]||'General';
  });
}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function catOptions(selected=''){
  ensureTaxonomy();
  return Object.keys(D.taxonomy).map(c=>`<option ${c===selected?'selected':''}>${esc(c)}</option>`).join('');
}
function subcatOptions(cat,selected=''){
  ensureTaxonomy();
  const subs=(D.taxonomy[cat]||['General']);
  return subs.map(sc=>`<option ${sc===selected?'selected':''}>${esc(sc)}</option>`).join('');
}
function refreshSubcatSelect(selected=''){
  const catEl=g('pfc'),subEl=g('pfsc');
  if(!catEl||!subEl) return;
  ensureTaxonomy();
  const cat=catEl.value;
  subEl.innerHTML=subcatOptions(cat,selected||((D.taxonomy[cat]||['General'])[0]||'General'));
}
function addCat(){
  ensureTaxonomy();
  const inp=g('newcat');
  const name=(inp?.value||'').trim();
  if(!name){ntf('Escribe el nombre de la categoría','err');return;}
  if(D.taxonomy[name]){ntf('Esa categoría ya existe','info');return;}
  D.taxonomy[name]=['General'];
  if(inp) inp.value='';
  rProd();
  ntf('Categoría agregada ✅');
}
function addSubcat(cat){
  ensureTaxonomy();
  const inp=g('newsub-'+cat.replace(/[^a-z0-9]/gi,''));
  const name=(inp?.value||'').trim();
  if(!name){ntf('Escribe la subcategoría','err');return;}
  if(!D.taxonomy[cat]) D.taxonomy[cat]=[];
  if(D.taxonomy[cat].includes(name)){ntf('Esa subcategoría ya existe','info');return;}
  D.taxonomy[cat].push(name);
  if(inp) inp.value='';
  rProd();
  ntf('Subcategoría agregada ✅');
}
function remSubcat(cat,sub){
  ensureTaxonomy();
  if((D.taxonomy[cat]||[]).length<=1){ntf('Deja al menos una subcategoría','info');return;}
  D.taxonomy[cat]=D.taxonomy[cat].filter(s=>s!==sub);
  D.products.forEach(p=>{if(p.cat===cat&&p.subcat===sub)p.subcat=D.taxonomy[cat][0]||'General';});
  rProd();rS();
  ntf('Subcategoría eliminada');
}
function remCat(cat){
  ensureTaxonomy();
  const count=D.products.filter(p=>p.cat===cat).length;
  if(count){ntf('Primero mueve o elimina los productos de esa categoría','err');return;}
  delete D.taxonomy[cat];
  rProd();rS();
  ntf('Categoría eliminada');
}
function renderTaxManager(){
  ensureTaxonomy();
  return `<div class="panel" style="padding:18px;margin-bottom:18px;background:#08111f;border:1px solid #2f80c333">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:12px">
      <div><h3 style="font-size:14px;color:#66c7f4">Categorías y subcategorías</h3><p style="font-size:11px;color:#7b93ad">Puedes crear familias de productos sin romper el catálogo.</p></div>
      <div style="display:flex;gap:8px;min-width:280px;flex:1;justify-content:flex-end">
        <input id="newcat" placeholder="Nueva categoría" style="max-width:220px"/>
        <button class="bp" onclick="addCat()" style="padding:9px 14px">+ Categoría</button>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px">
      ${Object.entries(D.taxonomy).map(([cat,subs])=>`<div style="background:#0d0d20;border:1px solid #1e1e40;border-radius:12px;padding:12px">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center;margin-bottom:10px">
          <strong style="font-size:13px;color:#e2e8f0">${esc(cat)}</strong>
          <button onclick="remCat('${esc(cat)}')" style="background:#ef444411;border:1px solid #ef444433;color:#ef4444;padding:4px 8px;border-radius:8px;font-size:11px">Eliminar</button>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">${subs.map(sub=>`<span style="display:inline-flex;align-items:center;gap:6px;background:#66c7f411;border:1px solid #66c7f433;color:#bfe8ff;padding:5px 9px;border-radius:999px;font-size:11px">${esc(sub)} <button onclick="remSubcat('${esc(cat)}','${esc(sub)}')" style="background:none;border:none;color:#ef4444;cursor:pointer">×</button></span>`).join('')}</div>
        <div style="display:flex;gap:8px"><input id="newsub-${cat.replace(/[^a-z0-9]/gi,'')}" placeholder="Nueva subcategoría"/><button class="bs" onclick="addSubcat('${esc(cat)}')" style="padding:8px 12px">+ Sub</button></div>
      </div>`).join('')}
    </div>
  </div>`;
}

let adminProdState={q:'',cat:'Todos',sub:'Todos'};
function setAdminProdSearch(v){adminProdState.q=v||'';rProd();}
function setAdminProdFilter(cat='Todos',sub='Todos'){adminProdState.cat=cat;adminProdState.sub=sub;rProd();}
function clearAdminProdFilter(){adminProdState={q:'',cat:'Todos',sub:'Todos'};rProd();}
function ensureFinanceFlags(){D.expenses.forEach(e=>{if(!e.status)e.status='activo';});}
function activeExpenses(){ensureFinanceFlags();return D.expenses.filter(e=>e.status!=='anulado');}
function moneyColorPalette(n){const base=['#66c7f4','#8b5cf6','#4fd1c5','#f59e0b','#22c55e','#ef4444','#ec4899','#38bdf8'];return Array.from({length:n},(_,i)=>base[i%base.length]);}
function miniBarChart(data,{colors=null,currency='',height=180,empty='Sin datos para graficar',detailType='none',panelId='',totalLabel=''}={}){
  const arr=(data||[]).filter(d=>Number(d.value)>0);
  const total=arr.reduce((s,d)=>s+Number(d.value||0),0);
  if(!arr.length) return `<div style="font-size:12px;color:#7b93ad;padding:18px 0">${empty}</div>`;
  const max=Math.max(...arr.map(d=>Math.abs(d.value)),1);
  const bw=54,gap=22,left=18,base=height-32;
  const width=Math.max(300,left+arr.length*(bw+gap)+10);
  const pal=colors&&colors.length?colors:moneyColorPalette(arr.length);
  const bars=arr.map((d,i)=>{const h=Math.max(14,(Math.abs(d.value)/max)*(height-68));const x=left+i*(bw+gap);const y=base-h;const fill=pal[i%pal.length];const key=String(d.key||d.label).replace(/'/g,"&#39;");const click=detailType!=='none'&&panelId?`onclick="showChartDetail('${detailType}','${key}','${panelId}')" style="cursor:pointer"`:'';return `<g ${click}><rect x="${x}" y="${y}" rx="12" ry="12" width="${bw}" height="${h}" fill="${fill}" opacity="0.9"></rect><text x="${x+bw/2}" y="${y-8}" text-anchor="middle" fill="#dff6ff" font-size="11" font-family="Inter">${currency}${Number(d.value).toFixed(Number.isInteger(d.value)?0:2)}</text><text x="${x+bw/2}" y="${height-10}" text-anchor="middle" fill="#7b93ad" font-size="10" font-family="Inter">${esc(d.label)}</text></g>`}).join('');
  return `<div style="overflow:auto"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span style="font-size:11px;color:#7b93ad">${totalLabel||'Total'}</span><strong style="font-size:13px;color:#e6f8ff">${currency}${total.toFixed(2)}</strong></div><svg viewBox="0 0 ${width} ${height}" width="100%" height="${height}" role="img"><line x1="10" y1="${base}" x2="${width-10}" y2="${base}" stroke="#22304a" stroke-width="1"></line>${bars}</svg></div>`;
}
function monthShort(dateStr){const d=new Date(dateStr);return isNaN(d)?String(dateStr).slice(5,7):d.toLocaleDateString('es-VE',{month:'short'});}
function statusChartData(){const m={pendiente:0,completado:0,cancelado:0};D.orders.forEach(o=>{m[o.status]=(m[o.status]||0)+1;});return Object.entries(m).map(([key,value])=>({key,label:key,value}));}
function categoryChartData(){ensureTaxonomy();const m={};D.products.forEach(p=>{m[p.cat]=(m[p.cat]||0)+1;});return Object.entries(m).map(([key,value])=>({key,label:key.length>10?key.slice(0,10)+'…':key,value}));}
function productSalesChartData(){const m={};D.orders.filter(o=>o.status==='completado').forEach(o=>{(o.products||[]).forEach(p=>{m[p]=(m[p]||0)+1;});});return Object.entries(m).map(([key,value])=>({key,label:key.length>12?key.slice(0,12)+'…':key,value}));}
function monthlySalesData(){const m={};D.orders.filter(o=>o.status==='completado').forEach(o=>{const key=o.date?.slice(0,7)||'Sin fecha';m[key]=(m[key]||0)+o.total;});return Object.entries(m).sort().map(([key,value])=>({key,label:monthShort(key+'-01'),value}));}
function paymentChartData(){const m={};D.orders.filter(o=>o.status==='completado').forEach(o=>{m[o.payment]=(m[o.payment]||0)+o.total;});return Object.entries(m).map(([key,value])=>({key,label:key.length>10?key.slice(0,10)+'…':key,value}));}
function expenseTypeChartData(){const m={};activeExpenses().forEach(e=>{m[e.type]=(m[e.type]||0)+e.amount;});return Object.entries(m).map(([key,value])=>({key,label:key.length>10?key.slice(0,10)+'…':key,value}));}
function getCategoryStockSummary(){ensureTaxonomy();const out=[];Object.entries(D.taxonomy).forEach(([cat,subs])=>{const catProds=D.products.filter(p=>p.cat===cat);out.push({cat,sub:'Todos',stock:catProds.reduce((s,p)=>s+(p.stock||0),0)});(subs||[]).forEach(sub=>{const list=catProds.filter(p=>(p.subcat||'General')===sub);out.push({cat,sub,stock:list.reduce((s,p)=>s+(p.stock||0),0)});});});return out;}
function showChartDetail(type,key,panelId='chart-detail'){const panel=g(panelId);if(!panel)return;ensureTaxonomy();ensureFinanceFlags();let html='';
if(type==='category'){const items=D.products.filter(p=>p.cat===key);html=`<h3 style="font-size:14px;color:#66c7f4;margin-bottom:10px">${esc(key)}</h3>${items.map(p=>`<button onclick="goToProductEdit(${p.id})" style="width:100%;text-align:left;background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px;color:#e2e8f0;cursor:pointer"><div style="font-weight:700">${esc(p.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(p.subcat||'General')} · Stock ${p.stock}</div></button>`).join('')||'<p style="color:#7b93ad">Sin productos</p>'}`;}
else if(type==='orderStatus'){const items=D.orders.filter(o=>o.status===key);html=`<h3 style="font-size:14px;color:#8b5cf6;margin-bottom:10px">Pedidos ${esc(key)}</h3>${items.map(o=>`<div style="background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px"><div style="font-weight:700;color:#e2e8f0">${esc(o.client)}</div><div style="font-size:11px;color:#7b93ad">${esc((o.products||[]).join(', '))} · $${o.total}</div></div>`).join('')||'<p style="color:#7b93ad">Sin pedidos</p>'}`;}
else if(type==='payment'){const items=D.orders.filter(o=>o.status==='completado'&&o.payment===key);html=`<h3 style="font-size:14px;color:#8b5cf6;margin-bottom:10px">Ventas por ${esc(key)}</h3>${items.map(o=>`<div style="background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px"><div style="font-weight:700;color:#e2e8f0">${esc(o.client)}</div><div style="font-size:11px;color:#7b93ad">${esc((o.products||[]).join(', '))} · $${o.total}</div></div>`).join('')||'<p style="color:#7b93ad">Sin ventas</p>'}`;}
else if(type==='monthSales'){const items=D.orders.filter(o=>o.status==='completado'&&(o.date||'').slice(0,7)===key);html=`<h3 style="font-size:14px;color:#66c7f4;margin-bottom:10px">Ventas ${esc(monthShort(key+'-01'))}</h3>${items.map(o=>`<div style="background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px"><div style="font-weight:700;color:#e2e8f0">${esc(o.client)}</div><div style="font-size:11px;color:#7b93ad">${esc((o.products||[]).join(', '))} · $${o.total}</div></div>`).join('')||'<p style="color:#7b93ad">Sin ventas</p>'}`;}
else if(type==='expenseType'){const items=activeExpenses().filter(e=>e.type===key);html=`<h3 style="font-size:14px;color:#ef4444;margin-bottom:10px">Gastos ${esc(key)}</h3>${items.map(e=>`<button onclick="goToExpense(${e.id})" style="width:100%;text-align:left;background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px;color:#e2e8f0;cursor:pointer"><div style="font-weight:700">${esc(e.desc)}</div><div style="font-size:11px;color:#7b93ad">${e.date} · ${e.amount} ${e.currency}</div></button>`).join('')||'<p style="color:#7b93ad">Sin gastos activos</p>'}`;}
else if(type==='productSales'){const items=D.products.filter(p=>p.name===key);html=`<h3 style="font-size:14px;color:#4fd1c5;margin-bottom:10px">Producto ${esc(key)}</h3>${items.map(p=>`<button onclick="goToProductEdit(${p.id})" style="width:100%;text-align:left;background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px;color:#e2e8f0;cursor:pointer"><div style="font-weight:700">${esc(p.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(p.cat)} · ${esc(p.subcat||'General')} · Stock ${p.stock}</div></button>`).join('')||'<p style="color:#7b93ad">No se encontró el producto</p>'}`;}
panel.innerHTML=html||'<p style="color:#7b93ad">Selecciona una barra para ver el detalle.</p>';}
function goToProductEdit(id){const btn=[...document.querySelectorAll('.nb')].find(b=>b.textContent.includes('Productos'));if(btn){sT('p',btn);setTimeout(()=>eprod(id),80);}}
function goToExpense(id){const btn=[...document.querySelectorAll('.nb')].find(b=>b.textContent.includes('Gastos'));if(btn){sT('e',btn);setTimeout(()=>{const row=g('exp-'+id);if(row){row.scrollIntoView({behavior:'smooth',block:'center'});row.style.boxShadow='0 0 0 2px #ef4444';setTimeout(()=>row.style.boxShadow='',1600);}},120);}}

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
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&g('vl').style.display!=='none')doLogin();});

function renderHero(){
  const cfg=D.cfg;
  g('hero-title').textContent=cfg.heroTitle;
  g('hero-sub').innerHTML=cfg.heroSub.replace(/\n/g,'<br/>');
  g('hero-phrases').innerHTML=(cfg.phrases||[]).map(p=>`<span style="background:#00e5ff0a;border:1px solid #00e5ff22;color:#94a3b8;padding:6px 14px;border-radius:20px;font-size:12px">${p}</span>`).join('');
}
function scrollToProducts(){document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});}
function openSubscribe(){g('sub-name').value='';g('sub-email').value='';g('sub-phone').value='';g('msub').style.display='flex';}
function sSub(){
  const e=g('sub-email').value;if(!e){ntf('Email requerido','err');return;}
  D.subscribers.push({name:g('sub-name').value,email:e,phone:g('sub-phone').value,date:new Date().toISOString().split('T')[0]});
  cm('msub');ntf('¡Registrado! Te avisaremos de novedades 🦈','purple');
}

// STORE
function rS(){
  ensureTaxonomy();
  const cfg=D.cfg;
  const sq=s=>String(s).replace(/'/g,"\\'");
  const cats=['Todos',...Object.keys(D.taxonomy)];
  g('scats').innerHTML=cats.map(c=>`<button onclick="setCat('${sq(c)}')" style="padding:9px 14px;border-radius:999px;border:1px solid ${D.cat===c?'#00b7ff55':'#d1e6f6'};background:${D.cat===c?'linear-gradient(135deg,#e4f9ff,#eef4ff)':'#ffffff'};color:${D.cat===c?'#007eb3':'#4f6f8d'};cursor:pointer;font-size:12px;font-weight:${D.cat===c?'900':'800'};box-shadow:${D.cat===c?'0 14px 30px rgba(0,183,255,.12)':'none'}">${c}</button>`).join('');
  const q=(g('ssrch').value||'').toLowerCase();
  const list=D.products.filter(p=>(D.cat==='Todos'||p.cat===D.cat)&&(`${p.name} ${p.cat} ${p.subcat||''}`).toLowerCase().includes(q));
  const featured=D.products.filter(p=>p.featured);
  const discounted=D.products.filter(p=>(Number(p.discountPct)||0)>0);
  const newest=D.products.filter(p=>p.isNew);
  const fs=g('featured-section');
  const ds=g('discount-section');
  if(featured.length>0){fs.style.display='block';g('featured-grid').innerHTML=featured.map(p=>pCard(p)).join('');}
  else fs.style.display='none';
  if(ds){
    if(discounted.length>0){ds.style.display='block';g('discount-grid').innerHTML=discounted.map(p=>pCard(p)).join('');}
    else ds.style.display='none';
  }
  g('sgrid').innerHTML=list.length?list.map(p=>pCard(p)).join(''):`<div class="home-empty">No encontramos productos con ese filtro todavía.</div>`;

  const heroPhrases=(cfg.phrases||[]).slice(0,6);
  g('hero-phrases').innerHTML=heroPhrases.map(p=>`<span class="hero-chip">${p}</span>`).join('');
  if(g('hero-total-products')) g('hero-total-products').textContent=D.products.length;
  if(g('hero-discount-count')) g('hero-discount-count').textContent=discounted.length;
  if(g('hero-new-count')) g('hero-new-count').textContent=newest.length;

  const catIcons={
    'Accesorios':'🎮','Audio':'🎧','Consolas':'🕹️','PC':'🖥️','Computación':'💻','Periféricos':'⌨️','Streaming':'📹','Decoración':'✨','Coleccionables':'🧸','Telefonía':'📱'
  };
  const homeCats=g('home-cats');
  if(homeCats){
    const catCards=Object.entries(D.taxonomy).map(([cat,subs])=>({cat,count:D.products.filter(p=>p.cat===cat).length,subs:(subs||[]).slice(0,2)})).filter(x=>x.count>0).sort((a,b)=>b.count-a.count).slice(0,8);
    homeCats.innerHTML=catCards.length?catCards.map(item=>`<button class="quick-card" onclick="setCat('${sq(item.cat)}');scrollToProducts()" style="text-align:left;border:none"><span>${catIcons[item.cat]||'🦈'}</span><strong>${item.cat}</strong><p>${item.subs.length?item.subs.join(' · '):'Explora todos los productos de esta categoría.'}</p><em>${item.count} producto${item.count===1?'':'s'}</em></button>`).join(''):`<div class="home-empty">Agrega categorías en productos para poblar esta sección.</div>`;
  }
}

function productDiscountPct(p){
  return Math.max(0, Math.min(90, Number(p?.discountPct)||0));
}
function productFinalPrice(p){
  const base=Number(p?.priceUSD)||0;
  const pct=productDiscountPct(p);
  return pct ? +(base*(1-pct/100)).toFixed(2) : base;
}
function productFeaturePills(p){
  const pills=[];
  if(p.featured) pills.push('<span style="background:#f59e0b14;border:1px solid #f59e0b44;color:#f59e0b;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800">⭐ Destacado</span>');
  const pct=productDiscountPct(p);
  if(pct>0) pills.push(`<span style="background:#ef444412;border:1px solid #ef444455;color:#ef4444;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800">🔥 -${pct}%</span>`);
  if(p.isNew) pills.push('<span style="background:#22c55e12;border:1px solid #22c55e44;color:#16a34a;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800">🆕 Nuevo</span>');
  return pills.join('');
}

function pCard(p){
  const av=p.status==='available'&&p.stock>0;
  const revs=p.reviews||[];
  const avg=revs.length?Math.round(revs.reduce((s,r)=>s+r.stars,0)/revs.length):0;
  const discountPct=productDiscountPct(p);
  const finalPrice=productFinalPrice(p);
  const savings=discountPct?Math.max(0,(Number(p.priceUSD)||0)-finalPrice):0;
  return `<div class="pcard" style="position:relative;overflow:hidden;border:1px solid ${p.featured?'#f59e0b33':discountPct?'#ef444433':av?'#00e5ff18':'#1e1e40'}">
    ${p.isNew?`<div style="position:absolute;top:${p.featured?'34px':'12px'};right:12px;background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.38);color:#15803d;font-size:10px;font-weight:900;padding:6px 10px;border-radius:10px;letter-spacing:.03em;z-index:3;box-shadow:0 8px 18px rgba(21,128,61,.10);backdrop-filter:blur(4px)">🆕 Nuevo</div>`:''}
    ${p.featured?'<div style="background:linear-gradient(135deg,#f59e0b,#f97316);color:#000;font-size:10px;font-weight:700;padding:4px 12px;text-align:center;letter-spacing:2px">⭐ PRODUCTO ESTRELLA</div>':''}
    <div class="gaming-glow" style="height:180px;background:linear-gradient(135deg,#dff4ff,#edf9ff 55%,#efe8ff);display:flex;align-items:center;justify-content:center;font-size:60px;position:relative;cursor:pointer" onclick="openProd(${p.id})">
      ${discountPct?`<div style="position:absolute;left:12px;top:12px;background:linear-gradient(135deg,#ef4444,#f97316);color:#fff;padding:6px 10px;border-radius:999px;font-size:10px;font-weight:900;letter-spacing:.06em;box-shadow:0 10px 18px rgba(239,68,68,.25);z-index:3">-${discountPct}% OFF</div>`:''}
      <div class="product-media-frame">${p.imgData?`<img src="${p.imgData}" alt="${esc(p.name)}"/>`:p.em}</div>${!av?'<div style="position:absolute;inset:0;background:#00000077;display:flex;align-items:center;justify-content:center"><span class="tag no">AGOTADO</span></div>':''}
    </div>
    <div style="padding:14px">
      <div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:10px;color:#475569;text-transform:uppercase">${p.cat}${p.subcat?` · ${p.subcat}`:''}</span><span class="tag ${av?'ok':'no'}">${av?'Stock:'+p.stock:'Agotado'}</span></div>
      ${productFeaturePills(p)?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${productFeaturePills(p)}</div>`:''}
      <h3 style="font-size:12px;font-weight:700;margin-bottom:4px;cursor:pointer" onclick="openProd(${p.id})">${p.name}</h3>
      ${avg?`<div style="font-size:12px;margin-bottom:5px">${'⭐'.repeat(avg)} <span style="font-size:10px;color:#475569">(${revs.length})</span></div>`:''}
      <p style="font-size:11px;color:#475569;margin-bottom:10px;line-height:1.5">${p.desc}</p>
      <div style="background:linear-gradient(135deg,#eff8ff,#f8f3ff);border-radius:12px;padding:10px 12px;margin-bottom:10px;border:1px solid #d8ebfb">
        ${discountPct?`<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:10px;flex-wrap:wrap"><div><div style="font-size:11px;color:#64748b;text-decoration:line-through;font-weight:700">$${Number(p.priceUSD).toFixed(2)} USD</div><div style="font-size:19px;font-weight:800;color:#ef4444;font-family:'Oxanium',sans-serif">$${finalPrice.toFixed(2)} <span style="font-size:10px;color:#475569">USD</span></div></div><div style="font-size:10px;color:#16a34a;font-weight:800">Ahorras $${savings.toFixed(2)}</div></div>`:`<div style="font-size:18px;font-weight:700;color:#00e5ff;font-family:'Oxanium',sans-serif">$${Number(p.priceUSD).toFixed(2)} <span style="font-size:10px;color:#475569">USD</span></div>`}
        <div style="font-size:11px;color:${discountPct?'#ef4444':'#f59e0b'};margin-top:2px">Bs. ${(finalPrice*D.cfg.tasaBCV).toFixed(2)}</div>
      </div>
      <div style="display:flex;gap:6px">
        ${av?`<button class="bp" onclick="oBuy(${p.id})" style="flex:1;padding:7px;font-size:12px">🛒 Comprar</button>`:`<button class="bs" onclick="oInt(${p.id})" style="flex:1;padding:7px;font-size:12px">🔔 Avísame</button>`}
        <button onclick="openRev(${p.id})" style="background:#a855f711;border:1px solid #a855f744;color:#a855f7;padding:7px 10px;border-radius:8px;font-size:14px;cursor:pointer">💬</button>
      </div>
    </div>
  </div>`;
}
function setCat(c){D.cat=c;rS();}

function openProd(id){
  const p=D.products.find(x=>x.id===id);
  const av=p.status==='available'&&p.stock>0;
  const discountPct=productDiscountPct(p);
  const finalPrice=productFinalPrice(p);
  g('pd-title').textContent=p.em+' '+p.name;
  g('pd-content').innerHTML=`
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">${productFeaturePills(p)||''}</div>
    ${prodMedia(p,'modal')}
    <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin-bottom:16px">${p.desc}</p>
    <div style="background:#060610;border-radius:10px;padding:16px;margin-bottom:16px">
      ${discountPct?`<div style="font-size:13px;color:#64748b;text-decoration:line-through;font-weight:700;margin-bottom:4px">$${Number(p.priceUSD).toFixed(2)} USD</div><div style="display:flex;justify-content:space-between;align-items:end;gap:12px;flex-wrap:wrap"><div style="font-size:30px;font-weight:800;color:#ef4444;font-family:'Oxanium',sans-serif">$${finalPrice.toFixed(2)} USD</div><div style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:800">-${discountPct}% OFF</div></div>`:`<div style="font-size:28px;font-weight:700;color:#00e5ff;font-family:'Oxanium',sans-serif">$${Number(p.priceUSD).toFixed(2)} USD</div>`}
      <div style="font-size:14px;color:${discountPct?'#ef4444':'#f59e0b'};margin-top:4px">Bs. ${(finalPrice*D.cfg.tasaBCV).toFixed(2)}</div>
    </div>
    <div style="margin-bottom:16px">
      <h3 style="font-size:13px;color:#a855f7;margin-bottom:10px">💬 Reseñas (${p.reviews?.length||0})</h3>
      ${(p.reviews&&p.reviews.length)?p.reviews.map(r=>`<div style="background:#060610;border-radius:8px;padding:12px;margin-bottom:8px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><strong style="font-size:13px">${r.name}</strong><span>${'⭐'.repeat(r.stars)}</span></div><p style="font-size:12px;color:#94a3b8">${r.comment}</p>${r.imgData?`<img src="${r.imgData}" style="width:100%;border-radius:8px;margin-top:8px;max-height:200px;object-fit:cover"/>`:''}</div>`).join(''):'<p style="color:#475569;font-size:12px">Sin reseñas aún. ¡Sé el primero! 💬</p>'}
    </div>
    <div style="display:flex;gap:8px">
      ${av?`<button class="bp" onclick="cm('mprod');oBuy(${p.id})" style="flex:1;padding:10px;font-size:13px">🛒 Comprar</button>`:''}
      <button onclick="cm('mprod');openRev(${p.id})" style="flex:1;padding:10px;border-radius:8px;background:#a855f711;border:1px solid #a855f744;color:#a855f7;font-size:13px;cursor:pointer">💬 Dejar Reseña</button>
    </div>
  `;
  g('mprod').style.display='flex';
}

// BUY
function oBuy(id){
  D.cp=D.products.find(p=>p.id===id);D.selectedPM=null;D.vuelto=null;
  g('mbt').textContent='🛒 '+D.cp.name;
  g('bn').value='';g('bph').value='';g('bmail').value='';g('bad').value='';
  g('bts').value=D.cfg.tasaBCV;
  ['pay-info-box','tasa-row','vuelto-row','comp-row'].forEach(id=>g(id).style.display='none');
  g('comp-preview').innerHTML='<p style="color:#475569;font-size:12px;margin-bottom:6px">Screenshot de tu pago</p><span style="background:#00e5ff11;border:1px solid #00e5ff44;color:#00e5ff;padding:6px 14px;border-radius:7px;font-size:12px">📎 Elegir imagen</span>';
  const pms=[{id:'Binance',icon:'🔶',label:'Binance P2P'},{id:'Pago Móvil',icon:'📱',label:'Pago Móvil'},{id:'Efectivo',icon:'💵',label:'Efectivo'}];
  g('pm-btns').innerHTML=pms.map(pm=>`<button id="pm-${pm.id.replace(' ','-')}" onclick="selectPM('${pm.id}')" style="flex:1;padding:9px 6px;border-radius:8px;border:1px solid #1e1e40;background:transparent;color:#475569;font-size:12px;font-family:'Inter',sans-serif;cursor:pointer;transition:all .2s">${pm.icon}<br/>${pm.label}</button>`).join('');
  const ph=D.cfg.phrases||[];
  g('buy-phrases').innerHTML=ph.length?`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px">${ph.map(p=>`<span style="background:#00e5ff08;border:1px solid #00e5ff18;color:#64748b;padding:4px 10px;border-radius:20px;font-size:11px">${p}</span>`).join('')}</div>`:'';
  ubc();g('mbuy').style.display='flex';
}

function selectPM(pm){
  D.selectedPM=pm;
  document.querySelectorAll('[id^="pm-"]').forEach(b=>{b.style.border='1px solid #1e1e40';b.style.background='transparent';b.style.color='#475569';});
  const bid='pm-'+pm.replace(' ','-');const btn=g(bid);
  if(btn){btn.style.border='1px solid #00e5ff';btn.style.background='#00e5ff11';btn.style.color='#00e5ff';}
  const cfg=D.cfg;
  const info={
    'Binance':`<p style="font-size:12px;color:#f59e0b;margin-bottom:10px">${cfg.paymentPhrases?.Binance||''}</p><div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #0f0f25"><span style="font-size:12px;color:#475569">Usuario Binance:</span><strong style="color:#00e5ff">${cfg.binanceUser}</strong></div>`,
    'Pago Móvil':`<p style="font-size:12px;color:#f59e0b;margin-bottom:10px">${cfg.paymentPhrases?.['Pago Móvil']||''}</p><div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #0f0f25"><span style="font-size:12px;color:#475569">Número:</span><strong style="color:#00e5ff">${cfg.pagoMovil}</strong></div><div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #0f0f25"><span style="font-size:12px;color:#475569">Banco:</span><strong style="color:#00e5ff">${cfg.banco}</strong></div><div style="display:flex;justify-content:space-between;padding:5px 0"><span style="font-size:12px;color:#475569">Cédula:</span><strong style="color:#00e5ff">V-${cfg.cedula}</strong></div>`,
    'Efectivo':`<p style="font-size:12px;color:#f59e0b">${cfg.paymentPhrases?.Efectivo||''}</p>`
  };
  g('pay-info-box').innerHTML=info[pm]||'';g('pay-info-box').style.display='block';
  g('tasa-row').style.display=(pm==='Pago Móvil'||pm==='Efectivo')?'block':'none';
  g('comp-row').style.display=(pm==='Binance'||pm==='Pago Móvil')?'block':'none';
  g('vuelto-row').style.display=pm==='Efectivo'?'block':'none';
  ubc();
}

function setVuelto(v){
  D.vuelto=v;
  g('v-si').style.cssText=`flex:1;padding:8px;border-radius:8px;border:1px solid ${v?'#22c55e44':'#1e1e40'};background:${v?'#22c55e11':'transparent'};color:${v?'#22c55e':'#475569'};font-size:13px;cursor:pointer`;
  g('v-no').style.cssText=`flex:1;padding:8px;border-radius:8px;border:1px solid ${!v?'#22c55e44':'#1e1e40'};background:${!v?'#22c55e11':'transparent'};color:${!v?'#22c55e':'#475569'};font-size:13px;cursor:pointer`;
  g('vuelto-monto').style.display=v?'block':'none';
}

let compData=null;
function handleComp(input){const file=input.files[0];if(!file)return;const r=new FileReader();r.onload=ev=>{compData=ev.target.result;g('comp-preview').innerHTML=`<img src="${compData}" style="width:100%;border-radius:8px;max-height:150px;object-fit:cover"/><p style="font-size:11px;color:#22c55e;margin-top:6px">✅ Comprobante listo</p>`;};r.readAsDataURL(file);}

function ubc(){
  const p=D.cp;if(!p)return;
  const price=productFinalPrice(p);
  const t=parseFloat(g('bts').value)||D.cfg.tasaBCV;
  if(g('tasa-row').style.display!=='none')g('btc').textContent='= Bs. '+(price*t).toFixed(2);
  g('bpr').innerHTML=`${(Number(p.discountPct)||0)>0?`<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #0f0f25"><span style="font-size:12px;color:#475569">USD base:</span><strong style="color:#64748b;text-decoration:line-through;font-family:'Oxanium',sans-serif">$${Number(p.priceUSD).toFixed(2)}</strong></div>`:''}<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #0f0f25"><span style="font-size:12px;color:#475569">USD final:</span><strong style="color:${(Number(p.discountPct)||0)>0?'#ef4444':'#00e5ff'};font-family:'Oxanium',sans-serif">$${price.toFixed(2)}</strong></div><div style="display:flex;justify-content:space-between;padding:5px 0"><span style="font-size:12px;color:#475569">Bs.:</span><strong style="color:${(Number(p.discountPct)||0)>0?'#ef4444':'#f59e0b'}">Bs. ${(price*t).toFixed(2)}</strong></div>`;
}

function sBuy(){
  const n=g('bn').value,ph=g('bph').value,em=g('bmail').value;
  if(!n||!ph){ntf('Nombre y WhatsApp requeridos','err');return;}
  if(!em){ntf('Email requerido para el recibo','err');return;}
  if(!D.selectedPM){ntf('Seleccioná un método de pago','err');return;}
  const p=D.cp,t=parseFloat(g('bts').value)||D.cfg.tasaBCV,pm=D.selectedPM,ad=g('bad').value;
  const price=productFinalPrice(p);
  let extra='';
  if(pm==='Efectivo'&&D.vuelto===true)extra+=`
💰 Necesita vuelto: ${g('vuelto-monto').value||'no especificado'}`;
  if(pm==='Efectivo'&&D.vuelto===false)extra+='\n💰 Tiene exacto';
  const msg=encodeURIComponent(`🦈 *PEDIDO - SHARKBYTE*

📦 ${p.name}
${(Number(p.discountPct)||0)>0?`🏷️ Precio base: $${Number(p.priceUSD).toFixed(2)} USD\n🔥 Descuento: ${Number(p.discountPct)}%\n`:''}💵 $${price.toFixed(2)} USD
💸 Bs. ${(price*t).toFixed(2)}
💳 Pago: ${pm}

👤 ${n}
📱 ${ph}
📧 ${em}${ad?`\n📍 ${ad}`:''}${extra}`);
  window.open('https://wa.me/'+WA+'?text='+msg,'_blank');
  aClient(n,ph,em,price,new Date().toISOString().split('T')[0]);
  cm('mbuy');ntf('¡Pedido enviado! 🦈');
  compData=null;
}

function oInt(id){
  D.cp=D.products.find(p=>p.id===id);
  g('mit').textContent='🔔 Avísame: '+D.cp.name;
  g('in').value='';g('ip').value='';g('imail').value='';
  g('mint').style.display='flex';
}
function sInt(){
  const n=g('in').value,ph=g('ip').value;
  if(!n||!ph){ntf('Nombre y WhatsApp requeridos','err');return;}
  const contact={id:Date.now(),name:n,phone:ph,email:g('imail').value,product:D.cp.name,productId:D.cp.id,date:new Date().toISOString().split('T')[0]};
  D.cp.waitlist.push({name:n,phone:ph});
  D.waitlistContacts.push(contact);
  cm('mint');ntf('¡Te avisamos cuando esté! 🔔');
}

// REVIEWS
let revImgData=null;
function openRev(id){
  D.selectedRevProd=id;D.selectedStar=0;revImgData=null;
  const p=D.products.find(x=>x.id===id);
  g('revt').textContent='💬 Reseña: '+p.name;
  g('rvn').value='';g('rvc').value='';
  for(let i=1;i<=5;i++)g('s'+i).style.opacity='.3';
  g('rv-preview').innerHTML='<p style="color:#475569;font-size:12px">Foto de tu compra</p>';
  g('mrev').style.display='flex';
}
function setStar(n){D.selectedStar=n;for(let i=1;i<=5;i++)g('s'+i).style.opacity=i<=n?'1':'.3';}
let revImgD=null;
function handleRevImg(input){const file=input.files[0];if(!file)return;const r=new FileReader();r.onload=ev=>{revImgD=ev.target.result;g('rv-preview').innerHTML=`<img src="${revImgD}" style="width:100%;border-radius:8px;max-height:120px;object-fit:cover"/><p style="font-size:11px;color:#22c55e;margin-top:4px">✅ Lista</p>`;};r.readAsDataURL(file);}
function sRev(){
  const n=g('rvn').value,c=g('rvc').value;
  if(!n||!c){ntf('Nombre y comentario requeridos','err');return;}
  if(!D.selectedStar){ntf('Elegí una calificación ⭐','err');return;}
  const p=D.products.find(x=>x.id===D.selectedRevProd);
  if(!p.reviews)p.reviews=[];
  p.reviews.push({id:Date.now(),name:n,stars:D.selectedStar,comment:c,imgData:revImgD,date:new Date().toISOString().split('T')[0]});
  cm('mrev');ntf('¡Reseña publicada! ✨','purple');rS();revImgD=null;
}

// CLIENT DB
function aClient(n,ph,em,total,date){
  const ex=D.clients.find(c=>c.phone===ph);
  if(ex){ex.purchases++;ex.total+=total;ex.lastBuy=date;if(em&&!ex.email)ex.email=em;}
  else D.clients.push({id:Date.now(),name:n,phone:ph,email:em||'',source:'compra',purchases:1,total,lastBuy:date});
}

// ===== ADMIN TABS =====
function rDash(){
  ensureTaxonomy();ensureFinanceFlags();
  const el=g('tab-d');
  const done=D.orders.filter(o=>o.status==='completado');
  const sales=done.reduce((s,o)=>s+o.total,0);
  const exps=activeExpenses().reduce((s,e)=>s+(e.currency==='USD'?e.amount:(e.amount/(D.cfg.tasaBCV||1))),0);
  const profit=sales-exps;const cfg=D.cfg;
  const allRevs=D.products.flatMap(p=>p.reviews||[]);
  el.innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Dashboard 🦈</h2><p style="color:#7b93ad;font-size:12px">Resumen SharkByte</p></div>
  <div class="g3" style="margin-bottom:24px">${[{i:'💵',l:'Ingresos',v:'$'+sales,s:'Bs.'+(sales*cfg.tasaBCV).toFixed(0),c:'#66c7f4'},{i:'💸',l:'Gastos',v:'$'+exps.toFixed(2),s:'USD activos',c:'#ef4444'},{i:'📈',l:'Ganancia',v:'$'+profit.toFixed(2),s:profit>=0?'✅':'⚠️',c:profit>=0?'#22c55e':'#ef4444'},{i:'🛒',l:'Pendientes',v:D.orders.filter(o=>o.status==='pendiente').length,s:'por confirmar',c:'#f59e0b'},{i:'👥',l:'BD Clientes',v:D.clients.length+D.waitlistContacts.length+D.subscribers.length,s:'contactos total',c:'#a855f7'},{i:'💬',l:'Reseñas',v:allRevs.length,s:'publicadas',c:'#22c55e'}].map(st=>`<div class="sc" style="border:1px solid ${st.c}22;border-left:3px solid ${st.c}"><div style="font-size:22px">${st.i}</div><div style="font-size:22px;font-weight:700;color:${st.c};font-family:'Oxanium',sans-serif">${st.v}</div><div style="font-size:11px;color:#7b93ad;margin-top:3px">${st.l}</div><div style="font-size:10px;color:#51637c;margin-top:2px">${st.s}</div></div>`).join('')}</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 340px;gap:18px;margin-bottom:18px;align-items:start">
    <div class="panel" style="padding:20px"><h3 style="font-size:13px;margin-bottom:12px;color:#66c7f4">Productos por categoría</h3>${miniBarChart(categoryChartData(),{colors:moneyColorPalette(categoryChartData().length),detailType:'category',panelId:'dash-detail',totalLabel:'Productos totales'})}</div>
    <div class="panel" style="padding:20px"><h3 style="font-size:13px;margin-bottom:12px;color:#7c5cff">Pedidos por estado</h3>${miniBarChart(statusChartData(),{colors:['#f59e0b','#22c55e','#ef4444'],detailType:'orderStatus',panelId:'dash-detail',totalLabel:'Pedidos totales'})}</div>
    <div class="panel" style="padding:20px;min-height:280px" id="dash-detail"><p style="color:#7b93ad;font-size:12px">Toca una barra para ver el detalle. Si tocas un producto te lleva a su ficha en Productos.</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 340px;gap:18px;align-items:start">
    <div class="panel" style="padding:20px"><h3 style="font-size:13px;margin-bottom:14px;color:#a855f7">Últimos Pedidos</h3>${D.orders.slice().reverse().slice(0,4).map(o=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f0f25"><div><div style="font-size:13px;font-weight:600">${o.client}</div><div style="font-size:10px;color:#7b93ad">${o.payment}</div></div><div style="text-align:right"><div style="color:#66c7f4;font-weight:700">$${o.total}</div><span class="tag ${o.status==='completado'?'ok':o.status==='pendiente'?'wr':'no'}">${o.status}</span></div></div>`).join('')}</div>
    <div class="panel" style="padding:20px"><h3 style="font-size:13px;margin-bottom:12px;color:#4fd1c5">Productos más vendidos</h3>${miniBarChart(productSalesChartData(),{colors:moneyColorPalette(productSalesChartData().length),detailType:'productSales',panelId:'dash-detail-2',totalLabel:'Ventas por producto'})}</div>
    <div class="panel" style="padding:20px;min-height:280px" id="dash-detail-2"><p style="color:#7b93ad;font-size:12px">Aquí verás detalle de productos y ventas.</p></div>
  </div>
  ${D.waitlistContacts.length?`<div style="background:#f59e0b08;border:1px solid #f59e0b33;border-radius:11px;padding:14px;margin-top:18px"><h3 style="font-size:13px;color:#f59e0b;margin-bottom:8px">🔔 Lista de Espera (${D.waitlistContacts.length})</h3><div style="display:flex;gap:8px;flex-wrap:wrap">${D.waitlistContacts.slice(-5).map(c=>`<span style="background:#f59e0b11;border:1px solid #f59e0b33;border-radius:7px;padding:5px 12px;font-size:12px;color:#f59e0b">${c.name} → ${c.product}</span>`).join('')}</div></div>`:''}`;
}

let eid=null,eem='📦';
function rProd(){
  ensureTaxonomy();
  const el=g('tab-p');const cfg=D.cfg;
  const q=(adminProdState.q||'').toLowerCase();
  const all=D.products.filter(p=>{const matchQ=!q||(`${p.name} ${p.cat} ${p.subcat||''}`).toLowerCase().includes(q);const matchCat=adminProdState.cat==='Todos'||p.cat===adminProdState.cat;const matchSub=adminProdState.sub==='Todos'||(p.subcat||'General')===adminProdState.sub;return matchQ&&matchCat&&matchSub;}).sort((a,b)=>a.cat.localeCompare(b.cat)||String(a.subcat||'').localeCompare(String(b.subcat||''))||a.name.localeCompare(b.name));
  const summary=getCategoryStockSummary();
  el.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px"><div><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Productos</h2><p style="color:#7b93ad;font-size:12px">${D.products.length} en catálogo</p></div><button class="bp" onclick="tpf()">+ Agregar</button></div>
  ${renderTaxManager()}
  <div class="panel" style="padding:16px;margin-bottom:18px"><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-bottom:12px"><input placeholder="Buscar por producto, categoría o subcategoría" value="${esc(adminProdState.q)}" oninput="setAdminProdSearch(this.value)" style="flex:1;min-width:240px"/><button class="bs" onclick="clearAdminProdFilter()">Limpiar filtros</button><span style="font-size:12px;color:#7b93ad">Viendo ${all.length} resultado(s)</span></div><div style="display:flex;gap:8px;flex-wrap:wrap">${summary.map(s=>`<button onclick="setAdminProdFilter('${s.cat}','${s.sub}')" style="background:${adminProdState.cat===s.cat&&adminProdState.sub===s.sub?'#66c7f422':'#0d0d20'};border:1px solid ${adminProdState.cat===s.cat&&adminProdState.sub===s.sub?'#66c7f455':'#1e1e40'};color:${adminProdState.cat===s.cat&&adminProdState.sub===s.sub?'#bfe8ff':'#e2e8f0'};padding:8px 12px;border-radius:999px;font-size:11px;cursor:pointer">${esc(s.cat)}${s.sub!=='Todos'?` · ${esc(s.sub)}`:''} <strong>(${s.stock})</strong></button>`).join('')}</div></div>
  <div id="pf" style="display:none;background:#0d0d20;border:1px solid #66c7f433;border-radius:12px;padding:22px;margin-bottom:22px">
    <h3 id="pft" style="font-size:15px;color:#66c7f4;margin-bottom:18px">Nuevo Producto</h3>
    <div class="g2" style="margin-bottom:12px">
      <div><label class="lbl">Nombre *</label><input id="pfn"/></div>
      <div><label class="lbl">Categoría</label><select id="pfc" onchange="refreshSubcatSelect()">${catOptions()}</select></div>
      <div><label class="lbl">Subcategoría</label><select id="pfsc"></select></div>
      <div><label class="lbl">Emoji</label><input id="pfemtxt" placeholder="Opcional: 🎮"/></div>
      <div style="grid-column:1/-1"><label class="lbl">Descripción</label><input id="pfd"/></div>
      <div><label class="lbl">Precio (USD)*</label><input id="pfp" type="number" oninput="upc()"/></div>
      <div><label class="lbl">Costo (USD)</label><input id="pfco" type="number" oninput="upc()"/></div>
      <div><label class="lbl">Stock</label><input id="pfst" type="number"/></div>
      <div><label class="lbl">Estado</label><select id="pfes"><option value="available">✅ Disponible</option><option value="agotado">❌ Agotado</option><option value="apartado">🟡 Apartado</option></select></div>
      <div style="grid-column:1/-1"><label class="lbl">Foto del producto</label><div class="upload-area" onclick="document.getElementById('pfimg').click()"><input type="file" id="pfimg" accept="image/*" style="display:none" onchange="handleProdImg(this)"/><div id="pfimg-preview"><p style="font-size:12px;color:#5f7d99">Sube una foto real del producto o del mockup</p><span style="display:inline-block;margin-top:8px;background:#2f80c311;border:1px solid #66c7f455;color:#2f80c3;padding:6px 12px;border-radius:8px;font-size:12px">🖼️ Elegir imagen</span></div></div></div>
      <div style="grid-column:1/-1;display:flex;align-items:center;gap:10px;padding:12px;background:#f5fbff;border-radius:8px"><input type="checkbox" id="pfft" style="width:auto;accent-color:#f59e0b"/><label for="pfft" style="font-size:13px;color:#f59e0b;cursor:pointer">⭐ Producto Estrella (aparece en banner)</label></div>
    </div>
    <div style="margin-bottom:14px"><label class="lbl">Emoji rápido</label><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">${['🎮','🕹️','🎧','🖱️','⌨️','🖥️','📱','⚡','🌟','🏆','👾','🤖','🎯','📦','🧩','🎲','🦈'].map(e=>`<button id="eb${e}" onclick="sEm('${e}')" style="width:36px;height:36px;border-radius:7px;border:2px solid #1e1e40;background:transparent;cursor:pointer;font-size:17px">${e}</button>`).join('')}</div></div>
    <div id="pfc2" style="display:none;background:#060610;border-radius:8px;padding:11px;margin-bottom:14px;font-size:12px;flex-wrap:wrap;gap:16px"></div>
    <div style="display:flex;gap:10px"><button class="bp" onclick="sProd()" id="psb" style="padding:9px 22px;font-size:13px">✅ Agregar</button><button class="bs" onclick="tpf()" style="padding:9px 22px;font-size:13px">Cancelar</button></div>
  </div>
  <div class="panel" style="overflow:auto"><table><thead><tr><th>Producto</th><th>USD</th><th>Bs</th><th>Stock</th><th>⭐</th><th>Reseñas</th><th>Estado</th><th></th></tr></thead><tbody>${all.map(p=>`<tr><td><div style="display:flex;align-items:center;gap:9px">${prodMedia(p,'thumb')}<div><div style="font-size:13px;font-weight:600">${p.name}</div><div style="font-size:10px;color:#5f7d99">${p.cat}${p.subcat?` · ${p.subcat}`:''}</div></div></div></td><td style="color:#66c7f4;font-weight:700">$${p.priceUSD}</td><td style="color:#f59e0b;font-size:12px">Bs.${(p.priceUSD*cfg.tasaBCV).toFixed(0)}</td><td><span style="color:${p.stock<=2?'#ef4444':p.stock<=5?'#f59e0b':'#22c55e'};font-weight:700">${p.stock}</span></td><td><button onclick="tFeat(${p.id})" style="background:none;border:none;font-size:18px;cursor:pointer;opacity:${p.featured?1:.3}" title="Toggle estrella">${p.featured?'⭐':'☆'}</button></td><td style="font-size:12px;color:#a855f7">${p.reviews?.length||0} reseña(s)</td><td><button onclick="tps(${p.id})" class="tag ${p.status==='available'?'ok':p.status==='agotado'?'no':'wr'}" style="cursor:pointer;border:none">${p.status}</button></td><td><div style="display:flex;gap:6px"><button onclick="eprod(${p.id})" style="background:#66c7f411;border:1px solid #66c7f444;color:#66c7f4;padding:4px 9px;border-radius:6px;font-size:11px">✏️</button><button onclick="dprod(${p.id})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:4px 9px;border-radius:6px;font-size:11px">🗑️</button></div></td></tr>`).join('')}</tbody></table></div>`;
  eid=null;eem='📦';prodImgData=null;setTimeout(()=>refreshSubcatSelect(),0);
}
function tpf(){const f=g('pf');f.style.display=f.style.display==='none'?'block':'none';if(f.style.display==='block')setTimeout(()=>{if(!eid){if(g('pfdisc'))g('pfdisc').value='0';if(g('pfnew'))g('pfnew').checked=false;if(g('pfft'))g('pfft').checked=false;}refreshSubcatSelect();if(typeof upc==='function')upc();},0);}
function sEm(e){document.querySelectorAll('[id^="eb"]').forEach(b=>b.style.border='2px solid #1e1e40');const b=g('eb'+e);if(b)b.style.border='2px solid #66c7f4';eem=e;const txt=g('pfemtxt');if(txt)txt.value=e;}
function upc(){
  const pr=parseFloat(g('pfp').value)||0,co=parseFloat(g('pfco').value)||0,cfg=D.cfg,disc=Math.max(0,Math.min(90,parseFloat(g('pfdisc')?.value)||0));
  if(pr){
    const final=disc?pr*(1-disc/100):pr;
    const el=g('pfc2');
    el.style.display='flex';
    el.innerHTML=`<span style="color:#5f7d99;font-weight:700">USD base: <strong style="color:#2f80c3">$${pr.toFixed(2)}</strong></span><span style="color:#5f7d99;font-weight:700">Precio final: <strong style="color:${disc?'#ef4444':'#2f80c3'}">$${final.toFixed(2)}</strong></span><span style="color:#5f7d99;font-weight:700">Bs: <strong style="color:${disc?'#ef4444':'#d97706'}">${(final*cfg.tasaBCV).toFixed(2)}</strong></span>${disc?`<span style="color:#ef4444;font-weight:800">Descuento: ${disc}%</span>`:''}${co?`<span style="color:#16a34a;font-weight:800">Ganancia: $${(final-co).toFixed(2)}</span>`:''}`;
  }
}
function sProd(){ensureTaxonomy();const n=g('pfn').value,pr=g('pfp').value;if(!n||!pr){ntf('Nombre y precio requeridos','err');return;}const em=(g('pfemtxt').value||eem||'📦').trim()||'📦';const d={name:n,desc:g('pfd').value,priceUSD:parseFloat(pr),cost:parseFloat(g('pfco').value)||0,stock:parseInt(g('pfst').value)||0,status:g('pfes').value,cat:g('pfc').value,subcat:g('pfsc').value,em:em,featured:g('pfft').checked,imgData:prodImgData};if(eid){const i=D.products.findIndex(p=>p.id===eid);if(!prodImgData)d.imgData=D.products[i].imgData||null;D.products[i]={...D.products[i],...d};ntf('Actualizado ✅');}else{D.products.push({...d,id:Date.now(),waitlist:[],reviews:[]});ntf('Agregado ✅');}rProd();rS();}
function eprod(id){const p=D.products.find(x=>x.id===id);eid=id;prodImgData=p.imgData||null;g('pf').style.display='block';g('pft').textContent='Editar';g('psb').textContent='💾 Guardar';g('pfn').value=p.name;g('pfd').value=p.desc;g('pfp').value=p.priceUSD;g('pfco').value=p.cost;g('pfst').value=p.stock;g('pfes').value=p.status;g('pfc').value=p.cat;refreshSubcatSelect(p.subcat||'');g('pfft').checked=p.featured||false;g('pfemtxt').value=p.em||'';const box=g('pfimg-preview');if(box){if(prodImgData){box.innerHTML=`<img src="${prodImgData}" style="width:100%;max-height:140px;object-fit:cover;border-radius:12px"/><p style="font-size:11px;color:#16a34a;margin-top:6px">✅ Imagen actual</p>`;}else{box.innerHTML='<p style="font-size:12px;color:#5f7d99">Sube una foto real del producto o del mockup</p><span style="display:inline-block;margin-top:8px;background:#2f80c311;border:1px solid #66c7f455;color:#2f80c3;padding:6px 12px;border-radius:8px;font-size:12px">🖼️ Elegir imagen</span>';}}sEm(p.em||'📦');upc();}
function dprod(id){D.products=D.products.filter(p=>p.id!==id);ntf('Eliminado','info');rProd();rS();}
function tps(id){const p=D.products.find(x=>x.id===id);p.status=p.status==='available'?'agotado':'available';rProd();rS();ntf('Estado actualizado');}
function tFeat(id){const p=D.products.find(x=>x.id===id);p.featured=!p.featured;ntf(p.featured?'⭐ Producto estrella':'Quitado de estrella');rProd();rS();}

function rOrders(){
  g('tab-o').innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px"><div><h2 style="font-size:20px;background:linear-gradient(135deg,#00e5ff,#0066aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Pedidos</h2><p style="color:#475569;font-size:12px">${D.orders.length} registrados</p></div><button class="bp" onclick="tof()">+ Nuevo</button></div>
  <div id="of" style="display:none;background:#0d0d20;border:1px solid #00e5ff22;border-radius:12px;padding:22px;margin-bottom:22px">
    <div class="g2" style="margin-bottom:12px">
      <div><label class="lbl">Cliente *</label><input id="ocl"/></div><div><label class="lbl">Teléfono</label><input id="oph"/></div>
      <div><label class="lbl">Email</label><input id="oem" type="email"/></div>
      <div><label class="lbl">Producto *</label><select id="opr"><option value="">-- Seleccionar --</option>${D.products.map(p=>`<option value="${p.id}">${p.em} ${p.name} · $${p.priceUSD}</option>`).join('')}</select></div>
      <div><label class="lbl">Pago</label><select id="opm"><option value="Binance">🔶 Binance</option><option value="Pago Móvil">📱 Pago Móvil</option><option value="Efectivo">💵 Efectivo</option></select></div>
      <div><label class="lbl">Estado</label><select id="ost"><option value="pendiente">⏳ Pendiente</option><option value="completado">✅ Completado</option><option value="cancelado">❌ Cancelado</option></select></div>
      <div><label class="lbl">Tasa</label><input id="ots" type="number" value="${D.cfg.tasaBCV}"/></div>
    </div>
    <div style="display:flex;gap:10px"><button class="bp" onclick="sOrd()" style="padding:9px 22px;font-size:13px">✅ Registrar</button><button class="bs" onclick="tof()" style="padding:9px 22px;font-size:13px">Cancelar</button></div>
  </div>
  <div style="display:flex;flex-direction:column;gap:9px">
  ${D.orders.slice().reverse().map(o=>`<div class="panel" style="padding:16px;border:1px solid ${o.status==='completado'?'#22c55e22':o.status==='pendiente'?'#f59e0b22':'#ef444422'}">
    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px"><div><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span style="font-weight:700;font-size:14px">${o.client}</span><span class="tag ${o.status==='completado'?'ok':o.status==='pendiente'?'wr':'no'}">${o.status}</span></div><div style="font-size:11px;color:#475569">${o.date}·${o.payment}${o.email?' · '+o.email:''}</div><div style="font-size:11px;color:#94a3b8">📦 ${o.products.join(',')}</div></div><div style="text-align:right"><div style="font-size:18px;font-weight:700;color:#00e5ff;font-family:'Oxanium',sans-serif">$${o.total}</div><div style="font-size:11px;color:#f59e0b">Bs. ${(o.total*o.tasa).toFixed(2)}</div></div></div>
    <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
      ${o.status==='pendiente'?`<button onclick="cfOrd(${o.id})" style="background:#22c55e11;border:1px solid #22c55e44;color:#22c55e;padding:5px 12px;border-radius:7px;font-size:12px;cursor:pointer">✅ Confirmar</button>`:''}
      ${o.phone?`<button onclick="waOrd(${o.id})" style="background:#25d36611;border:1px solid #25d36644;color:#25d366;padding:5px 12px;border-radius:7px;font-size:12px;cursor:pointer">💬 WA</button>`:''}
      ${o.status!=='cancelado'?`<button onclick="cnOrd(${o.id})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:5px 12px;border-radius:7px;font-size:12px;cursor:pointer">✕</button>`:''}
    </div>
  </div>`).join('')}
  </div>`;
}
function tof(){const f=g('of');f.style.display=f.style.display==='none'?'block':'none';}
function sOrd(){const cl=g('ocl').value,pid=g('opr').value;if(!cl||!pid){ntf('Cliente y producto requeridos','err');return;}const prod=D.products.find(p=>p.id===parseInt(pid));const st=g('ost').value;const o={id:Date.now(),client:cl,phone:g('oph').value,email:g('oem').value,products:[prod.name],total:prod.priceUSD,payment:g('opm').value,status:st,date:new Date().toISOString().split('T')[0],tasa:parseFloat(g('ots').value)||D.cfg.tasaBCV};D.orders.push(o);if(st==='completado'){prod.stock=Math.max(0,prod.stock-1);aClient(cl,g('oph').value,g('oem').value,prod.priceUSD,o.date);}ntf('Pedido registrado ✅');rOrders();}
function cfOrd(id){const o=D.orders.find(x=>x.id===id);if(o.status==='completado')return;const p=D.products.find(p=>p.name===o.products[0]);if(p)p.stock=Math.max(0,p.stock-1);o.status='completado';aClient(o.client,o.phone,o.email||'',o.total,o.date);ntf('✅ Confirmado');rOrders();}
function cnOrd(id){D.orders.find(x=>x.id===id).status='cancelado';ntf('Cancelado','info');rOrders();}
function waOrd(id){const o=D.orders.find(x=>x.id===id);const msg=encodeURIComponent(`🦈 *SHARKBYTE*
¡Gracias ${o.client}! 🙌
📦 ${o.products.join(',')}
💵 $${o.total}·Bs.${(o.total*o.tasa).toFixed(2)}
💳 ${o.payment}`);window.open('https://wa.me/'+o.phone.replace(/\D/g,'')+'?text='+msg,'_blank');}

function rExp(){
  ensureFinanceFlags();
  const total=activeExpenses().reduce((s,e)=>s+(e.currency==='USD'?e.amount:(e.amount/(D.cfg.tasaBCV||1))),0);
  const ico={compra:'🛍️',envio:'📦',marketing:'📢',servicio:'⚙️',otro:'💸'};
  g('tab-e').innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px"><div><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Gastos</h2><p style="color:#7b93ad;font-size:12px">Activos: $${total.toFixed(2)} USD · Los movimientos financieros solo se anulan.</p></div><button class="bp" onclick="tef()">+ Registrar</button></div>
  <div id="ef" style="display:none;background:#0d0d20;border:1px solid #00e5ff22;border-radius:12px;padding:22px;margin-bottom:22px"><div class="g2" style="margin-bottom:12px"><div style="grid-column:1/-1"><label class="lbl">Descripción *</label><input id="edd"/></div><div><label class="lbl">Monto *</label><input id="ema" type="number"/></div><div><label class="lbl">Moneda</label><select id="ecu"><option value="USD">💵 USD</option><option value="Bs">Bs</option></select></div><div><label class="lbl">Tipo</label><select id="ety"><option value="compra">🛍️ Compra</option><option value="envio">📦 Envío</option><option value="marketing">📢 Marketing</option><option value="servicio">⚙️ Servicio</option><option value="otro">💸 Otro</option></select></div><div><label class="lbl">Fecha</label><input id="eda" type="date" value="2026-03-11"/></div></div><div style="display:flex;gap:10px"><button class="bp" onclick="sExp()" style="padding:9px 22px;font-size:13px">💾 Guardar</button><button class="bs" onclick="tef()" style="padding:9px 22px;font-size:13px">Cancelar</button></div></div>
  <div style="display:flex;flex-direction:column;gap:8px">${D.expenses.slice().reverse().map(e=>`<div id="exp-${e.id}" class="panel" style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;gap:12px;opacity:${e.status==='anulado'?0.58:1}"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:22px">${ico[e.type]||'💸'}</span><div><div style="font-size:13px;font-weight:600">${e.desc}</div><div style="font-size:11px;color:#7b93ad">${e.date} · ${e.type} · <span class="tag ${e.status==='anulado'?'no':'ok'}">${e.status||'activo'}</span></div></div></div><div style="display:flex;align-items:center;gap:12px"><div style="font-weight:700;color:#ef4444;font-size:16px">-${e.amount} ${e.currency}</div><button onclick="toggleExpenseStatus(${e.id})" style="background:${e.status==='anulado'?'#22c55e11':'#ef444411'};border:1px solid ${e.status==='anulado'?'#22c55e44':'#ef444444'};color:${e.status==='anulado'?'#22c55e':'#ef4444'};padding:7px 12px;border-radius:8px;font-size:12px">${e.status==='anulado'?'Reactivar':'Anular'}</button></div></div>`).join('')}</div>`;
}
function tef(){const f=g('ef');f.style.display=f.style.display==='none'?'block':'none';}
function toggleExpenseStatus(id){const e=D.expenses.find(x=>x.id===id);if(!e)return;e.status=e.status==='anulado'?'activo':'anulado';ntf(e.status==='anulado'?'Movimiento anulado':'Movimiento reactivado','info');rExp();rDash();rFin();}
function tef(){const f=g('ef');f.style.display=f.style.display==='none'?'block':'none';}
function sExp(){const d=g('edd').value,a=g('ema').value;if(!d||!a){ntf('Completá los campos','err');return;}D.expenses.push({id:Date.now(),desc:d,amount:parseFloat(a),currency:g('ecu').value,type:g('ety').value,date:g('eda').value,status:'activo'});ntf('Gasto registrado ✅');rExp();rDash();rFin();}

// CRM - BASE DE DATOS COMPLETA
function rCRM(){
  const total=D.clients.length+D.waitlistContacts.length+D.subscribers.length;
  g('tab-c').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#00e5ff,#0066aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Base de Datos 🗃️</h2><p style="color:#475569;font-size:12px">${total} contactos en total</p></div>
  <div class="g4" style="margin-bottom:24px">${[{l:'Compradores',v:D.clients.length,c:'#00e5ff'},{l:'Lista Espera',v:D.waitlistContacts.length,c:'#f59e0b'},{l:'Suscriptores',v:D.subscribers.length,c:'#a855f7'},{l:'Total BD',v:total,c:'#22c55e'}].map(s=>`<div class="sc" style="border:1px solid ${s.c}22;border-left:3px solid ${s.c}"><div style="font-size:18px;font-weight:700;color:${s.c}">${s.v}</div><div style="font-size:11px;color:#475569;margin-top:3px">${s.l}</div></div>`).join('')}</div>
  
  <div style="background:#00e5ff08;border:1px solid #00e5ff22;border-radius:10px;padding:12px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
    <p style="font-size:12px;color:#475569">💡 Exportar toda la base de datos como texto copiable</p>
    <button onclick="exportDB()" style="background:#00e5ff11;border:1px solid #00e5ff44;color:#00e5ff;padding:6px 16px;border-radius:7px;font-size:12px;cursor:pointer">📋 Exportar BD</button>
  </div>
  <div id="export-area" style="display:none;background:#060610;border-radius:8px;padding:12px;margin-bottom:18px;font-size:11px;color:#94a3b8;white-space:pre-wrap;font-family:monospace;max-height:150px;overflow:auto"></div>

  <h3 style="font-size:14px;color:#00e5ff;margin-bottom:12px">🛒 Compradores</h3>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
  ${D.clients.length?D.clients.map(c=>`<div class="panel" style="padding:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:50%;background:#00e5ff11;display:flex;align-items:center;justify-content:center;font-weight:700;color:#00e5ff;font-size:14px">${c.name.charAt(0)}</div><div><div style="font-weight:700;font-size:13px">${c.name}</div><div style="font-size:11px;color:#475569">${c.phone}${c.email?' · '+c.email:''}</div></div></div><div style="display:flex;align-items:center;gap:10px"><div style="text-align:right"><div style="font-size:15px;font-weight:700;color:#00e5ff">$${c.total}</div><div style="font-size:10px;color:#475569">${c.purchases} compra(s)</div></div><a href="https://wa.me/${c.phone.replace(/\D/g,'')}" target="_blank" style="background:#25d36611;border:1px solid #25d36644;color:#25d366;padding:5px 10px;border-radius:7px;font-size:12px;text-decoration:none">💬</a></div></div>`).join(''):'<p style="color:#475569;font-size:12px">Sin compradores registrados</p>'}
  </div>

  <h3 style="font-size:14px;color:#f59e0b;margin-bottom:12px">🔔 Lista de Espera (Avísame)</h3>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
  ${D.waitlistContacts.length?D.waitlistContacts.map((c,i)=>`<div class="panel" style="padding:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;border:1px solid #f59e0b22"><div><div style="font-weight:700;font-size:13px">${c.name}</div><div style="font-size:11px;color:#475569">${c.phone}${c.email?' · '+c.email:''}</div><div style="font-size:10px;color:#f59e0b;margin-top:2px">Quiere: ${c.product}</div></div><div style="display:flex;gap:6px"><a href="https://wa.me/${c.phone.replace(/\D/g,'')}?text=${encodeURIComponent('¡Hola '+c.name+'! 🦈 *'+c.product+'* ya está disponible en SharkByte. ¡Escribinos para reservarlo! 💪')}" target="_blank" style="background:#25d36611;border:1px solid #25d36644;color:#25d366;padding:5px 10px;border-radius:7px;font-size:12px;text-decoration:none">💬 Notificar</a><button onclick="D.waitlistContacts.splice(${i},1);rCRM()" class="brd">🗑️</button></div></div>`).join(''):'<p style="color:#475569;font-size:12px">Sin contactos en lista de espera</p>'}
  </div>

  <h3 style="font-size:14px;color:#a855f7;margin-bottom:12px">🔔 Suscriptores (Novedades)</h3>
  <div style="display:flex;flex-direction:column;gap:8px">
  ${D.subscribers.length?D.subscribers.map((s,i)=>`<div class="panel" style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px"><div><div style="font-size:13px;font-weight:600">${s.name||'Sin nombre'}</div><div style="font-size:11px;color:#475569">${s.email}${s.phone?' · '+s.phone:''}</div></div><div style="display:flex;gap:6px"><span style="font-size:11px;color:#374151">${s.date}</span><button onclick="D.subscribers.splice(${i},1);rCRM()" class="brd">🗑️</button></div></div>`).join(''):'<p style="color:#475569;font-size:12px">Sin suscriptores aún</p>'}
  </div>`;
}

function exportDB(){
  const ea=g('export-area');
  let txt=`=== BASE DE DATOS SHARKBYTE ===

`;
  txt += `--- COMPRADORES ---
`;
  D.clients.forEach(c=>{ txt += `${c.name} | ${c.phone} | ${c.email||'sin email'} | $${c.total} | ${c.purchases} compras
`; });
  txt += `
--- LISTA DE ESPERA ---
`;
  D.waitlistContacts.forEach(c=>{ txt += `${c.name} | ${c.phone} | ${c.email||'sin email'} | Producto: ${c.product}
`; });
  txt += `
--- SUSCRIPTORES ---
`;
  D.subscribers.forEach(s=>{ txt += `${s.name||'sin nombre'} | ${s.email} | ${s.phone||'sin WA'}
`; });
  ea.textContent=txt;ea.style.display=ea.style.display==='none'?'block':'none';
  ntf('BD exportada 📋','info');
}

function rFin(){
  ensureFinanceFlags();
  const done=D.orders.filter(o=>o.status==='completado');const sales=done.reduce((s,o)=>s+o.total,0);const exps=activeExpenses().reduce((s,e)=>s+(e.currency==='USD'?e.amount:(e.amount/(D.cfg.tasaBCV||1))),0);const profit=sales-exps;const mg=sales>0?((profit/sales)*100).toFixed(1):0;const cfg=D.cfg;const pmt=done.reduce((a,o)=>{a[o.payment]=(a[o.payment]||0)+o.total;return a},{});
  g('tab-f').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Finanzas</h2></div>
  <div class="g4" style="margin-bottom:20px">${[{i:'📈',l:'Ingresos',v:'$'+sales.toFixed(2),c:'#22c55e'},{i:'📉',l:'Gastos',v:'$'+exps.toFixed(2),c:'#ef4444'},{i:'💰',l:'Ganancia',v:'$'+profit.toFixed(2),c:profit>=0?'#66c7f4':'#ef4444'},{i:'📊',l:'Margen',v:mg+'%',c:'#a855f7'}].map(c=>`<div class="sc" style="border:1px solid ${c.c}22;border-left:3px solid ${c.c}"><div>${c.i}</div><div style="font-size:18px;font-weight:700;color:${c.c};font-family:'Oxanium',sans-serif;margin-top:5px">${c.v}</div><div style="font-size:11px;color:#7b93ad">${c.l}</div></div>`).join('')}</div>
  <div class="panel" style="padding:18px;margin-bottom:16px"><h3 style="font-size:13px;margin-bottom:12px;color:#f59e0b">💱 Multi-moneda</h3><div class="g3">${[['USD 💵','#66c7f4','$'+profit.toFixed(2)],[`Bs ×${cfg.tasaBCV}`,'#f59e0b','Bs.'+(profit*cfg.tasaBCV).toFixed(2)],[`CLP ×${cfg.tasaCLP}`,'#a855f7','$'+(profit*cfg.tasaCLP).toLocaleString()]].map(([l,c,v])=>`<div style="text-align:center;padding:14px;background:#060610;border-radius:9px"><div style="font-size:16px;font-weight:700;color:${c}">${v}</div><div style="font-size:10px;color:#7b93ad;margin-top:3px">${l}</div></div>`).join('')}</div></div>
  <div style="display:grid;grid-template-columns:1fr 1fr 340px;gap:18px;margin-bottom:16px;align-items:start">
    <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#66c7f4">Ventas por mes</h3>${miniBarChart(monthlySalesData(),{colors:moneyColorPalette(monthlySalesData().length),currency:'$',detailType:'monthSales',panelId:'fin-detail',totalLabel:'Total ventas'})}</div>
    <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#a855f7">Ingresos por método</h3>${miniBarChart(paymentChartData(),{colors:moneyColorPalette(paymentChartData().length),currency:'$',detailType:'payment',panelId:'fin-detail',totalLabel:'Ingresos por método'})}</div>
    <div class="panel" style="padding:18px;min-height:280px" id="fin-detail"><p style="color:#7b93ad;font-size:12px">Toca una barra para ver el detalle financiero.</p></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 340px;gap:18px;align-items:start">
    <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#ef4444">Gastos por tipo</h3>${miniBarChart(expenseTypeChartData(),{colors:moneyColorPalette(expenseTypeChartData().length),currency:'$',detailType:'expenseType',panelId:'fin-detail-2',totalLabel:'Gastos activos'})}</div>
    <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#4fd1c5">Por Método</h3>${Object.entries(pmt).map(([m,t])=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #0f0f25"><span>${m}</span><span style="color:#66c7f4;font-weight:700">$${t.toFixed(2)}</span></div>`).join('')||'<p style="color:#7b93ad;font-size:12px">Sin ventas completadas</p>'}</div>
    <div class="panel" style="padding:18px;min-height:280px" id="fin-detail-2"><p style="color:#7b93ad;font-size:12px">Aquí aparecerán gastos, ventas y movimientos relacionados.</p></div>
  </div>`;
}

function rCalc(){
  const cfg=D.cfg;
  g('tab-k').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#00e5ff,#0066aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Calculadoras</h2></div>
  <div class="g2">
    <div class="panel" style="padding:22px;border:1px solid #00e5ff22"><h3 style="font-size:14px;margin-bottom:16px;color:#00e5ff">🧮 Precio con Margen</h3><label class="lbl">Costo (USD)</label><input id="cc" type="number" oninput="cMg()"/><div style="margin-top:14px"><label class="lbl" id="cmgl">Margen: 40%</label><input type="range" min="5" max="300" value="40" oninput="g('cmgl').textContent='Margen: '+this.value+'%';cMg()" id="cmgr" style="margin-top:8px;accent-color:#00e5ff;background:transparent;border:none;width:100%"/></div><div id="cmgres" style="display:none;margin-top:14px;background:#060610;border-radius:9px;padding:14px"></div></div>
    <div class="panel" style="padding:22px;border:1px solid #a855f722"><h3 style="font-size:14px;margin-bottom:16px;color:#a855f7">💱 Convertidor</h3><div style="display:flex;gap:10px;margin-bottom:12px"><div style="flex:1"><label class="lbl">Monto</label><input id="cca" type="number" oninput="cCv()"/></div><div style="flex:0 0 90px"><label class="lbl">Desde</label><select id="ccf" onchange="cCv()" style="margin-top:5px"><option value="USD">USD</option><option value="Bs">Bs</option><option value="CLP">CLP</option></select></div></div><div id="ccres"></div><div style="margin-top:10px;padding:9px;background:#060610;border-radius:8px;font-size:11px;color:#475569">BCV: Bs.${cfg.tasaBCV} · CLP: ${cfg.tasaCLP}</div></div>
    <div class="panel" style="padding:22px;border:1px solid #22c55e22"><h3 style="font-size:14px;margin-bottom:16px;color:#22c55e">🚚 Delivery</h3><label class="lbl">Zona</label><select id="czn" onchange="cDl()" style="margin-bottom:12px">${cfg.zones.map((z,i)=>`<option value="${i}">${z.name} · $${z.price}</option>`).join('')}</select><label class="lbl">Peso (kg)</label><input id="cwt" type="number" oninput="cDl()"/><div style="margin-top:14px;background:#060610;border-radius:9px;padding:14px"><div style="display:flex;justify-content:space-between"><span style="font-weight:700">Total:</span><div><div style="color:#22c55e;font-weight:700;font-family:'Oxanium',sans-serif;font-size:17px" id="cdlt">$2.00</div><div style="font-size:11px;color:#f59e0b" id="cdlb">Bs. ${(2*cfg.tasaBCV).toFixed(2)}</div></div></div></div></div>
    <div class="panel" style="padding:22px;border:1px solid #f59e0b22"><h3 style="font-size:14px;margin-bottom:16px;color:#f59e0b">🔒 Apartado</h3><label class="lbl">Precio (USD)</label><input id="cap" type="number" oninput="cAp()"/><div style="margin-top:14px"><label class="lbl" id="capl">Inicial: 50%</label><input type="range" min="10" max="90" step="10" value="50" oninput="g('capl').textContent='Inicial: '+this.value+'%';cAp()" id="capr" style="margin-top:8px;accent-color:#f59e0b;background:transparent;border:none;width:100%"/></div><div id="cares" style="display:none;margin-top:12px;background:#060610;border-radius:9px;padding:14px"></div></div>
  </div>`;
}
function cMg(){const c=parseFloat(g('cc').value)||0,mg=parseInt(g('cmgr').value)||40,cfg=D.cfg;if(!c){g('cmgres').style.display='none';return;}const s=(c*(1+mg/100)).toFixed(2);g('cmgres').style.display='block';g('cmgres').innerHTML=`<div style="font-size:26px;font-weight:700;color:#00e5ff;font-family:'Oxanium',sans-serif">$${s}</div><div style="font-size:12px;color:#f59e0b;margin-top:5px">Bs. ${(s*cfg.tasaBCV).toFixed(2)}</div><div style="border-top:1px solid #1e1e40;margin-top:8px;padding-top:8px;font-size:12px;color:#22c55e;font-weight:700">Ganancia: $${(s-c).toFixed(2)}</div>`;}
function cCv(){const a=parseFloat(g('cca').value)||0,f=g('ccf').value,cfg=D.cfg;if(!a){g('ccres').innerHTML='';return;}let r={};if(f==='USD')r={USD:a,Bs:(a*cfg.tasaBCV).toFixed(2),CLP:(a*cfg.tasaCLP).toLocaleString()};else if(f==='Bs')r={Bs:a,USD:(a/cfg.tasaBCV).toFixed(2),CLP:((a/cfg.tasaBCV)*cfg.tasaCLP).toLocaleString()};else r={CLP:a,USD:(a/cfg.tasaCLP).toFixed(2),Bs:((a/cfg.tasaCLP)*cfg.tasaBCV).toFixed(2)};g('ccres').innerHTML=`<div style="background:#060610;border-radius:9px;padding:14px">${Object.entries(r).map(([cur,val])=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f0f25"><span style="font-size:13px;color:#475569">${cur}</span><strong style="color:${cur==='USD'?'#00e5ff':cur==='Bs'?'#f59e0b':'#a855f7'};font-size:15px">${val}</strong></div>`).join('')}</div>`;}
function cDl(){const z=parseInt(g('czn').value)||0,w=parseFloat(g('cwt').value)||0,base=D.cfg.zones[z]?.price||0,t=base+(w*0.5),cfg=D.cfg;g('cdlt').textContent='$'+t.toFixed(2);g('cdlb').textContent='Bs. '+(t*cfg.tasaBCV).toFixed(2);}
function cAp(){const p=parseFloat(g('cap').value)||0,pct=parseInt(g('capr').value)||50;if(!p){g('cares').style.display='none';return;}const d=(p*pct/100).toFixed(2),b=(p-d).toFixed(2);g('cares').style.display='block';g('cares').innerHTML=`<div style="display:flex;justify-content:space-between;margin-bottom:7px"><span style="font-size:12px;color:#475569">Inicial (${pct}%):</span><strong style="color:#22c55e">$${d}</strong></div><div style="display:flex;justify-content:space-between"><span style="font-size:12px;color:#475569">Saldo:</span><strong style="color:#f59e0b">$${b}</strong></div>`;}

// RESEÑAS ADMIN
function rRevAdmin(){
  const allRevs=D.products.flatMap(p=>(p.reviews||[]).map(r=>({...r,productName:p.name,productId:p.id,em:p.em})));
  g('tab-r').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#00e5ff,#0066aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Reseñas</h2><p style="color:#475569;font-size:12px">${allRevs.length} publicadas</p></div>
  ${allRevs.length?`<div style="display:flex;flex-direction:column;gap:12px">${allRevs.slice().reverse().map(r=>`<div class="panel" style="padding:16px;border:1px solid #a855f722">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;flex-wrap:wrap;gap:8px">
      <div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
          <strong style="font-size:14px">${r.name}</strong>
          <span>${'⭐'.repeat(r.stars)}</span>
        </div>
        <div style="font-size:11px;color:#a855f7">${r.em} ${r.productName} · ${r.date}</div>
      </div>
      <button onclick="delRev(${r.productId},${r.id})" class="brd">🗑️ Eliminar</button>
    </div>
    <p style="font-size:13px;color:#94a3b8;line-height:1.5">${r.comment}</p>
    ${r.imgData?`<img src="${r.imgData}" style="width:100%;max-height:200px;object-fit:cover;border-radius:8px;margin-top:10px"/>`:''}
  </div>`).join('')}</div>`:'<div style="text-align:center;padding:40px;color:#475569"><div style="font-size:48px;margin-bottom:12px">💬</div><p>Sin reseñas aún</p></div>'}`;
}
function delRev(productId,revId){
  const p=D.products.find(x=>x.id===productId);
  if(p)p.reviews=p.reviews.filter(r=>r.id!==revId);
  ntf('Reseña eliminada','info');rRevAdmin();
}

function rCfg(){
  const cfg=D.cfg;
  g('tab-s').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#00e5ff,#0066aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Ajustes</h2></div>
  <div class="g2" style="margin-bottom:18px">
    <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#f59e0b">💱 Tasas</h3><label class="lbl">BCV (Bs/$)</label><input id="sb" type="number" value="${cfg.tasaBCV}" style="margin-bottom:12px"/><label class="lbl">Paralelo</label><input id="sp" type="number" value="${cfg.tasaParalelo}" style="margin-bottom:12px"/><label class="lbl">CLP/USD</label><input id="sc" type="number" value="${cfg.tasaCLP}"/></div>
    <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#00e5ff">💳 Datos de Pago</h3><label class="lbl">Binance User</label><input id="sbi" value="${cfg.binanceUser}" style="margin-bottom:12px"/><label class="lbl">Pago Móvil</label><input id="spm" value="${cfg.pagoMovil}" style="margin-bottom:12px"/><label class="lbl">Banco</label><input id="sbk" value="${cfg.banco}" style="margin-bottom:12px"/><label class="lbl">Cédula</label><input id="scd" value="${cfg.cedula}"/></div>
    <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#a855f7">🏪 Banner</h3><label class="lbl">Título</label><input id="sht" value="${cfg.heroTitle}" style="margin-bottom:12px"/><label class="lbl">Subtítulo</label><input id="shs" value="${cfg.heroSub}" style="margin-bottom:12px"/><label class="lbl">URL Instagram</label><input id="sig" value="${cfg.instaUrl||''}"/></div>
    <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#22c55e">💬 Frases Banner</h3><p style="font-size:11px;color:#475569;margin-bottom:8px">Una por línea</p><textarea id="sphr" rows="4" style="resize:none">${(cfg.phrases||[]).join('\n')}</textarea></div>
  </div>
  <div class="panel" style="padding:22px;margin-bottom:18px"><h3 style="font-size:14px;margin-bottom:14px;color:#f97316">💬 Frases de Pago</h3>
  <div class="g3">
    <div><label class="lbl">Binance</label><textarea id="sph-b" rows="3" style="resize:none;font-size:12px">${cfg.paymentPhrases?.Binance||''}</textarea></div>
    <div><label class="lbl">Pago Móvil</label><textarea id="sph-pm" rows="3" style="resize:none;font-size:12px">${cfg.paymentPhrases?.['Pago Móvil']||''}</textarea></div>
    <div><label class="lbl">Efectivo</label><textarea id="sph-ef" rows="3" style="resize:none;font-size:12px">${cfg.paymentPhrases?.Efectivo||''}</textarea></div>
  </div></div>
  <div class="panel" style="padding:22px;margin-bottom:18px"><h3 style="font-size:14px;margin-bottom:14px;color:#22c55e">🚚 Zonas Delivery</h3><div id="szones">${cfg.zones.map((z,i)=>`<div style="display:flex;gap:10px;margin-bottom:10px"><input value="${z.name}" onchange="D.cfg.zones[${i}].name=this.value" style="flex:2"/><input type="number" value="${z.price}" onchange="D.cfg.zones[${i}].price=parseFloat(this.value)||0" style="width:60px"/><button onclick="D.cfg.zones.splice(${i},1);rCfg()" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:4px 8px;border-radius:7px;font-size:12px;cursor:pointer">✕</button></div>`).join('')}</div><button onclick="D.cfg.zones.push({name:'Nueva',price:5});rCfg()" style="background:#22c55e11;border:1px solid #22c55e44;color:#22c55e;padding:5px 14px;border-radius:7px;font-size:12px;cursor:pointer">+ Zona</button></div>
  <button class="bp" onclick="sCfg()" style="padding:12px 32px;font-size:15px">💾 Guardar Todo</button>`;
}
function sCfg(){
  D.cfg.tasaBCV=parseFloat(g('sb').value)||38.5;D.cfg.tasaParalelo=parseFloat(g('sp').value)||40.2;D.cfg.tasaCLP=parseFloat(g('sc').value)||950;
  D.cfg.binanceUser=g('sbi').value;D.cfg.pagoMovil=g('spm').value;D.cfg.banco=g('sbk').value;D.cfg.cedula=g('scd').value;
  D.cfg.heroTitle=g('sht').value;D.cfg.heroSub=g('shs').value;D.cfg.instaUrl=g('sig').value;
  D.cfg.phrases=g('sphr').value.split('\n').filter(p=>p.trim());
  D.cfg.paymentPhrases={Binance:g('sph-b').value,'Pago Móvil':g('sph-pm').value,Efectivo:g('sph-ef').value};
  ntf('✅ Configuración guardada');
}

// INIT
ensureTaxonomy();
ensureFinanceFlags();
sv('s');


// ===== V12 BUSINESS OPS ENHANCEMENTS =====
(function(){
  const STORE_KEY='sharkbyte_v12_state';
  function deepClone(x){return JSON.parse(JSON.stringify(x));}
  function persist(){
    try{localStorage.setItem(STORE_KEY, JSON.stringify(D));}catch(e){}
  }
  function loadState(){
    try{
      const raw=localStorage.getItem(STORE_KEY);
      if(!raw) return;
      const parsed=JSON.parse(raw);
      D={...D,...parsed};
    }catch(e){}
  }
  window.persistSharkByte=persist;
  window.loadSharkByte=loadState;

  function audit(type, message, meta={}){
    D.auditLog=D.auditLog||[];
    D.auditLog.unshift({id:Date.now()+Math.floor(Math.random()*999),type,message,date:new Date().toISOString(),meta});
    D.auditLog=D.auditLog.slice(0,300);
    persist();
  }
  window.auditEvent=audit;

  function ensureOpsData(){
    D.auditLog=D.auditLog||[];
    D.cashSessions=D.cashSessions||[];
    D.accountsReceivable=D.accountsReceivable||[];
    D.accountsPayable=D.accountsPayable||[];
    D.suppliers=D.suppliers||[];
    D.users=D.users||[{id:1,name:'Admin SharkByte',role:'admin',status:'activo'}];
    D.orderDraftLines=D.orderDraftLines||[{productId:'',qty:1}];
    D.orders.forEach(o=>{
      if(!o.items || !o.items.length){
        const names=(o.products||[]);
        o.items=names.map(n=>{const p=D.products.find(pp=>pp.name===n);return {productId:p?.id||null,name:n,qty:1,priceUSD:p?.priceUSD||((o.total||0)/Math.max(names.length,1))};});
      }
      if(!o.type) o.type='venta';
      if(!o.status) o.status='pendiente';
      if(o.status==='cancelado') o.status='anulado';
    });
    D.expenses.forEach(e=>{if(!e.status)e.status='activo'; if(e.status==='cancelado') e.status='anulado';});
    D.products.forEach(p=>{if(p.minStock==null) p.minStock=2; if(p.supplier==null) p.supplier=''; if(p.subcat==null||p.subcat==='') p.subcat='General'; if(p.discountPct==null||isNaN(Number(p.discountPct))) p.discountPct=0; else p.discountPct=Math.max(0,Math.min(90,Number(p.discountPct))); if(p.isNew==null) p.isNew=false; p.isNew=!!p.isNew; p.featured=!!p.featured;});
    if(!D.suppliers.length){
      const names=[...new Set(D.products.map(p=>p.supplier).filter(Boolean))];
      D.suppliers=names.map((name,i)=>({id:Date.now()+i,name,phone:'',notes:''}));
      if(!D.suppliers.length){
        D.suppliers=[{id:1,name:'Proveedor general',phone:'',notes:'Principal'}];
      }
    }
  }
  window.ensureOpsData=ensureOpsData;

  function activeOrders(){return D.orders.filter(o=>o.status!=='anulado');}
  function activeReceivables(){return (D.accountsReceivable||[]).filter(x=>x.status!=='anulado');}
  function activePayables(){return (D.accountsPayable||[]).filter(x=>x.status!=='anulado');}
  function currentCashSession(){return (D.cashSessions||[]).find(x=>x.status==='abierta');}
  function fmtDateTime(v){if(!v) return ''; const d=new Date(v); if(isNaN(d)) return v; return d.toLocaleString('es-VE');}
  function money(n){return (Number(n)||0).toFixed(2);}
  function orderStatusClass(st){return st==='completado'?'ok':st==='pendiente'?'wr':'no';}
  function expenseStatusTag(st){return st==='anulado'?'no':st==='pagado'?'ok':'wr';}

  function applyStockDelta(items, factor){
    (items||[]).forEach(it=>{
      const p=D.products.find(x=>x.id===Number(it.productId)||x.name===it.name);
      if(!p) return;
      p.stock=Math.max(0, (Number(p.stock)||0) + factor*(Number(it.qty)||0));
      if(p.stock===0) p.status='agotado';
      else if(p.status==='agotado') p.status='available';
    });
  }

  function recalcOrderTotals(o){
    o.items=(o.items||[]).filter(it=>it.productId || it.name);
    o.products=o.items.map(it=>it.name);
    o.total=o.items.reduce((s,it)=>s + (Number(it.priceUSD)||0)*(Number(it.qty)||0),0);
    return o;
  }

  function renderOrderLineOptions(selected=''){
    return '<option value="">Selecciona producto</option>' + D.products.map(p=>{const price=productFinalPrice(p); return `<option value="${p.id}" ${String(selected)===String(p.id)?'selected':''}>${esc(p.name)} · Stock ${p.stock} · $${price.toFixed(2)}${(Number(p.discountPct)||0)>0?' · descuento':''}</option>`;}).join('');
  }

  function syncDraftLine(idx, field, value){
    D.orderDraftLines[idx]=D.orderDraftLines[idx]||{productId:'',qty:1};
    D.orderDraftLines[idx][field]=field==='qty'?Math.max(1, parseInt(value)||1):value;
    renderOrderDraftLines();
  }
  window.syncDraftLine=syncDraftLine;
  function addDraftLine(){D.orderDraftLines.push({productId:'',qty:1}); renderOrderDraftLines();}
  window.addDraftLine=addDraftLine;
  function removeDraftLine(idx){if(D.orderDraftLines.length===1){D.orderDraftLines=[{productId:'',qty:1}];} else D.orderDraftLines.splice(idx,1); renderOrderDraftLines();}
  window.removeDraftLine=removeDraftLine;
  function getDraftItems(){
    return (D.orderDraftLines||[]).map(line=>{
      const p=D.products.find(x=>x.id===Number(line.productId));
      if(!p) return null;
      return {productId:p.id,name:p.name,qty:Math.max(1, Number(line.qty)||1),priceUSD:productFinalPrice(p)};
    }).filter(Boolean);
  }
  function renderOrderDraftLines(){
    const wrap=g('order-lines'); if(!wrap) return;
    wrap.innerHTML=(D.orderDraftLines||[]).map((line,idx)=>`<div style="display:grid;grid-template-columns:1fr 90px 42px;gap:8px;margin-bottom:8px"><select onchange="syncDraftLine(${idx},'productId',this.value)">${renderOrderLineOptions(line.productId)}</select><input type="number" min="1" value="${line.qty||1}" oninput="syncDraftLine(${idx},'qty',this.value)"/><button onclick="removeDraftLine(${idx})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;border-radius:8px">✕</button></div>`).join('');
    const items=getDraftItems();
    const total=items.reduce((s,it)=>s+it.qty*it.priceUSD,0);
    const sum=g('sale-draft-total');
    if(sum) sum.innerHTML=items.length?items.map(it=>`<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #0f0f25"><span>${esc(it.name)} × ${it.qty}</span><strong>$${money(it.qty*it.priceUSD)}</strong></div>`).join('')+`<div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:6px;border-top:1px solid #1e1e40"><span>Total</span><strong style="color:#66c7f4">$${money(total)}</strong></div>`:'<p style="color:#7b93ad;font-size:12px">Agrega productos para calcular la venta.</p>';
  }
  window.renderOrderDraftLines=renderOrderDraftLines;

  function saveSaleRecord(){
    const client=g('ocl').value.trim();
    const items=getDraftItems();
    if(!client || !items.length){ntf('Cliente y al menos un producto requeridos','err'); return;}
    const status=g('ost').value;
    const tasa=parseFloat(g('ots').value)||D.cfg.tasaBCV;
    const order={
      id:Date.now(),
      type:'venta',
      client,
      phone:g('oph').value.trim(),
      email:g('oem').value.trim(),
      payment:g('opm').value,
      status,
      date:g('oda')?.value || new Date().toISOString().split('T')[0],
      tasa,
      notes:g('onotes').value.trim(),
      items:items.map(it=>({...it})),
      source:'admin'
    };
    recalcOrderTotals(order);
    D.orders.push(order);
    if(status==='completado'){
      applyStockDelta(order.items,-1);
      aClient(order.client,order.phone,order.email,order.total,order.date);
    }
    audit('venta_registrada',`Venta registrada a ${order.client} por $${money(order.total)}`,{orderId:order.id,status:order.status});
    D.orderDraftLines=[{productId:'',qty:1}];
    ['ocl','oph','oem','onotes'].forEach(id=>{const el=g(id); if(el) el.value='';});
    if(g('ost')) g('ost').value='completado';
    if(g('ots')) g('ots').value=D.cfg.tasaBCV;
    persist();
    ntf('Venta registrada ✅');
    rOrders(); rProd(); rDash(); rFin();
  }
  window.saveSaleRecord=saveSaleRecord;

  function promptAnnulOrder(id){
    const o=D.orders.find(x=>x.id===id); if(!o || o.status==='anulado') return;
    const reason=window.prompt('Motivo de anulación de la venta/pedido:');
    if(!reason || !reason.trim()){ntf('La anulación requiere descripción','err'); return;}
    if(o.status==='completado') applyStockDelta(o.items, +1);
    o.status='anulado'; o.annulReason=reason.trim(); o.annulDate=new Date().toISOString();
    audit('venta_anulada',`Se anuló ${o.client} por $${money(o.total)}`,{orderId:o.id,reason:o.annulReason});
    persist(); ntf('Venta anulada','info'); rOrders(); rProd(); rDash(); rFin();
  }
  window.promptAnnulOrder=promptAnnulOrder;

  function confirmOrder(id){
    const o=D.orders.find(x=>x.id===id); if(!o || o.status!=='pendiente') return;
    applyStockDelta(o.items,-1); o.status='completado';
    aClient(o.client,o.phone,o.email||'',o.total,o.date);
    audit('venta_confirmada',`Venta confirmada de ${o.client}`,{orderId:o.id});
    persist(); ntf('✅ Confirmado'); rOrders(); rProd(); rDash(); rFin();
  }
  window.cfOrd=confirmOrder;

  function toggleExpenseStatusV12(id){
    const e=D.expenses.find(x=>x.id===id); if(!e) return;
    if(e.status==='anulado'){
      e.status='activo'; e.reactivatedAt=new Date().toISOString();
      audit('movimiento_reactivado',`Se reactivó gasto ${e.desc}`,{expenseId:e.id});
      persist(); ntf('Movimiento reactivado','info'); rExp(); rDash(); rFin(); return;
    }
    const reason=window.prompt('Motivo de anulación del movimiento financiero:');
    if(!reason || !reason.trim()){ntf('La anulación requiere descripción','err'); return;}
    e.status='anulado'; e.annulReason=reason.trim(); e.annulDate=new Date().toISOString();
    audit('movimiento_anulado',`Se anuló gasto ${e.desc}`,{expenseId:e.id,reason:e.annulReason});
    persist(); ntf('Movimiento anulado','info'); rExp(); rDash(); rFin();
  }
  window.toggleExpenseStatus=toggleExpenseStatusV12;

  function saveExpenseV12(){
    const d=g('edd').value,a=g('ema').value;if(!d||!a){ntf('Completá los campos','err');return;}
    D.expenses.push({id:Date.now(),desc:d,amount:parseFloat(a),currency:g('ecu').value,type:g('ety').value,date:g('eda').value,status:'activo'});
    audit('gasto_registrado',`Gasto registrado: ${d}`,{amount:a,currency:g('ecu').value});
    persist(); ntf('Gasto registrado ✅'); rExp(); rDash(); rFin();
  }
  window.sExp=saveExpenseV12;

  function saveCashSession(){
    const open=currentCashSession();
    if(open){ntf('Ya hay una caja abierta','err'); return;}
    const amount=parseFloat(g('cash-open-amount')?.value)||0;
    const note=g('cash-open-note')?.value.trim()||'';
    D.cashSessions.unshift({id:Date.now(),date:new Date().toISOString().split('T')[0],openedAt:new Date().toISOString(),openingAmount:amount,closingAmount:null,status:'abierta',note});
    audit('caja_abierta',`Caja abierta con $${money(amount)}`,{});
    persist(); rFin(); ntf('Caja abierta ✅');
  }
  window.saveCashSession=saveCashSession;
  function closeCashSession(){
    const open=currentCashSession(); if(!open){ntf('No hay caja abierta','err'); return;}
    const amount=parseFloat(g('cash-close-amount')?.value);
    if(Number.isNaN(amount)){ntf('Indica el monto de cierre','err'); return;}
    open.closingAmount=amount; open.closedAt=new Date().toISOString(); open.status='cerrada'; open.closeNote=g('cash-close-note')?.value.trim()||'';
    audit('caja_cerrada',`Caja cerrada en $${money(amount)}`,{cashId:open.id});
    persist(); rFin(); ntf('Caja cerrada ✅');
  }
  window.closeCashSession=closeCashSession;

  function saveReceivable(){
    const client=g('ar-client')?.value.trim(), amount=parseFloat(g('ar-amount')?.value), due=g('ar-due')?.value;
    if(!client || !amount){ntf('Cliente y monto requeridos','err'); return;}
    D.accountsReceivable.unshift({id:Date.now(),client,amount,currency:g('ar-currency').value,dueDate:due||'',status:'pendiente',desc:g('ar-desc').value.trim(),createdAt:new Date().toISOString()});
    audit('cx_cobrar_registrada',`Cuenta por cobrar para ${client}`,{amount}); persist(); rFin(); ntf('Cuenta por cobrar registrada ✅');
  }
  window.saveReceivable=saveReceivable;
  function savePayable(){
    const supplier=g('ap-supplier')?.value.trim(), amount=parseFloat(g('ap-amount')?.value), due=g('ap-due')?.value;
    if(!supplier || !amount){ntf('Proveedor y monto requeridos','err'); return;}
    D.accountsPayable.unshift({id:Date.now(),supplier,amount,currency:g('ap-currency').value,dueDate:due||'',status:'pendiente',desc:g('ap-desc').value.trim(),createdAt:new Date().toISOString()});
    audit('cx_pagar_registrada',`Cuenta por pagar para ${supplier}`,{amount}); persist(); rFin(); ntf('Cuenta por pagar registrada ✅');
  }
  window.savePayable=savePayable;
  function markReceivablePaid(id){const x=D.accountsReceivable.find(v=>v.id===id); if(!x) return; x.status='pagado'; x.paidAt=new Date().toISOString(); audit('cx_cobrar_pagada',`Cuenta cobrada de ${x.client}`,{id}); persist(); rFin();}
  window.markReceivablePaid=markReceivablePaid;
  function markPayablePaid(id){const x=D.accountsPayable.find(v=>v.id===id); if(!x) return; x.status='pagado'; x.paidAt=new Date().toISOString(); audit('cx_pagar_pagada',`Cuenta pagada a ${x.supplier}`,{id}); persist(); rFin();}
  window.markPayablePaid=markPayablePaid;
  function annulReceivable(id){const x=D.accountsReceivable.find(v=>v.id===id); if(!x) return; const reason=prompt('Motivo de anulación:'); if(!reason||!reason.trim()){ntf('La anulación requiere descripción','err'); return;} x.status='anulado'; x.annulReason=reason.trim(); x.annulDate=new Date().toISOString(); audit('cx_cobrar_anulada',`Cuenta por cobrar anulada de ${x.client}`,{id,reason:x.annulReason}); persist(); rFin();}
  window.annulReceivable=annulReceivable;
  function annulPayable(id){const x=D.accountsPayable.find(v=>v.id===id); if(!x) return; const reason=prompt('Motivo de anulación:'); if(!reason||!reason.trim()){ntf('La anulación requiere descripción','err'); return;} x.status='anulado'; x.annulReason=reason.trim(); x.annulDate=new Date().toISOString(); audit('cx_pagar_anulada',`Cuenta por pagar anulada de ${x.supplier}`,{id,reason:x.annulReason}); persist(); rFin();}
  window.annulPayable=annulPayable;

  function saveSupplier(){
    const name=g('sup-name')?.value.trim(); if(!name){ntf('Nombre del proveedor requerido','err'); return;}
    D.suppliers.unshift({id:Date.now(),name,phone:g('sup-phone').value.trim(),notes:g('sup-notes').value.trim()});
    audit('proveedor_registrado',`Proveedor agregado: ${name}`); persist(); rCRM(); rProd(); ntf('Proveedor agregado ✅');
  }
  window.saveSupplier=saveSupplier;
  function saveUser(){
    const name=g('usr-name')?.value.trim(); if(!name){ntf('Nombre requerido','err'); return;}
    D.users.unshift({id:Date.now(),name,role:g('usr-role').value,status:'activo'}); audit('usuario_registrado',`Usuario agregado: ${name}`); persist(); rCRM(); ntf('Usuario agregado ✅');
  }
  window.saveUser=saveUser;

  function inventoryAlerts(){
    return D.products.filter(p=>(Number(p.stock)||0) <= (Number(p.minStock)||0)).sort((a,b)=>(a.stock-b.stock));
  }

  const old_rProd = rProd;
  rProd = function(){
    old_rProd();
    ensureOpsData();
    const el=g('tab-p'); if(!el) return;
    const alerts=inventoryAlerts();
    const supplierStats=[...new Set(D.products.map(p=>p.supplier).filter(Boolean))];
    const box=document.createElement('div');
    box.className='g2';
    box.style.marginTop='18px';
    box.innerHTML=`<div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#f59e0b;margin-bottom:12px">⚠️ Stock bajo / por reponer</h3>${alerts.length?alerts.map(p=>`<button onclick="goToProductEdit(${p.id})" style="width:100%;text-align:left;background:#0d0d20;border:1px solid #1e1e40;border-radius:10px;padding:10px;margin-bottom:8px;color:#e2e8f0;cursor:pointer"><div style="font-weight:700">${esc(p.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(p.cat)} · ${esc(p.subcat||'General')} · Stock ${p.stock} / mínimo ${p.minStock}</div></button>`).join(''):'<p style="color:#7b93ad;font-size:12px">Todo el inventario está por encima del mínimo.</p>'}</div>
    <div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#4fd1c5;margin-bottom:12px">🏭 Proveedores y control</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><input id="prod-minstock-global" type="number" placeholder="Stock mínimo sugerido"/><button class="bs" onclick="applyGlobalMinStock()">Aplicar a vacíos</button></div><div style="font-size:12px;color:#7b93ad;margin-bottom:10px">Proveedores registrados: <strong style="color:#e2e8f0">${D.suppliers.length}</strong> · Vinculados en productos: <strong style="color:#e2e8f0">${supplierStats.length}</strong></div><div style="display:flex;flex-wrap:wrap;gap:8px">${D.suppliers.slice(0,8).map(s=>`<span style="background:#4fd1c511;border:1px solid #4fd1c544;color:#4fd1c5;padding:6px 10px;border-radius:999px;font-size:11px">${esc(s.name)}</span>`).join('')||'<span style="color:#7b93ad;font-size:12px">Agrega proveedores en Base de Datos.</span>'}</div></div>`;
    el.appendChild(box);
    // add supplier and min stock fields to form if present
    const grid=el.querySelector('#pf .g2');
    if(grid && !g('pfmin')){
      const holder=document.createElement('div');
      holder.innerHTML=`<div><label class="lbl">Stock mínimo</label><input id="pfmin" type="number" value="2"/></div><div><label class="lbl">Proveedor</label><input id="pfsup" list="sup-list" placeholder="Proveedor principal"/><datalist id="sup-list">${D.suppliers.map(s=>`<option value="${esc(s.name)}">`).join('')}</datalist></div>`;
      [...holder.children].forEach(ch=>grid.appendChild(ch));
    }
    if(g('pfmin') && eid){ const p=D.products.find(x=>x.id===eid); if(p){g('pfmin').value=p.minStock||2; g('pfsup').value=p.supplier||'';} }
    else if(g('pfmin') && !eid){g('pfmin').value='2'; if(g('pfsup')) g('pfsup').value='';}
  };
  window.applyGlobalMinStock=function(){const n=parseInt(g('prod-minstock-global')?.value)||0; if(!n){ntf('Indica un mínimo válido','err'); return;} D.products.forEach(p=>{if(p.minStock==null||p.minStock===0) p.minStock=n;}); persist(); rProd(); ntf('Mínimo aplicado ✅');};

  sProd = function(){
    ensureTaxonomy();
    const n=g('pfn').value,pr=g('pfp').value;
    if(!n||!pr){ntf('Nombre y precio requeridos','err');return;}
    const em=(g('pfemtxt').value||eem||'📦').trim()||'📦';
    const payload={name:n,desc:g('pfd').value,priceUSD:parseFloat(pr),cost:parseFloat(g('pfco').value)||0,stock:parseInt(g('pfst').value)||0,status:g('pfes').value,cat:g('pfc').value,subcat:g('pfsc').value,em:em,featured:g('pfft').checked,imgData:prodImgData,minStock:parseInt(g('pfmin')?.value)||2,supplier:g('pfsup')?.value.trim()||''};
    if(eid){
      const i=D.products.findIndex(p=>p.id===eid);
      if(i<0) return;
      if(!prodImgData) payload.imgData=D.products[i].imgData||null;
      D.products[i]={...D.products[i],...payload};
      audit('producto_actualizado',`Producto actualizado: ${n}`,{productId:eid});
      ntf('Actualizado ✅');
    }else{
      D.products.push({...payload,id:Date.now(),waitlist:[],reviews:[]});
      audit('producto_creado',`Producto agregado: ${n}`);
      ntf('Agregado ✅');
    }
    persist();
    rProd();rS();
  };
  const old_eprod = eprod;
  eprod = function(id){ old_eprod(id); const p=D.products.find(x=>x.id===id); setTimeout(()=>{ if(g('pfmin')) g('pfmin').value=p?.minStock||2; if(g('pfsup')) g('pfsup').value=p?.supplier||'';},20); };
  const old_dprod = dprod;
  dprod = function(id){ old_dprod(id); audit('producto_eliminado','Producto eliminado',{id}); persist(); };
  const old_sCfg = sCfg; sCfg = function(){ old_sCfg(); audit('config_guardada','Se actualizó la configuración'); persist(); };
  const old_delRev = delRev; delRev=function(productId,revId){ old_delRev(productId,revId); audit('resena_eliminada','Reseña eliminada',{productId,revId}); persist(); };

  rOrders = function(){
    ensureOpsData();
    const salesTotal=D.orders.filter(o=>o.status==='completado').reduce((s,o)=>s+(Number(o.total)||0),0);
    const pendingTotal=D.orders.filter(o=>o.status==='pendiente').reduce((s,o)=>s+(Number(o.total)||0),0);
    const annulTotal=D.orders.filter(o=>o.status==='anulado').length;
    g('tab-o').innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;flex-wrap:wrap;gap:10px"><div><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Ventas & Pedidos</h2><p style="color:#7b93ad;font-size:12px">Registra ventas, confirma pedidos y anula con auditoría.</p></div><button class="bp" onclick="tof()">+ Nueva venta</button></div>
      <div class="g4" style="margin-bottom:18px">${[
        {l:'Ventas completadas',v:`$${money(salesTotal)}`,c:'#22c55e'},
        {l:'Pendientes por confirmar',v:`$${money(pendingTotal)}`,c:'#f59e0b'},
        {l:'Anuladas',v:String(annulTotal),c:'#ef4444'},
        {l:'Transacciones',v:String(D.orders.length),c:'#66c7f4'}
      ].map(s=>`<div class="sc" style="border:1px solid ${s.c}22;border-left:3px solid ${s.c}"><div style="font-size:18px;font-weight:700;color:${s.c}">${s.v}</div><div style="font-size:11px;color:#7b93ad">${s.l}</div></div>`).join('')}</div>
      <div id="of" style="display:none;background:#0d0d20;border:1px solid #66c7f433;border-radius:12px;padding:22px;margin-bottom:22px">
        <h3 style="font-size:15px;color:#66c7f4;margin-bottom:16px">Registrar venta o pedido</h3>
        <div class="g2" style="margin-bottom:12px">
          <div><label class="lbl">Cliente *</label><input id="ocl"/></div>
          <div><label class="lbl">WhatsApp</label><input id="oph"/></div>
          <div><label class="lbl">Email</label><input id="oem" type="email"/></div>
          <div><label class="lbl">Fecha</label><input id="oda" type="date" value="${new Date().toISOString().split('T')[0]}"/></div>
          <div><label class="lbl">Estado</label><select id="ost"><option value="completado">✅ Venta completada</option><option value="pendiente">🟡 Pedido pendiente</option></select></div>
          <div><label class="lbl">Método de pago</label><select id="opm"><option>Binance</option><option>Pago Móvil</option><option>Efectivo</option><option>Zelle</option><option>Transferencia</option></select></div>
          <div><label class="lbl">Tasa</label><input id="ots" type="number" value="${D.cfg.tasaBCV}"/></div>
          <div><label class="lbl">Notas</label><input id="onotes" placeholder="Referencia, delivery, observaciones"/></div>
        </div>
        <div class="panel" style="padding:14px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><h4 style="font-size:13px;color:#4fd1c5">Productos de la venta</h4><button class="bs" onclick="addDraftLine()">+ Línea</button></div><div id="order-lines"></div></div>
        <div class="panel" style="padding:14px;margin-bottom:12px" id="sale-draft-total"></div>
        <div style="display:flex;gap:10px"><button class="bp" onclick="saveSaleRecord()">💾 Guardar movimiento</button><button class="bs" onclick="tof()">Cancelar</button></div>
        <p style="font-size:11px;color:#7b93ad;margin-top:10px">Las ventas y pedidos no se eliminan. Si hubo error, se anulan con motivo.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px">${D.orders.slice().reverse().map(o=>`<div class="panel" style="padding:14px;border:1px solid ${o.status==='anulado'?'#ef444433':o.status==='pendiente'?'#f59e0b33':'#22c55e22'};opacity:${o.status==='anulado'?0.72:1}">
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px"><div><div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><span style="font-weight:700;font-size:14px">${esc(o.client)}</span><span class="tag ${orderStatusClass(o.status)}">${esc(o.status)}</span><span class="tag" style="background:#66c7f411;color:#66c7f4;border:1px solid #66c7f444">${esc(o.type||'venta')}</span></div><div style="font-size:11px;color:#7b93ad">${esc(o.date)} · ${esc(o.payment||'')} ${o.email?`· ${esc(o.email)}`:''}</div><div style="font-size:11px;color:#94a3b8">${(o.items||[]).map(it=>`${esc(it.name)} × ${it.qty}`).join(' · ')}</div>${o.notes?`<div style="font-size:11px;color:#64748b;margin-top:4px">📝 ${esc(o.notes)}</div>`:''}${o.annulReason?`<div style="font-size:11px;color:#ef4444;margin-top:4px">⛔ ${esc(o.annulReason)}</div>`:''}</div><div style="text-align:right"><div style="font-size:18px;font-weight:700;color:#66c7f4;font-family:'Oxanium',sans-serif">$${money(o.total)}</div><div style="font-size:11px;color:#f59e0b">Bs. ${money((Number(o.total)||0)*(Number(o.tasa)||D.cfg.tasaBCV))}</div></div></div>
        <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">${o.status==='pendiente'?`<button onclick="cfOrd(${o.id})" style="background:#22c55e11;border:1px solid #22c55e44;color:#22c55e;padding:6px 12px;border-radius:8px;font-size:12px">✅ Confirmar</button>`:''}${o.phone?`<button onclick="waOrd(${o.id})" style="background:#25d36611;border:1px solid #25d36644;color:#25d366;padding:6px 12px;border-radius:8px;font-size:12px">💬 WA</button>`:''}${o.status!=='anulado'?`<button onclick="promptAnnulOrder(${o.id})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:6px 12px;border-radius:8px;font-size:12px">⛔ Anular</button>`:''}</div>
      </div>`).join('')}</div>`;
    renderOrderDraftLines();
  };
  window.tof=function(){const f=g('of'); if(!f) return; f.style.display=f.style.display==='none'?'block':'none'; if(f.style.display==='block'){ensureOpsData(); renderOrderDraftLines();}};

  rExp = function(){
    ensureOpsData();
    const total=activeExpenses().reduce((s,e)=>s+(e.currency==='USD'?e.amount:(e.amount/(D.cfg.tasaBCV||1))),0);
    const annulCount=D.expenses.filter(e=>e.status==='anulado').length;
    const ico={compra:'🛍️',envio:'📦',marketing:'📢',servicio:'⚙️',otro:'💸'};
    g('tab-e').innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;flex-wrap:wrap;gap:10px"><div><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Gastos & movimientos</h2><p style="color:#7b93ad;font-size:12px">No se eliminan: solo activos o anulados con motivo.</p></div><button class="bp" onclick="tef()">+ Registrar</button></div>
    <div class="g3" style="margin-bottom:18px">${[
      {l:'Gastos activos',v:`$${money(total)}`,c:'#ef4444'},
      {l:'Movimientos activos',v:String(activeExpenses().length),c:'#66c7f4'},
      {l:'Anulados',v:String(annulCount),c:'#f59e0b'}].map(s=>`<div class="sc" style="border:1px solid ${s.c}22;border-left:3px solid ${s.c}"><div style="font-size:18px;font-weight:700;color:${s.c}">${s.v}</div><div style="font-size:11px;color:#7b93ad">${s.l}</div></div>`).join('')}</div>
    <div id="ef" style="display:none;background:#0d0d20;border:1px solid #00e5ff22;border-radius:12px;padding:22px;margin-bottom:22px"><div class="g2" style="margin-bottom:12px"><div style="grid-column:1/-1"><label class="lbl">Descripción *</label><input id="edd"/></div><div><label class="lbl">Monto *</label><input id="ema" type="number"/></div><div><label class="lbl">Moneda</label><select id="ecu"><option value="USD">💵 USD</option><option value="Bs">Bs</option></select></div><div><label class="lbl">Tipo</label><select id="ety"><option value="compra">🛍️ Compra</option><option value="envio">📦 Envío</option><option value="marketing">📢 Marketing</option><option value="servicio">⚙️ Servicio</option><option value="otro">💸 Otro</option></select></div><div><label class="lbl">Fecha</label><input id="eda" type="date" value="${new Date().toISOString().split('T')[0]}"/></div></div><div style="display:flex;gap:10px"><button class="bp" onclick="sExp()">💾 Guardar</button><button class="bs" onclick="tef()">Cancelar</button></div></div>
    <div style="display:flex;flex-direction:column;gap:8px">${D.expenses.slice().reverse().map(e=>`<div id="exp-${e.id}" class="panel" style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;gap:12px;opacity:${e.status==='anulado'?0.58:1}"><div style="display:flex;align-items:center;gap:10px"><span style="font-size:22px">${ico[e.type]||'💸'}</span><div><div style="font-size:13px;font-weight:600">${esc(e.desc)}</div><div style="font-size:11px;color:#7b93ad">${esc(e.date)} · ${esc(e.type)} · <span class="tag ${e.status==='anulado'?'no':'ok'}">${esc(e.status||'activo')}</span></div>${e.annulReason?`<div style="font-size:11px;color:#ef4444;margin-top:3px">⛔ ${esc(e.annulReason)}</div>`:''}</div></div><div style="display:flex;align-items:center;gap:12px"><div style="font-weight:700;color:#ef4444;font-size:16px">-${e.amount} ${e.currency}</div><button onclick="toggleExpenseStatus(${e.id})" style="background:${e.status==='anulado'?'#22c55e11':'#ef444411'};border:1px solid ${e.status==='anulado'?'#22c55e44':'#ef444444'};color:${e.status==='anulado'?'#22c55e':'#ef4444'};padding:7px 12px;border-radius:8px;font-size:12px">${e.status==='anulado'?'Reactivar':'Anular'}</button></div></div>`).join('')}</div>`;
  };
  window.tef=function(){const f=g('ef'); if(!f) return; f.style.display=f.style.display==='none'?'block':'none';};

  const old_goToExpense = goToExpense;
  goToExpense = function(id){old_goToExpense(id);};
  window.goToFinanceSection=function(section){const btn=[...document.querySelectorAll('.nb')].find(b=>b.textContent.includes('Finanzas')); if(btn){sT('f',btn); setTimeout(()=>{const el=g(section); if(el){el.scrollIntoView({behavior:'smooth',block:'start'}); el.style.boxShadow='0 0 0 2px #66c7f4'; setTimeout(()=>el.style.boxShadow='',1800);} },150); }};

  function auditList(limit=10){
    return (D.auditLog||[]).slice(0,limit).map(a=>`<div style="padding:9px 0;border-bottom:1px solid #0f0f25"><div style="font-size:12px;color:#e2e8f0">${esc(a.message)}</div><div style="font-size:10px;color:#7b93ad">${esc(a.type)} · ${fmtDateTime(a.date)}</div></div>`).join('') || '<p style="color:#7b93ad;font-size:12px">Sin movimientos auditados.</p>';
  }

  rFin = function(){
    ensureOpsData();
    const done=D.orders.filter(o=>o.status==='completado');
    const sales=done.reduce((s,o)=>s+o.total,0);
    const exps=activeExpenses().reduce((s,e)=>s+(e.currency==='USD'?e.amount:(e.amount/(D.cfg.tasaBCV||1))),0);
    const receivableTotal=activeReceivables().filter(x=>x.status==='pendiente').reduce((s,x)=>s+(x.currency==='USD'?x.amount:(x.amount/(D.cfg.tasaBCV||1))),0);
    const payableTotal=activePayables().filter(x=>x.status==='pendiente').reduce((s,x)=>s+(x.currency==='USD'?x.amount:(x.amount/(D.cfg.tasaBCV||1))),0);
    const profit=sales-exps; const mg=sales>0?((profit/sales)*100).toFixed(1):0; const cfg=D.cfg;
    const open=currentCashSession();
    g('tab-f').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Finanzas & Control</h2><p style="color:#7b93ad;font-size:12px">Centro administrativo financiero: ventas, gastos, caja, cuentas y auditoría.</p></div>
    <div class="g4" style="margin-bottom:20px">${[
      {i:'📈',l:'Ingresos',v:'$'+money(sales),c:'#22c55e'},
      {i:'📉',l:'Gastos',v:'$'+money(exps),c:'#ef4444'},
      {i:'💰',l:'Ganancia',v:'$'+money(profit),c:profit>=0?'#66c7f4':'#ef4444'},
      {i:'📊',l:'Margen',v:mg+'%',c:'#a855f7'}].map(c=>`<div class="sc" style="border:1px solid ${c.c}22;border-left:3px solid ${c.c}"><div>${c.i}</div><div style="font-size:18px;font-weight:700;color:${c.c};font-family:'Oxanium',sans-serif;margin-top:5px">${c.v}</div><div style="font-size:11px;color:#7b93ad">${c.l}</div></div>`).join('')}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 340px;gap:18px;margin-bottom:16px;align-items:start">
      <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#66c7f4">Ventas por mes</h3>${miniBarChart(monthlySalesData(),{colors:moneyColorPalette(monthlySalesData().length),currency:'$',detailType:'monthSales',panelId:'fin-detail',totalLabel:'Total ventas'})}</div>
      <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#a855f7">Ingresos por método</h3>${miniBarChart(paymentChartData(),{colors:moneyColorPalette(paymentChartData().length),currency:'$',detailType:'payment',panelId:'fin-detail',totalLabel:'Ingresos por método'})}</div>
      <div class="panel" style="padding:18px;min-height:280px" id="fin-detail"><p style="color:#7b93ad;font-size:12px">Toca una barra para ver el detalle financiero.</p></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 340px;gap:18px;align-items:start;margin-bottom:18px">
      <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#ef4444">Gastos por tipo</h3>${miniBarChart(expenseTypeChartData(),{colors:moneyColorPalette(expenseTypeChartData().length),currency:'$',detailType:'expenseType',panelId:'fin-detail-2',totalLabel:'Gastos activos'})}</div>
      <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#4fd1c5">Productos más vendidos</h3>${miniBarChart(productSalesChartData(),{colors:moneyColorPalette(productSalesChartData().length),currency:'',detailType:'productSales',panelId:'fin-detail-2',totalLabel:'Ventas por producto'})}</div>
      <div class="panel" style="padding:18px;min-height:280px" id="fin-detail-2"><p style="color:#7b93ad;font-size:12px">Aquí aparecerán gastos, productos y ventas relacionadas.</p></div>
    </div>
    <div class="g2" style="margin-bottom:18px">
      <div class="panel" id="cash-box" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#f59e0b">💵 Caja diaria</h3>${open?`<div style="padding:12px;background:#060610;border-radius:10px;margin-bottom:12px"><div style="font-size:12px;color:#7b93ad">Caja abierta</div><div style="font-size:18px;color:#22c55e;font-weight:700">$${money(open.openingAmount)}</div><div style="font-size:11px;color:#7b93ad">${fmtDateTime(open.openedAt)}</div></div><div class="g2"><div><label class="lbl">Cierre</label><input id="cash-close-amount" type="number" placeholder="Monto final"/></div><div><label class="lbl">Nota</label><input id="cash-close-note" placeholder="Observación"/></div></div><button class="bp" onclick="closeCashSession()" style="margin-top:10px">Cerrar caja</button>`:`<div class="g2"><div><label class="lbl">Apertura</label><input id="cash-open-amount" type="number" placeholder="Monto inicial"/></div><div><label class="lbl">Nota</label><input id="cash-open-note" placeholder="Observación"/></div></div><button class="bp" onclick="saveCashSession()" style="margin-top:10px">Abrir caja</button>`}<div style="margin-top:14px;border-top:1px solid #1e1e40;padding-top:12px">${(D.cashSessions||[]).slice(0,4).map(c=>`<div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f0f25"><span style="font-size:12px;color:#7b93ad">${esc(c.date)} · ${esc(c.status)}</span><strong style="color:#e2e8f0">$${money(c.status==='cerrada'?c.closingAmount:c.openingAmount)}</strong></div>`).join('')||'<p style="color:#7b93ad;font-size:12px">Sin cajas registradas.</p>'}</div></div>
      <div class="panel" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#a855f7">🧾 Resumen operativo</h3><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #0f0f25"><span>CxC pendientes</span><strong style="color:#22c55e">$${money(receivableTotal)}</strong></div><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #0f0f25"><span>CxP pendientes</span><strong style="color:#ef4444">$${money(payableTotal)}</strong></div><div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #0f0f25"><span>Movimientos anulados</span><strong style="color:#f59e0b">${D.expenses.filter(e=>e.status==='anulado').length + D.orders.filter(o=>o.status==='anulado').length}</strong></div><div style="display:flex;justify-content:space-between;padding:8px 0"><span>Audit log</span><strong style="color:#66c7f4">${(D.auditLog||[]).length}</strong></div></div>
    </div>
    <div class="g2" style="margin-bottom:18px">
      <div class="panel" id="ar-box" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#22c55e">💳 Cuentas por cobrar</h3><div class="g2" style="margin-bottom:10px"><div><label class="lbl">Cliente</label><input id="ar-client"/></div><div><label class="lbl">Monto</label><input id="ar-amount" type="number"/></div><div><label class="lbl">Moneda</label><select id="ar-currency"><option value="USD">USD</option><option value="Bs">Bs</option></select></div><div><label class="lbl">Vence</label><input id="ar-due" type="date"/></div><div style="grid-column:1/-1"><label class="lbl">Descripción</label><input id="ar-desc"/></div></div><button class="bp" onclick="saveReceivable()">+ Registrar CxC</button><div style="margin-top:12px">${(D.accountsReceivable||[]).slice(0,8).map(x=>`<div style="padding:10px 0;border-bottom:1px solid #0f0f25;opacity:${x.status==='anulado'?0.6:1}"><div style="display:flex;justify-content:space-between;gap:8px"><div><div style="font-size:13px;font-weight:600">${esc(x.client)}</div><div style="font-size:11px;color:#7b93ad">${esc(x.desc||'Sin descripción')} ${x.dueDate?`· Vence ${esc(x.dueDate)}`:''}</div>${x.annulReason?`<div style="font-size:11px;color:#ef4444">⛔ ${esc(x.annulReason)}</div>`:''}</div><div style="text-align:right"><div style="color:#22c55e;font-weight:700">${x.amount} ${x.currency}</div><span class="tag ${x.status==='pagado'?'ok':x.status==='anulado'?'no':'wr'}">${esc(x.status)}</span></div></div><div style="display:flex;gap:8px;margin-top:8px">${x.status==='pendiente'?`<button onclick="markReceivablePaid(${x.id})" class="bs" style="padding:6px 10px">Marcar pagada</button><button onclick="annulReceivable(${x.id})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:6px 10px;border-radius:8px">Anular</button>`:''}</div></div>`).join('')||'<p style="color:#7b93ad;font-size:12px">Sin cuentas por cobrar.</p>'}</div></div>
      <div class="panel" id="ap-box" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#ef4444">🏦 Cuentas por pagar</h3><div class="g2" style="margin-bottom:10px"><div><label class="lbl">Proveedor</label><input id="ap-supplier"/></div><div><label class="lbl">Monto</label><input id="ap-amount" type="number"/></div><div><label class="lbl">Moneda</label><select id="ap-currency"><option value="USD">USD</option><option value="Bs">Bs</option></select></div><div><label class="lbl">Vence</label><input id="ap-due" type="date"/></div><div style="grid-column:1/-1"><label class="lbl">Descripción</label><input id="ap-desc"/></div></div><button class="bp" onclick="savePayable()">+ Registrar CxP</button><div style="margin-top:12px">${(D.accountsPayable||[]).slice(0,8).map(x=>`<div style="padding:10px 0;border-bottom:1px solid #0f0f25;opacity:${x.status==='anulado'?0.6:1}"><div style="display:flex;justify-content:space-between;gap:8px"><div><div style="font-size:13px;font-weight:600">${esc(x.supplier)}</div><div style="font-size:11px;color:#7b93ad">${esc(x.desc||'Sin descripción')} ${x.dueDate?`· Vence ${esc(x.dueDate)}`:''}</div>${x.annulReason?`<div style="font-size:11px;color:#ef4444">⛔ ${esc(x.annulReason)}</div>`:''}</div><div style="text-align:right"><div style="color:#ef4444;font-weight:700">${x.amount} ${x.currency}</div><span class="tag ${x.status==='pagado'?'ok':x.status==='anulado'?'no':'wr'}">${esc(x.status)}</span></div></div><div style="display:flex;gap:8px;margin-top:8px">${x.status==='pendiente'?`<button onclick="markPayablePaid(${x.id})" class="bs" style="padding:6px 10px">Marcar pagada</button><button onclick="annulPayable(${x.id})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:6px 10px;border-radius:8px">Anular</button>`:''}</div></div>`).join('')||'<p style="color:#7b93ad;font-size:12px">Sin cuentas por pagar.</p>'}</div></div>
    </div>
    <div class="panel" id="audit-box" style="padding:18px"><h3 style="font-size:13px;margin-bottom:12px;color:#66c7f4">🕵️ Bitácora / Auditoría</h3>${auditList(14)}</div>`;
  };

  rCRM = function(){
    ensureOpsData();
    const total=D.clients.length+D.waitlistContacts.length+D.subscribers.length;
    g('tab-c').innerHTML=`<div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Base de Datos & Operaciones</h2><p style="color:#7b93ad;font-size:12px">Clientes, proveedores, usuarios y contactos.</p></div>
    <div class="g4" style="margin-bottom:24px">${[{l:'Compradores',v:D.clients.length,c:'#00e5ff'},{l:'Lista Espera',v:D.waitlistContacts.length,c:'#f59e0b'},{l:'Suscriptores',v:D.subscribers.length,c:'#a855f7'},{l:'Proveedores',v:D.suppliers.length,c:'#22c55e'}].map(s=>`<div class="sc" style="border:1px solid ${s.c}22;border-left:3px solid ${s.c}"><div style="font-size:18px;font-weight:700;color:${s.c}">${s.v}</div><div style="font-size:11px;color:#7b93ad">${s.l}</div></div>`).join('')}</div>
    <div class="g2" style="margin-bottom:18px"><div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#22c55e;margin-bottom:12px">🏭 Proveedores</h3><div class="g2" style="margin-bottom:10px"><div><label class="lbl">Nombre</label><input id="sup-name"/></div><div><label class="lbl">Teléfono</label><input id="sup-phone"/></div><div style="grid-column:1/-1"><label class="lbl">Notas</label><input id="sup-notes"/></div></div><button class="bp" onclick="saveSupplier()">+ Guardar proveedor</button><div style="margin-top:12px">${D.suppliers.map(s=>`<div style="padding:8px 0;border-bottom:1px solid #0f0f25"><div style="font-size:13px;font-weight:600">${esc(s.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(s.phone||'Sin teléfono')} ${s.notes?`· ${esc(s.notes)}`:''}</div></div>`).join('')}</div></div>
    <div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#66c7f4;margin-bottom:12px">👤 Usuarios & permisos</h3><div class="g2" style="margin-bottom:10px"><div><label class="lbl">Nombre</label><input id="usr-name"/></div><div><label class="lbl">Rol</label><select id="usr-role"><option value="admin">Admin</option><option value="ventas">Ventas</option><option value="finanzas">Finanzas</option><option value="operaciones">Operaciones</option></select></div></div><button class="bp" onclick="saveUser()">+ Guardar usuario</button><div style="margin-top:12px">${D.users.map(u=>`<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #0f0f25"><div><div style="font-size:13px;font-weight:600">${esc(u.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(u.role)}</div></div><span class="tag ok">${esc(u.status||'activo')}</span></div>`).join('')}</div></div></div>
    <div style="background:#00e5ff08;border:1px solid #00e5ff22;border-radius:10px;padding:12px;margin-bottom:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px"><p style="font-size:12px;color:#7b93ad">💡 Exportar toda la base de datos como texto copiable</p><button onclick="exportDB()" style="background:#00e5ff11;border:1px solid #00e5ff44;color:#00e5ff;padding:6px 16px;border-radius:7px;font-size:12px;cursor:pointer">📋 Exportar BD</button></div><div id="export-area" style="display:none;background:#060610;border-radius:8px;padding:12px;margin-bottom:18px;font-size:11px;color:#94a3b8;white-space:pre-wrap;font-family:monospace;max-height:150px;overflow:auto"></div>
    <h3 style="font-size:14px;color:#00e5ff;margin-bottom:12px">🛒 Compradores</h3><div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">${D.clients.length?D.clients.map(c=>`<div class="panel" style="padding:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px"><div style="display:flex;align-items:center;gap:10px"><div style="width:36px;height:36px;border-radius:50%;background:#00e5ff11;display:flex;align-items:center;justify-content:center;font-weight:700;color:#00e5ff;font-size:14px">${esc(c.name.charAt(0))}</div><div><div style="font-weight:700;font-size:13px">${esc(c.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(c.phone)}${c.email?' · '+esc(c.email):''}</div></div></div><div style="display:flex;align-items:center;gap:10px"><div style="text-align:right"><div style="font-size:15px;font-weight:700;color:#00e5ff">$${money(c.total)}</div><div style="font-size:10px;color:#7b93ad">${c.purchases} compra(s)</div></div></div></div>`).join(''):'<p style="color:#7b93ad;font-size:12px">Sin compradores registrados</p>'}</div>
    <h3 style="font-size:14px;color:#f59e0b;margin-bottom:12px">🔔 Lista de Espera</h3><div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">${D.waitlistContacts.length?D.waitlistContacts.map((c,i)=>`<div class="panel" style="padding:14px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;border:1px solid #f59e0b22"><div><div style="font-weight:700;font-size:13px">${esc(c.name)}</div><div style="font-size:11px;color:#7b93ad">${esc(c.phone)}${c.email?' · '+esc(c.email):''}</div><div style="font-size:10px;color:#f59e0b;margin-top:2px">Quiere: ${esc(c.product)}</div></div><div style="display:flex;gap:6px"><a href="https://wa.me/${c.phone.replace(/\D/g,'')}?text=${encodeURIComponent('¡Hola '+c.name+'! 🦈 *'+c.product+'* ya está disponible en SharkByte. ¡Escribinos para reservarlo! 💪')}" target="_blank" style="background:#25d36611;border:1px solid #25d36644;color:#25d366;padding:5px 10px;border-radius:7px;font-size:12px;text-decoration:none">💬 Notificar</a><button onclick="D.waitlistContacts.splice(${i},1);persistSharkByte();rCRM()" class="brd">🗑️</button></div></div>`).join(''):'<p style="color:#7b93ad;font-size:12px">Sin contactos en lista de espera</p>'}</div>
    <h3 style="font-size:14px;color:#a855f7;margin-bottom:12px">🔔 Suscriptores</h3><div style="display:flex;flex-direction:column;gap:8px">${D.subscribers.length?D.subscribers.map((s,i)=>`<div class="panel" style="padding:12px 16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px"><div><div style="font-size:13px;font-weight:600">${esc(s.name||'Sin nombre')}</div><div style="font-size:11px;color:#7b93ad">${esc(s.email)}${s.phone?' · '+esc(s.phone):''}</div></div><div style="display:flex;gap:6px"><span style="font-size:11px;color:#374151">${esc(s.date)}</span><button onclick="D.subscribers.splice(${i},1);persistSharkByte();rCRM()" class="brd">🗑️</button></div></div>`).join(''):'<p style="color:#7b93ad;font-size:12px">Sin suscriptores aún</p>'}</div>`;
  };

  const old_exportDB=exportDB;
  exportDB=function(){ old_exportDB(); };

  const old_rDash = rDash;
  rDash = function(){ old_rDash(); ensureOpsData(); const el=g('tab-d'); if(!el) return; const wrap=document.createElement('div'); wrap.className='g2'; wrap.style.marginTop='18px'; const alerts=inventoryAlerts(); wrap.innerHTML=`<div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#f59e0b;margin-bottom:12px">📦 Alertas administrativas</h3><div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f0f25"><span>Stock bajo</span><strong style="color:#f59e0b">${alerts.length}</strong></div><div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f0f25"><span>CxC pendientes</span><strong style="color:#22c55e">${activeReceivables().filter(x=>x.status==='pendiente').length}</strong></div><div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #0f0f25"><span>CxP pendientes</span><strong style="color:#ef4444">${activePayables().filter(x=>x.status==='pendiente').length}</strong></div><div style="display:flex;justify-content:space-between;padding:7px 0"><span>Caja</span><strong style="color:#66c7f4">${currentCashSession()?'Abierta':'Cerrada'}</strong></div></div><div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#66c7f4;margin-bottom:12px">🕵️ Últimos cambios</h3>${auditList(6)}</div>`; el.appendChild(wrap); };

  function wrapPersist(fnName){
    const orig=window[fnName]; if(typeof orig!=='function') return;
    window[fnName]=function(...args){ const res=orig.apply(this,args); try{persist();}catch(e){} return res; };
  }
  ['sSub','sBuy','sInt','sRev','aClient','handleProdImg','setCat'].forEach(wrapPersist);

  // boot
  loadState();
  ensureTaxonomy(); ensureFinanceFlags(); ensureOpsData();
  persist();
  if(g('va').style.display!=='none'){D.ctab=sanitizeAdminTab(D.ctab||'p'); buildNav(); rT(D.ctab);}
  else {renderHero(); rS();}
})();
