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

