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

