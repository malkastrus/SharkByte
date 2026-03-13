# SharkByte 🦈

## Estructura
```
├── index.html       ← entrada principal
├── css/
│   ├── base.css     ← todos los estilos (tienda + admin)  
│   └── extra.css    ← estilos del panel de productos
├── js/
│   ├── main.js      ← lógica principal (~1190 líneas)
│   └── v12.js       ← persistencia localStorage (~258 líneas)
└── vercel.json
```

## ⚠️ Probar localmente
NO abras index.html con doble clic — el navegador bloquea archivos externos con file://.
Usá un servidor local:
```bash
python3 -m http.server 8080
# Luego: http://localhost:8080
```
O en VS Code: clic derecho sobre index.html → Open with Live Server.

## Deploy
```bash
git init && git add . && git commit -m "init"
git remote add origin https://github.com/TU_USUARIO/sharkbyte.git
git branch -M main && git push -u origin main
# vercel.com → Add New → Import → Framework: Other → Deploy
```

## Admin
Clic 3x en el copyright del footer, o URL#admin
Email: malkastrus99@gmail.com · Pass: Nikki11

## Dónde editar cada cosa
| Qué | Archivo | Dónde |
|-----|---------|-------|
| Número WhatsApp | js/main.js | línea 1 |
| Productos demo | js/main.js | líneas 4–50 (array D.products) |
| Tasas BCV | js/main.js | objeto D.cfg |
| Datos de pago | js/main.js | D.cfg.binanceUser, pagoMovil... |
| Colores/fuentes | css/base.css | primeras líneas |
| Layout tienda | css/base.css | clases .store-shell, .hero-*, etc |
| Estilos admin | css/extra.css | todo el archivo |
