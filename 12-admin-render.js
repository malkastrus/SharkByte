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

