(function(){
  function safePersist(){ try{ if(typeof persistSharkByte==='function') persistSharkByte(); }catch(e){} }
  function uniq(arr){ return [...new Set((arr||[]).filter(Boolean))]; }
  function productCategories(){
    ensureTaxonomy();
    const fromTax = Object.keys(D.taxonomy||{});
    const fromProducts = (D.products||[]).map(p=>p.cat).filter(Boolean);
    return uniq([...fromTax,...fromProducts]).sort((a,b)=>a.localeCompare(b));
  }
  function productSubcategories(cats){
    ensureTaxonomy();
    const selectedCats=(cats||[]).filter(Boolean);
    let subs=[];
    if(selectedCats.length){
      selectedCats.forEach(cat=>{ subs.push(...((D.taxonomy&&D.taxonomy[cat])||[])); });
      D.products.filter(p=>selectedCats.includes(p.cat)).forEach(p=>subs.push(p.subcat||'General'));
    } else {
      Object.values(D.taxonomy||{}).forEach(list=>subs.push(...(list||[])));
      (D.products||[]).forEach(p=>subs.push(p.subcat||'General'));
    }
    return uniq(subs.length?subs:['General']).sort((a,b)=>a.localeCompare(b));
  }
  function multiSelectOptions(items, selected){
    const set=new Set(selected||[]);
    return items.map(v=>`<option value="${esc(v)}" ${set.has(v)?'selected':''}>${esc(v)}</option>`).join('');
  }
  function readMultiSelect(id){
    const el=g(id); if(!el) return [];
    return Array.from(el.selectedOptions||[]).map(o=>o.value).filter(Boolean);
  }
  function syncAdminProductFilters(){
    adminProdState=adminProdState||{};
    adminProdState.q=adminProdState.q||'';
    adminProdState.cats=uniq(adminProdState.cats||[]);
    const validSubs=productSubcategories(adminProdState.cats);
    adminProdState.subs=uniq((adminProdState.subs||[]).filter(s=>validSubs.includes(s)));
  }
  adminProdState={q:(adminProdState&&adminProdState.q)||'',cats:uniq((adminProdState&&adminProdState.cats)||[]),subs:uniq((adminProdState&&adminProdState.subs)||[])};
  syncAdminProductFilters();

  window.setAdminProdSearch=function(v){ adminProdState.q=v||''; rProd(); };
  window.setAdminProdCats=function(){
    adminProdState.cats=readMultiSelect('prod-filter-cat');
    syncAdminProductFilters();
    rProd();
  };
  window.setAdminProdSubs=function(){
    adminProdState.subs=readMultiSelect('prod-filter-sub');
    syncAdminProductFilters();
    rProd();
  };
  window.setAdminProdFilter=function(cat='Todos',sub='Todos'){
    adminProdState.cats=cat==='Todos'?[]:[cat];
    adminProdState.subs=sub==='Todos'?[]:[sub];
    syncAdminProductFilters();
    rProd();
  };
  window.clearAdminProdFilter=function(){
    adminProdState={q:'',cats:[],subs:[]};
    rProd();
  };

  window.syncFeatureToggleChecks=function(){
    ['pfft','pfnew'].forEach(id=>{
      const input=g(id);
      if(!input) return;
      const card=input.closest('.feature-toggle-card');
      if(card) card.classList.toggle('active', !!input.checked);
    });
  };

  window.applyGlobalMinStock=function(){
    const n=parseInt(g('prod-minstock-global')?.value)||0;
    if(!n){ ntf('Indica un mínimo válido','err'); return; }
    (D.products||[]).forEach(p=>{ if(p.minStock==null||p.minStock===0) p.minStock=n; });
    safePersist();
    rProd();
    ntf('Mínimo aplicado ✅');
  };

  sProd=function(){
    ensureTaxonomy();
    const n=g('pfn')?.value?.trim();
    const pr=g('pfp')?.value;
    if(!n||!pr){ ntf('Nombre y precio requeridos','err'); return; }
    const em=(g('pfemtxt')?.value||eem||'📦').trim()||'📦';
    const current=eid?D.products.find(p=>p.id===eid):null;
    const payload={
      name:n,
      desc:g('pfd')?.value||'',
      priceUSD:parseFloat(pr),
      cost:parseFloat(g('pfco')?.value)||0,
      stock:parseInt(g('pfst')?.value)||0,
      status:g('pfes')?.value||'available',
      cat:g('pfc')?.value||productCategories()[0]||'General',
      subcat:g('pfsc')?.value||'General',
      em,
      featured:!!g('pfft')?.checked,
      discountPct:Math.max(0,Math.min(90,parseFloat(g('pfdisc')?.value)||0)),
      isNew:!!g('pfnew')?.checked,
      imgData:prodImgData,
      minStock:parseInt(g('pfmin')?.value)||2,
      supplier:current?.supplier||''
    };
    if(eid){
      const i=D.products.findIndex(p=>p.id===eid);
      if(i<0) return;
      if(!prodImgData) payload.imgData=D.products[i].imgData||null;
      D.products[i]={...D.products[i],...payload};
      try{ if(typeof auditEvent==='function') auditEvent('producto_actualizado',`Producto actualizado: ${n}`,{productId:eid}); }catch(e){}
      ntf('Actualizado ✅');
    } else {
      D.products.push({...payload,id:Date.now(),waitlist:[],reviews:[]});
      try{ if(typeof auditEvent==='function') auditEvent('producto_creado',`Producto agregado: ${n}`); }catch(e){}
      ntf('Agregado ✅');
    }
    safePersist();
    rProd();
    if(typeof syncFeatureToggleChecks==='function') syncFeatureToggleChecks();
    if(typeof rS==='function') rS();
  };

  const prevEprod=eprod;
  eprod=function(id){
    prevEprod(id);
    const p=D.products.find(x=>x.id===id);
    setTimeout(()=>{
      if(g('pfmin')) g('pfmin').value=p?.minStock||2;
      if(g('pfdisc')) g('pfdisc').value=Number(p?.discountPct)||0;
      if(g('pfnew')) g('pfnew').checked=!!p?.isNew;
      if(g('pfft')) g('pfft').checked=!!p?.featured;
      if(typeof syncFeatureToggleChecks==='function') syncFeatureToggleChecks();
      if(typeof upc==='function') upc();
    },20);
  };

  rProd=function(){
    ensureTaxonomy();
    const el=g('tab-p'); if(!el) return;
    const cfg=D.cfg;
    syncAdminProductFilters();
    const q=(adminProdState.q||'').toLowerCase().trim();
    const cats=adminProdState.cats||[];
    const subs=adminProdState.subs||[];
    const all=(D.products||[]).filter(p=>{
      const pSub=(p.subcat||'General');
      const matchQ=!q || (`${p.name} ${p.cat} ${pSub} ${p.desc||''}`).toLowerCase().includes(q);
      const matchCat=!cats.length || cats.includes(p.cat);
      const matchSub=!subs.length || subs.includes(pSub);
      return matchQ && matchCat && matchSub;
    }).sort((a,b)=>a.cat.localeCompare(b.cat)||String(a.subcat||'').localeCompare(String(b.subcat||''))||a.name.localeCompare(b.name));
    const categoryOptions=productCategories();
    const subcategoryOptions=productSubcategories(cats);
    const alerts=(typeof inventoryAlerts==='function')?inventoryAlerts():[];
    const activeFilterSummary=[
      ...(cats||[]).map(c=>`<span style="background:#2f80c311;border:1px solid #2f80c344;color:#1e4e79;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:700">Categoría: ${esc(c)}</span>`),
      ...(subs||[]).map(s=>`<span style="background:#8b5cf611;border:1px solid #8b5cf644;color:#6d28d9;padding:6px 10px;border-radius:999px;font-size:11px;font-weight:700">Subcategoría: ${esc(s)}</span>`)
    ].join('');
    el.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;flex-wrap:wrap;gap:12px"><div><h2 style="font-size:20px;background:linear-gradient(135deg,#66c7f4,#7c5cff);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Productos</h2><p style="color:#5f7d99;font-size:12px;font-weight:600">${D.products.length} en catálogo</p></div><button class="bp" onclick="tpf()">+ Agregar</button></div>
      ${renderTaxManager()}
      <div class="panel" style="padding:18px;margin-bottom:18px;background:#f9fcff">
        <div style="display:grid;grid-template-columns:minmax(220px,1.4fr) minmax(200px,1fr) minmax(200px,1fr) auto;gap:12px;align-items:start" class="compact-grid">
          <div>
            <label class="admin-filter-label" style="display:block;margin-bottom:6px">Buscar</label>
            <input placeholder="Buscar por producto, categoría o subcategoría" value="${esc(adminProdState.q)}" oninput="setAdminProdSearch(this.value)" style="min-width:220px;background:#fff;color:#16324f;font-weight:600;border:1px solid #b7d6ef"/>
          </div>
          <div>
            <label class="admin-filter-label" style="display:block;margin-bottom:6px">Categorías</label>
            <select id="prod-filter-cat" multiple onchange="setAdminProdCats()">${multiSelectOptions(categoryOptions, cats)}</select>
          </div>
          <div>
            <label class="admin-filter-label" style="display:block;margin-bottom:6px">Subcategorías</label>
            <select id="prod-filter-sub" multiple onchange="setAdminProdSubs()">${multiSelectOptions(subcategoryOptions, subs)}</select>
          </div>
          <div style="display:flex;flex-direction:column;justify-content:flex-end;gap:8px;min-width:150px">
            <button class="bs" onclick="clearAdminProdFilter()">Limpiar filtros</button>
            <div style="font-size:12px;color:#5f7d99;font-weight:700">${all.length} resultado(s)</div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:12px">
          <div style="display:flex;gap:8px;flex-wrap:wrap">${activeFilterSummary||'<span style="font-size:12px;color:#5f7d99;font-weight:600">Sin filtros avanzados activos.</span>'}</div>
          <p style="font-size:11px;color:#5f7d99;font-weight:600">Puedes seleccionar varias categorías y varias subcategorías al mismo tiempo.</p>
        </div>
      </div>
      <div id="pf" class="compact-form" style="display:none;background:#f7fbff;border:1px solid #cfe4f6;border-radius:16px;padding:18px;margin-bottom:22px">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px">
          <h3 id="pft" style="font-size:16px;color:#1e4e79;margin:0">Nuevo producto</h3>
          <p style="font-size:11px;color:#5f7d99;font-weight:700">Formulario compacto y más legible</p>
        </div>
        <div class="compact-grid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:12px">
          <div><label class="lbl">Nombre *</label><input id="pfn"/></div>
          <div><label class="lbl">Categoría</label><select id="pfc" onchange="refreshSubcatSelect()">${catOptions()}</select></div>
          <div><label class="lbl">Subcategoría</label><select id="pfsc"></select></div>
          <div><label class="lbl">Precio base (USD) *</label><input id="pfp" type="number" oninput="upc()"/></div>
          <div><label class="lbl">Costo (USD)</label><input id="pfco" type="number" oninput="upc()"/></div>
          <div><label class="lbl">Descuento (%)</label><input id="pfdisc" type="number" min="0" max="90" value="0" oninput="upc()" placeholder="0 = sin descuento"/></div>
          <div><label class="lbl">Stock</label><input id="pfst" type="number"/></div>
          <div><label class="lbl">Stock mínimo</label><input id="pfmin" type="number" value="2"/></div>
          <div><label class="lbl">Estado</label><select id="pfes"><option value="available">✅ Disponible</option><option value="agotado">❌ Agotado</option><option value="apartado">🟡 Apartado</option></select></div>
          <div><label class="lbl">Emoji</label><input id="pfemtxt" placeholder="Opcional: 🎮"/></div>
          <div style="grid-column:1/-1"><label class="lbl">Descripción</label><input id="pfd"/></div>
          <div style="grid-column:1/-1"><label class="lbl">Foto del producto</label><div class="upload-area" onclick="document.getElementById('pfimg').click()"><input type="file" id="pfimg" accept="image/*" style="display:none" onchange="handleProdImg(this)"/><div id="pfimg-preview"><p style="font-size:12px;font-weight:600">Sube una foto real del producto o del mockup</p><span style="display:inline-block;margin-top:8px;background:#2f80c311;border:1px solid #66c7f455;color:#2f80c3;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:700">🖼️ Elegir imagen</span></div></div></div>
          <div style="grid-column:1/-1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px" class="compact-grid">
            <label class="feature-toggle-card feature-gold">
              <input type="checkbox" id="pfft" onchange="syncFeatureToggleChecks()"/>
              <span class="feature-check">✓</span>
              <div class="feature-copy"><label for="pfft">⭐ Producto destacado</label><p>Aparece en la sección de destacados.</p></div>
            </label>
            <label class="feature-toggle-card feature-green">
              <input type="checkbox" id="pfnew" onchange="syncFeatureToggleChecks()"/>
              <span class="feature-check">✓</span>
              <div class="feature-copy"><label for="pfnew">🆕 Nuevo</label><p>Muestra una banda en la esquina del producto.</p></div>
            </label>
            <div style="padding:12px;background:#fff;border:1px solid #d7e6f5;border-radius:12px">
              <div style="font-size:13px;color:#1e4e79;font-weight:800">🔥 En descuento</div>
              <p style="font-size:11px;color:#5f7d99;font-weight:600;margin-top:4px">Si el porcentaje es mayor a 0, también saldrá en la sección de descuentos.</p>
            </div>
          </div>
        </div>
        <div style="margin-bottom:12px"><label class="lbl">Emoji rápido</label><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px">${['🎮','🕹️','🎧','🖱️','⌨️','🖥️','📱','⚡','🌟','🏆','👾','🤖','🎯','📦','🧩','🎲','🦈'].map(e=>`<button id="eb${e}" onclick="sEm('${e}')" style="width:34px;height:34px;border-radius:8px;border:2px solid #bfd9ee;background:#fff;cursor:pointer;font-size:16px">${e}</button>`).join('')}</div></div>
        <div id="pfc2" style="display:none;background:#ffffff;border:1px solid #d7e6f5;border-radius:10px;padding:10px;margin-bottom:12px;font-size:12px;flex-wrap:wrap;gap:16px"></div>
        <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="bp" onclick="sProd()" id="psb" style="padding:9px 18px;font-size:13px">✅ Agregar</button><button class="bs" onclick="tpf()" style="padding:9px 18px;font-size:13px">Cancelar</button></div>
      </div>
      <div class="g2" style="margin-bottom:18px">
        <div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#f59e0b;margin-bottom:12px">⚠️ Stock bajo / por reponer</h3>${alerts.length?alerts.map(p=>`<button onclick="goToProductEdit(${p.id})" style="width:100%;text-align:left;background:#f9fcff;border:1px solid #d7e6f5;border-radius:10px;padding:10px;margin-bottom:8px;color:#16324f;cursor:pointer"><div style="font-weight:800">${esc(p.name)}</div><div style="font-size:11px;color:#5f7d99;font-weight:600">${esc(p.cat)} · ${esc(p.subcat||'General')} · Stock ${p.stock} / mínimo ${p.minStock}</div></button>`).join(''):'<p style="color:#5f7d99;font-size:12px;font-weight:600">Todo el inventario está por encima del mínimo.</p>'}</div>
        <div class="panel" style="padding:18px"><h3 style="font-size:13px;color:#2f80c3;margin-bottom:12px">📦 Control de inventario</h3><div style="display:grid;grid-template-columns:1fr auto;gap:10px;align-items:end"><div><label class="admin-filter-label" style="display:block;margin-bottom:6px">Stock mínimo sugerido</label><input id="prod-minstock-global" type="number" placeholder="Ej: 2" style="background:#fff;color:#16324f;font-weight:600;border:1px solid #b7d6ef"/></div><button class="bs" onclick="applyGlobalMinStock()">Aplicar a vacíos</button></div><p style="font-size:12px;color:#5f7d99;margin-top:10px;font-weight:600">Esto llena el stock mínimo solo en productos que todavía no lo tengan definido.</p></div>
      </div>
      <div class="panel" style="overflow:auto"><table><thead><tr><th>Producto</th><th>USD</th><th>Bs</th><th>Stock</th><th>Etiquetas</th><th>Reseñas</th><th>Estado</th><th></th></tr></thead><tbody>${all.map(p=>{const finalPrice=(Number(p.discountPct)||0)>0?(Number(p.priceUSD)||0)*(1-(Number(p.discountPct)||0)/100):(Number(p.priceUSD)||0);return `<tr><td><div style="display:flex;align-items:center;gap:9px">${prodMedia(p,'thumb')}<div><div style="font-size:13px;font-weight:700;color:#16324f">${p.name}</div><div style="font-size:11px;color:#5f7d99;font-weight:600">${p.cat}${p.subcat?` · ${p.subcat}`:''}</div></div></div></td><td>${(Number(p.discountPct)||0)>0?`<div style="display:flex;flex-direction:column"><span style="color:#94a3b8;font-size:11px;text-decoration:line-through;font-weight:700">$${Number(p.priceUSD).toFixed(2)}</span><span style="color:#ef4444;font-weight:800">$${finalPrice.toFixed(2)}</span></div>`:`<span style="color:#2f80c3;font-weight:800">$${Number(p.priceUSD).toFixed(2)}</span>`}</td><td style="color:${(Number(p.discountPct)||0)>0?'#ef4444':'#d97706'};font-size:12px;font-weight:700">Bs.${(finalPrice*cfg.tasaBCV).toFixed(0)}</td><td><span style="color:${p.stock<=2?'#ef4444':p.stock<=5?'#f59e0b':'#16a34a'};font-weight:800">${p.stock}</span></td><td><div style="display:flex;gap:6px;flex-wrap:wrap">${p.featured?'<span style="background:#f59e0b14;border:1px solid #f59e0b44;color:#f59e0b;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800">⭐ Destacado</span>':''}${(Number(p.discountPct)||0)>0?`<span style="background:#ef444412;border:1px solid #ef444455;color:#ef4444;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800">🔥 -${Number(p.discountPct)}%</span>`:''}${p.isNew?'<span style="background:#22c55e12;border:1px solid #22c55e44;color:#16a34a;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800">🆕 Nuevo</span>':''}${!p.featured&&(Number(p.discountPct)||0)<=0&&!p.isNew?'<span style="font-size:11px;color:#94a3b8;font-weight:700">—</span>':''}</div></td><td style="font-size:12px;color:#7c3aed;font-weight:700">${p.reviews?.length||0} reseña(s)</td><td><button onclick="tps(${p.id})" class="tag ${p.status==='available'?'ok':p.status==='agotado'?'no':'wr'}" style="cursor:pointer;border:none">${p.status}</button></td><td><div style="display:flex;gap:6px"><button onclick="eprod(${p.id})" style="background:#66c7f411;border:1px solid #66c7f444;color:#2f80c3;padding:4px 9px;border-radius:6px;font-size:11px;font-weight:700">✏️</button><button onclick="dprod(${p.id})" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:4px 9px;border-radius:6px;font-size:11px;font-weight:700">🗑️</button></div></td></tr>`}).join('')}</tbody></table></div>`;
    eid=null; eem='📦'; prodImgData=null; setTimeout(()=>{refreshSubcatSelect(); if(g('pfdisc')) g('pfdisc').value='0'; if(g('pfnew')) g('pfnew').checked=false; if(g('pfft')) g('pfft').checked=false; if(typeof syncFeatureToggleChecks==='function') syncFeatureToggleChecks(); if(typeof upc==='function') upc();},0);
  };

  rCfg=function(){
    const cfg=D.cfg;
    const el=g('tab-s'); if(!el) return;
    el.innerHTML=`
      <div style="margin-bottom:22px"><h2 style="font-size:20px;background:linear-gradient(135deg,#00e5ff,#0066aa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Ajustes</h2><p style="color:#5f7d99;font-size:12px;font-weight:600">Layout expandido para aprovechar todo el ancho del panel.</p></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-bottom:18px" class="settings-grid">
        <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#f59e0b">💱 Tasas</h3><label class="settings-label">BCV (Bs/$)</label><input id="sb" type="number" value="${cfg.tasaBCV}" style="margin-bottom:12px"/><label class="settings-label">Paralelo</label><input id="sp" type="number" value="${cfg.tasaParalelo}" style="margin-bottom:12px"/><label class="settings-label">CLP/USD</label><input id="sc" type="number" value="${cfg.tasaCLP}"/></div>
        <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#00e5ff">💳 Datos de pago</h3><label class="settings-label">Binance User</label><input id="sbi" value="${cfg.binanceUser}" style="margin-bottom:12px"/><label class="settings-label">Pago Móvil</label><input id="spm" value="${cfg.pagoMovil}" style="margin-bottom:12px"/><label class="settings-label">Banco</label><input id="sbk" value="${cfg.banco}" style="margin-bottom:12px"/><label class="settings-label">Cédula</label><input id="scd" value="${cfg.cedula}"/></div>
        <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#a855f7">🏪 Banner</h3><label class="settings-label">Título</label><input id="sht" value="${cfg.heroTitle}" style="margin-bottom:12px"/><label class="settings-label">Subtítulo</label><input id="shs" value="${cfg.heroSub}" style="margin-bottom:12px"/><label class="settings-label">URL Instagram</label><input id="sig" value="${cfg.instaUrl||''}"/></div>
        <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#22c55e">💬 Frases banner</h3><p style="font-size:11px;color:#5f7d99;margin-bottom:8px;font-weight:600">Una por línea</p><textarea id="sphr" rows="6" style="resize:vertical">${(cfg.phrases||[]).join('\n')}</textarea></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-bottom:18px" class="settings-grid-wide">
        <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#f97316">💬 Frases de pago</h3><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px"><div><label class="settings-label">Binance</label><textarea id="sph-b" rows="4" style="resize:vertical;font-size:12px">${cfg.paymentPhrases?.Binance||''}</textarea></div><div><label class="settings-label">Pago Móvil</label><textarea id="sph-pm" rows="4" style="resize:vertical;font-size:12px">${cfg.paymentPhrases?.['Pago Móvil']||''}</textarea></div><div><label class="settings-label">Efectivo</label><textarea id="sph-ef" rows="4" style="resize:vertical;font-size:12px">${cfg.paymentPhrases?.Efectivo||''}</textarea></div></div></div>
        <div class="panel" style="padding:22px"><h3 style="font-size:14px;margin-bottom:14px;color:#22c55e">🚚 Zonas delivery</h3><div id="szones">${cfg.zones.map((z,i)=>`<div style="display:grid;grid-template-columns:minmax(0,1fr) 120px auto;gap:10px;margin-bottom:10px"><input value="${z.name}" onchange="D.cfg.zones[${i}].name=this.value"/><input type="number" value="${z.price}" onchange="D.cfg.zones[${i}].price=parseFloat(this.value)||0"/><button onclick="D.cfg.zones.splice(${i},1);rCfg()" style="background:#ef444411;border:1px solid #ef444444;color:#ef4444;padding:4px 8px;border-radius:7px;font-size:12px;cursor:pointer">✕</button></div>`).join('')}</div><button onclick="D.cfg.zones.push({name:'Nueva',price:5});rCfg()" style="background:#22c55e11;border:1px solid #22c55e44;color:#22c55e;padding:7px 14px;border-radius:8px;font-size:12px;cursor:pointer;font-weight:700">+ Zona</button></div>
      </div>
      <div style="display:flex;justify-content:flex-end"><button class="bp" onclick="sCfg()" style="padding:12px 32px;font-size:15px">💾 Guardar todo</button></div>`;
  };

  try{
    if(g('va') && g('va').style.display!=='none'){
      if(D.ctab==='p') rProd();
      if(D.ctab==='s') rCfg();
    }
  }catch(e){}
})();
