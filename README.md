# SharkByte 🦈
**Tienda online de productos gaming y geek para Venezuela**

Demo estable — storefront tipo PCFactory con panel de administración completo.

---

## 📁 Estructura del repositorio

```
sharkbyte/
├── index.html              ← Punto de entrada de la app
├── css/
│   ├── base.css            ← Reset, clases utilitarias, panel admin (dark)
│   ├── store.css           ← Overrides y estilos del selector del admin
│   └── extra.css           ← Fixes de formulario en panel de productos
├── js/
│   ├── 01-data.js          ← Estado global (D), constante WA, helper g()
│   ├── 02-utils.js         ← ntf(), prodMedia(), handleProdImg()
│   ├── 03-admin-nav.js     ← sv(), buildNav(), sT(), doLogin(), secretAdmin()
│   ├── 04-taxonomy.js      ← Categorías y subcategorías: ensureTaxonomy(), addCat()...
│   ├── 05-charts.js        ← miniBarChart(), chartData helpers
│   ├── 06-store.js         ← rS(), renderHero(), pCard(), openProd()
│   ├── 07-modals.js        ← oBuy(), sBuy(), openRev(), sRev(), openSubscribe()
│   ├── 08-products.js      ← rProd(), sProd(), eprod(), dprod(), tps()
│   ├── 09-orders.js        ← rOrders(), sOrd(), cfOrd(), cnOrd()
│   ├── 10-crm.js           ← rCRM(), exportDB()
│   ├── 11-finance.js       ← rFin(), rCalc(), funciones de conversión
│   ├── 12-admin-render.js  ← rRevAdmin(), delRev(), rCfg(), sCfg()
│   └── 13-persistence.js   ← localStorage, audit log, ensureOpsData() (IIFE V12)
├── vercel.json             ← Configuración Vercel (static site)
├── .gitignore
└── README.md
```

---

## 🚀 Cómo subir a GitHub y desplegar en Vercel

### 1. Crear repositorio en GitHub

```bash
# Desde la carpeta del proyecto
git init
git add .
git commit -m "Initial commit — SharkByte storefront"

# Crear repo en GitHub (necesitás tener GitHub CLI instalado)
gh repo create sharkbyte --public --source=. --push

# O manualmente: crear repo en github.com y luego:
git remote add origin https://github.com/TU_USUARIO/sharkbyte.git
git branch -M main
git push -u origin main
```

### 2. Desplegar en Vercel

**Opción A — desde la web (más fácil):**
1. Ir a [vercel.com](https://vercel.com) → **Add New Project**
2. Importar el repositorio de GitHub
3. Framework Preset: **Other** (es HTML estático, sin build)
4. Click **Deploy** — ¡listo! 🎉

**Opción B — desde la CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 🔐 Acceso al panel de administración

- Hacer click 3 veces en el copyright del footer, o ir a `URL#admin`
- **Email:** `malkastrus99@gmail.com`
- **Contraseña:** `Nikki11`

> ⚠️ Cambiá las credenciales en `js/03-admin-nav.js` antes de publicar.

---

## ⚙️ Configurar para tu negocio

Abre `js/01-data.js` y editá:

| Campo | Descripción |
|-------|-------------|
| `WA` | Número de WhatsApp para pedidos |
| `D.cfg.tasaBCV` | Tasa BCV inicial |
| `D.cfg.binanceUser` | Usuario Binance |
| `D.cfg.pagoMovil` | Número de Pago Móvil |
| `D.cfg.banco` | Banco |
| `D.cfg.cedula` | Cédula |
| `D.cfg.heroTitle` | Título del banner |
| `D.cfg.zones` | Zonas de delivery y precios |
| `D.products` | Catálogo inicial de productos |

---

## 💾 Persistencia de datos

Todos los cambios hechos en el panel admin se guardan automáticamente en **localStorage** del navegador. El estado se restaura al recargar la página. No requiere backend ni base de datos.

---

## 📦 Tecnologías

- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Google Fonts: Oxanium + Inter
- Deploy: Vercel (static)
- Storage: localStorage del navegador
