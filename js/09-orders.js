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

