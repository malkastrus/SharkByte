# SharkByte 🦈
Tienda online gaming/geek para Venezuela.

## ⚠️ IMPORTANTE: Cómo abrir
**Siempre extraé el zip completo** antes de abrir `index.html`.  
Si abrís el HTML sin las carpetas `css/` y `js/` al lado, no cargará los estilos.

**Opción garantizada (sin carpetas):** usa `index-standalone.html` — funciona sola, sin nada más.

---

## 📁 Estructura
```
sharkbyte/
├── index.html            ← App principal (requiere css/ y js/)
├── index-standalone.html ← Todo en un solo archivo (abre directo)
├── css/
│   ├── base.css          ← Todos los estilos visuales
│   └── extra.css         ← Estilos del panel de productos
├── js/
│   ├── main.js           ← Lógica principal (~1190 líneas)
│   └── v12.js            ← Persistencia y operaciones avanzadas
└── vercel.json
```

---

## 🚀 GitHub + Vercel

```bash
# 1. Init repo
git init
git add .
git commit -m "SharkByte storefront"

# 2. Subir a GitHub
git remote add origin https://github.com/TU_USUARIO/sharkbyte.git
git branch -M main
git push -u origin main

# 3. En vercel.com → Add New → Import repo → Framework: Other → Deploy ✅
```

## 🔐 Admin
- Clic 3 veces en el copyright del footer, o ir a `URL#admin`
- **Email:** `malkastrus99@gmail.com` · **Pass:** `Nikki11`
- Cambiar credenciales en `js/main.js` → función `doLogin()`
