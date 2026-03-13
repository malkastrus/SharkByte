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
