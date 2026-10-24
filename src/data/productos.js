export const categorias = [
  'Todos',
  'Combos',
  'Aguardiente',
  'Whisky',
  'Ron',
  'Cerveza',
  'Vodka',
  'Cigarrillos',
  'Hidratantes y Energizantes',
  'Otras Bebidas'
];

// Función auxiliar para calcular automáticamente ofertas y porcentajes
const calcularOferta = (precioActual, descuentoPorcentaje = 0, precioOriginal = null) => {
  if (descuentoPorcentaje > 0) {
    const anterior = Math.round(precioActual / (1 - descuentoPorcentaje / 100));
    return { precio: precioActual, precioAnterior: anterior, descuento: descuentoPorcentaje };
  } else if (precioOriginal && precioOriginal > precioActual) {
    const desc = Math.round(((precioOriginal - precioActual) / precioOriginal) * 100);
    return { precio: precioActual, precioAnterior: precioOriginal, descuento: desc };
  }
  return { precio: precioActual, precioAnterior: null, descuento: 0 };
};

export const productos = [
  // --- COMBOS ---
  {
    id: 'cb-01',
    nombre: 'Combo VIP Buchanan\'s 12',
    categoria: 'Combos',
    ...calcularOferta(200000),
    presentacion: 'Buchanan\'s 750ml + 2 monsters + Hielo',
    imagen: '/Images/productos/combo-buchanans.webp',
    stock: 1,
    unidades: 'combos'
  },
  {
    id: 'cb-02',
    nombre: 'Combo Fiesta Néctar Verde',
    categoria: 'Combos',
    ...calcularOferta(34000),
    presentacion: 'Media de nectar (375 ml) + Hielo + 2 Gatorade',
    imagen: '/Images/productos/combo-nectar.webp',
    stock: 10,
    unidades: 'combos'
  }, 
  {
    id: 'cb-03',
    nombre: 'Combo Desenguayabe (3-4 personas)',
    categoria: 'Combos',
    ...calcularOferta(74900,10),
    presentacion: '1 Aguardiente Amarillo 750 ml + Hielo + 2 Speed Max 310 ml + 1 Maní Con Sal + 4 Bon Bon Bum',
    imagen: '/Images/productos/Combo-Desenguayabe.webp',
    stock: 5,
    unidades: 'combos'
  },
  {
    id: 'cb-04',
    nombre: 'Combo Guaro Antioqueño',
    categoria: 'Combos',
    ...calcularOferta(29000),
    presentacion: '1/4 Antioqueño Azul (260 ml) + Hielo + 2 Sodas + mani',
    imagen: '/Images/productos/combo-antioqueno.webp',
    stock: 4,
    unidades: 'combos'
  },
  {
    id: 'cb-05',
    nombre: 'Combo Cervezero',
    categoria: 'Combos',
    ...calcularOferta(54900),
    presentacion: '1 Sixpack Cerveza Corona Extra (Lata) + 1 Sixpack Club Colombia Dorada o Póker + 2 Paquetes de Maní Con Sal + 4 Bon Bon Bum',
    imagen: '/Images/productos/combo-cerveza.webp',
    stock: 12,
    unidades: 'combos'
  },

  // --- AGUARDIENTE ---
  {
    id: 'ag-01',
    nombre: 'Aguardiente Amarillo',
    categoria: 'Aguardiente',
    ...calcularOferta(58000),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/amarillo-750.webp',
    stock: 5,
    unidades: 'botellas'
  },
  {
    id: 'ag-02',
    nombre: 'Aguardiente Amarillo',
    categoria: 'Aguardiente',
    ...calcularOferta(33000),
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/amarillo-375.webp',
    stock: 5,
    unidades: 'botellas'
  },
  {
    id: 'ag-03',
    nombre: 'Aguardiente Néctar Verde',
    categoria: 'Aguardiente',
    ...calcularOferta(26000,0,28000),
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/nectar-verde-375.webp',
    stock: 10,
    unidades: 'botellas'
  },
  {
    id: 'ag-04',
    nombre: 'Aguardiente Néctar Verde',
    categoria: 'Aguardiente',
    ...calcularOferta(16000),
    presentacion: 'Cartón 250 ml',
    imagen: '/Images/productos/nectar-verde-250.webp',
    stock: 10,
    unidades: 'cartones'
  },
  {
    id: 'ag-05',
    nombre: 'Aguardiente Antioqueño Azul',
    categoria: 'Aguardiente',
    ...calcularOferta(21000),
    presentacion: 'Cartón 260 ml',
    imagen: '/Images/productos/Antioqueño.webp',
    stock: 4,
    unidades: 'cartones'
  },

  // --- WHISKY ---
  {
    id: 'wh-01',
    nombre: 'Whisky Buchanan\'s Deluxe 12 Años',
    categoria: 'Whisky',
    ...calcularOferta(180000),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/buchanans-12.webp',
    stock: 1,
    unidades: 'botellas'
  },
  {
    id: 'wh-02',
    nombre: 'Whisky Old Parr 12 Años',
    categoria: 'Whisky',
    ...calcularOferta(160000),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/old-parr.webp',
    stock: 1,
    unidades: 'botellas'
  },

  // --- RON ---
  {
    id: 'rn-01',
    nombre: 'Ron Viejo de Caldas',
    categoria: 'Ron',
    ...calcularOferta(33000),
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/caldas-375.webp',
    stock: 2,
    unidades: 'botellas'
  },
  {
    id: 'rn-02',
    nombre: 'Ron Viejo de Caldas',
    categoria: 'Ron',
    ...calcularOferta(21000),
    presentacion: 'Cartón 250 ml',
    imagen: '/Images/productos/caldas-250.webp',
    stock: 4,
    unidades: 'cartones'
  },
  {
    id: 'rn-03',
    nombre: 'Ron Medellín Añejo 3 Años',
    categoria: 'Ron',
    ...calcularOferta(19000),
    presentacion: 'Cartón 260 ml',
    imagen: '/Images/productos/ron-medellin.webp',
    stock: 4,
    unidades: 'cartones'
  },

  // --- CERVEZA ---
  {
    id: 'cv-01',
    nombre: 'Sixpack Corona Extra',
    categoria: 'Cerveza',
    ...calcularOferta(26000),
    presentacion: '6 Latas 269 ml',
    imagen: '/Images/productos/corona-sixpack.webp',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-02',
    nombre: 'Sixpack Club Colombia Dorada',
    categoria: 'Cerveza',
    ...calcularOferta(22000,0,24000),
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/club-dorada.webp',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-03',
    nombre: 'Sixpack Poker',
    categoria: 'Cerveza',
    ...calcularOferta(22000, 0, 24000),
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/Poker-Sixpack.webp',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-04',
    nombre: 'Sixpack Águila',
    categoria: 'Cerveza',
    ...calcularOferta(21000, 0, 23000),
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/Águila-Sixpack.webp',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-05',
    nombre: 'Sixpack Costeña Original',
    categoria: 'Cerveza',
    ...calcularOferta(13000, 0, 14000),
    presentacion: '6 Latas 310 ml',
    imagen: '/Images/productos/Costeña-Original-Sixpack.webp',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-06',
    nombre: 'Sixpack Heineken',
    categoria: 'Cerveza',
    ...calcularOferta(0),
    presentacion: '6 Latas 269 ml',
    imagen: '/Images/productos/Heineken-Sixpack.webp',
    stock: 0,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-07',
    nombre: 'Sixpack Budweiser',
    categoria: 'Cerveza',
    ...calcularOferta(0),
    presentacion: '6 Latas 269 ml',
    imagen: '/Images/productos/Budweiser-Sixpack.webp',
    stock: 0,
    unidades: 'sixpacks'
  },

  // --- VODKA ---
  {
    id: 'vod-01',
    nombre: 'Vodka Smirnoff',
    categoria: 'Vodka',
    ...calcularOferta(6000),
    presentacion: 'Lata 250 ml',
    imagen: '/Images/productos/Vodka-Smirnoff.webp',
    stock: 7,
    unidades: 'latas'
  },
  {
    id: 'vod-02',
    nombre: 'Vodka Like Citrus',
    categoria: 'Vodka',
    ...calcularOferta(5500),
    presentacion: 'Botella 300 ml',
    imagen: '/Images/productos/Vodka-Like.webp',
    stock: 24,
    unidades: 'botellas'
  },
{
    id: 'vod-03',
    nombre: 'Vodka Smirnoff Tamarindo',
    categoria: 'Vodka',
    ...calcularOferta(0),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/Vodka-Smirnoff-Tamarindo.webp',
    stock: 0,
    unidades: 'botellas'
  },

  // --- CIGARRILLOS ---
  {
    id: 'cig-01',
    nombre: 'Lucky Strike Verde',
    categoria: 'Cigarrillos',
    ...calcularOferta(7500),
    presentacion: 'Medio',
    imagen: '/Images/productos/Lucky-Verde-Medio.webp',
    stock: 20,
    unidades: 'medios'
  },
  {
    id: 'cig-02',
    nombre: 'Lucky Strike Alaska',
    categoria: 'Cigarrillos',
    ...calcularOferta(7500),
    presentacion: 'Medio',
    imagen: '/Images/productos/Lucky-Alaska-Medio.webp',
    stock: 20,
    unidades: 'medios'
  },
  {
    id: 'cig-03',
    nombre: 'Mustang Azul',
    categoria: 'Cigarrillos',
    ...calcularOferta(6500),
    presentacion: 'Medio',
    imagen: '/Images/productos/Mustang-Azul-Medio.webp',
    stock: 40,
    unidades: 'medios'
  },
  {
    id: 'cig-04',
    nombre: 'Encendedor Clipper',
    categoria: 'Cigarrillos',
    ...calcularOferta(0),
    presentacion: 'Unidad',
    imagen: '/Images/productos/Encendedor-Clipper.webp',
    stock: 0,
    unidades: 'unidades'
  },
  {
    id: 'cig-05',
    nombre: 'Encendedor',
    categoria: 'Cigarrillos',
    ...calcularOferta(3500),
    presentacion: 'Unidad',
    imagen: '/Images/productos/Encendedores.webp',
    stock: 25,
    unidades: 'unidades'
  },

  // --- Hidratantes y Energizantes ---
  {
    id: 'hid-01',
    nombre: 'Monster',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(9500),
    presentacion: 'Lata 473 ml',
    imagen: '/Images/productos/Monsters.webp',
    stock: 10,
    unidades: 'latas'
  },
  {
    id: 'hid-02',
    nombre: 'Speed Max',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(2500),
    presentacion: 'Lata 310 ml',
    imagen: '/Images/productos/Speed-Max-310.webp',
    stock: 24,
    unidades: 'latas'
  },
  {
    id: 'hid-03',
    nombre: 'Speed Max',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(1800),
    presentacion: 'Botella 250 ml',
    imagen: '/Images/productos/Speed-Max-250.webp',
    stock: 11,
    unidades: 'botellas'
  },
  {
    id: 'hid-04',
    nombre: 'Electrolit Uva/Fresa Kiwi',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(8500),
    presentacion: 'Botella 625 ml',
    imagen: '/Images/productos/Electrolit.webp',
    stock: 6,
    unidades: 'botellas'
  },
  {
    id: 'hid-05',
    nombre: 'Hidralyte Blueberry/Maracuya/Fresa Kiwi',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(5500),
    presentacion: 'Botella 640 ml',
    imagen: '/Images/productos/Hidralyte.webp',
    stock: 11,
    unidades: 'botellas'
  },
  {
    id: 'hid-06',
    nombre: 'Gatorade',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(4000),
    presentacion: 'Botella 500 ml',
    imagen: '/Images/productos/Gatorade.webp',
    stock: 12,
    unidades: 'botellas'
  },

  // --- Otras Bebidas ---
  {
    id: 'Otr-01',
    nombre: 'Los Cuates',
    categoria: 'Otras Bebidas',
    ...calcularOferta(5000,0,5500),
    presentacion: 'Lata 269 ml',
    imagen: '/Images/productos/Los-Cuates.webp',
    stock: 15,
    unidades: 'latas'
  },
  {
    id: 'Otr-02',
    nombre: 'Four Loko',
    categoria: 'Otras Bebidas',
    ...calcularOferta(18500,0,20000),
    presentacion: 'Lata 473 ml',
    imagen: '/Images/productos/Four-Loko.webp',
    stock: 9,
    unidades: 'latas'
  },
  {
    id: 'Otr-03',
    nombre: 'Bretaña',
    categoria: 'Otras Bebidas',
    ...calcularOferta(2500),
    presentacion: 'Botella 300 ml',
    imagen: '/Images/productos/Bretaña.webp',
    stock: 24,
    unidades: 'botellas'
  },
  {
    id: 'Otr-04',
    nombre: 'Gaseosa Coca-Cola',
    categoria: 'Otras Bebidas',
    ...calcularOferta(4000),
    presentacion: 'Botella 400 ml',
    imagen: '/Images/productos/Coca-Cola.webp',
    stock: 34,
    unidades: 'botellas'
  }
];
