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
