
const WA="584246689203";
const g=id=>document.getElementById(id);
let D={
  products:[
    {id:1,name:"Control PS5 DualSense",desc:"Control inalámbrico original Sony PS5, gatillos adaptativos y vibración háptica",priceUSD:45,cost:28,stock:3,status:'available',cat:'Consolas',em:'🎮',featured:true,discountPct:10,isNew:true,waitlist:[],reviews:[]},
    {id:2,name:"Audífonos Gaming RGB",desc:"Surround 7.1 virtual, micrófono desmontable, iluminación RGB multicolor",priceUSD:25,cost:12,stock:0,status:'agotado',cat:'Accesorios',em:'🎧',featured:false,waitlist:[],reviews:[]},
    {id:3,name:"Mousepad XL Gamer",desc:"900×400mm superficie textil premium, base antideslizante, costuras reforzadas",priceUSD:12,cost:5,stock:5,status:'available',cat:'PC Gaming',em:'🖱️',featured:true,discountPct:15,isNew:false,waitlist:[],reviews:[]},
    {id:4,name:"Figura Goku Ultra Instinct",desc:"Figura coleccionable 20cm PVC alta calidad, pintada a mano, base incluida",priceUSD:18,cost:8,stock:2,status:'available',cat:'Coleccionables',em:'⚡',featured:false,waitlist:[],reviews:[]},
    {id:5,name:"Teclado Mecánico TKL",desc:"Switch Blue táctil, retroiluminación RGB, formato sin numpad, muy compacto",priceUSD:38,cost:20,stock:1,status:'available',cat:'PC Gaming',em:'⌨️',featured:false,waitlist:[],reviews:[
      {id:1,name:"Luis P.",stars:5,comment:"Excelente teclado, lo recomiendo 100%",imgData:null,date:'2025-03-10'}
    ]},
    {id:6,name:"Mouse Gamer RGB 3200DPI",desc:"Sensor óptico de alta precisión, 7 botones programables, iluminación RGB",priceUSD:22,cost:10,stock:4,status:'available',cat:'PC Gaming',em:'🖱️',featured:false,discountPct:0,isNew:true,waitlist:[],reviews:[]},
    {id:7,name:"Silla Gamer ErgoX",desc:"Respaldo reclinable 180°, apoyabrazos ajustables, cojín lumbar incluido",priceUSD:120,cost:75,stock:2,status:'available',cat:'Accesorios',em:'🪑',featured:true,waitlist:[],reviews:[]},
    {id:8,name:"Control Xbox Series",desc:"Control inalámbrico original Microsoft, compatible PC y Xbox, cable USB-C",priceUSD:40,cost:25,stock:3,status:'available',cat:'Consolas',em:'🕹️',featured:false,discountPct:12,isNew:false,waitlist:[],reviews:[]},
    {id:9,name:"Figura Naruto Sage Mode",desc:"Figura coleccionable 22cm, edición limitada, vibrante pintura detallada",priceUSD:20,cost:9,stock:3,status:'available',cat:'Coleccionables',em:'🌀',featured:false,waitlist:[],reviews:[]},
    {id:10,name:"Camiseta Gamer Oversize",desc:"100% algodón premium, diseño exclusivo SharkByte, tallas S a XXL",priceUSD:15,cost:6,stock:10,status:'available',cat:'Ropa Gamer',em:'👕',featured:false,waitlist:[],reviews:[]},
    {id:11,name:"Webcam HD 1080p",desc:"Resolución Full HD, micrófono integrado con cancelación de ruido, plug & play",priceUSD:35,cost:18,stock:2,status:'available',cat:'PC Gaming',em:'📷',featured:false,waitlist:[],reviews:[]},
    {id:12,name:"Headset PS4/PS5 Gold",desc:"Audio 3D inmersivo, micrófono retráctil, compatible PS4/PS5/PC",priceUSD:30,cost:15,stock:0,status:'agotado',cat:'Accesorios',em:'🎧',featured:false,waitlist:[],reviews:[]},
    {id:13,name:"Figura Iron Man Mark 50",desc:"Figura articulada 20cm, escala 1:10, viene con base display incluida",priceUSD:25,cost:11,stock:2,status:'available',cat:'Coleccionables',em:'🦾',featured:false,waitlist:[],reviews:[]},
    {id:14,name:"Adaptador Nintendo Switch",desc:"Dock portátil USB-C, salida HDMI 4K, carga mientras jugás",priceUSD:28,cost:14,stock:1,status:'available',cat:'Consolas',em:'🎮',featured:false,waitlist:[],reviews:[]},
    {id:15,name:"Gorra Snapback Gamer",desc:"Diseño bordado premium, ajuste snapback, talla única",priceUSD:12,cost:5,stock:8,status:'available',cat:'Ropa Gamer',em:'🧢',featured:false,waitlist:[],reviews:[]},
  ],
  orders:[
    {id:1,client:"Carlos M.",phone:"+58412345678",email:"carlos@gmail.com",products:["Control PS5 DualSense"],total:45,payment:"Binance",status:'completado',date:'2025-03-01',tasa:38.5},
    {id:2,client:"María G.",phone:"+58424987654",email:"",products:["Mousepad XL Gamer"],total:12,payment:"Pago Móvil",status:'pendiente',date:'2025-03-08',tasa:38.5},
  ],
  expenses:[
    {id:1,desc:"Compra AliExpress x5",amount:60,currency:'USD',type:'compra',date:'2025-03-01'},
  ],
  clients:[
    {id:1,name:"Carlos M.",phone:"+58412345678",email:"carlos@gmail.com",source:'compra',purchases:2,total:63,lastBuy:'2025-03-01'},
    {id:2,name:"María G.",phone:"+58424987654",email:"",source:'compra',purchases:1,total:12,lastBuy:'2025-03-08'},
  ],
  waitlistContacts:[],
  subscribers:[],
  cfg:{
    tasaBCV:38.5,tasaParalelo:40.2,tasaCLP:950,
    binanceUser:'RoccoGaming',pagoMovil:'04246687613',cedula:'26618867',banco:'Banesco',
    zones:[{name:'Local',price:2},{name:'Caracas',price:5},{name:'Interior',price:8}],
    heroTitle:'SHARKBYTE',
    heroSub:'Los mejores productos geek y gamer de Venezuela 🇻🇪\nEnvíos a todo el país',
    phrases:['🔥 Nuevos productos cada semana','🚚 Envíos rápidos','✅ Calidad garantizada'],
    instaUrl:'https://instagram.com/sharkbyte',
    paymentPhrases:{
      Binance:'💡 Enviá el pago a nuestro usuario y adjuntá el screenshot como comprobante',
      'Pago Móvil':'📱 Realizá el pago móvil y adjuntá la captura de pantalla del recibo',
      Efectivo:'💵 El pago se realiza al momento de la entrega. Indicanos si necesitás vuelto'
    }
  },
  cp:null,cat:'Todos',ctab:'p',selectedPM:null,selectedStar:0,selectedRevProd:null,vuelto:null
};
