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
