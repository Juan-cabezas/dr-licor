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
    nombre: 'Combo Fiesta Néctar Verde',
    categoria: 'Combos',
    ...calcularOferta(68000, 9),
    presentacion: 'Néctar 750ml + Hielo 3kg + 2 Gatorade',
    imagen: '/Images/productos/combo-nectar.jpg',
    stock: 5,
    unidades: 'combos'
  },
  {
    id: 'cb-02',
    nombre: 'Combo Guaro Antioqueño',
    categoria: 'Combos',
    ...calcularOferta(72000, 10),
    presentacion: 'Antioqueño Tapa Azul 750ml + Hielo 3kg + 2 Sodas',
    imagen: '/Images/productos/combo-antioqueno.jpg',
    stock: 8,
    unidades: 'combos'
  },
  {
    id: 'cb-03',
    nombre: 'Combo VIP Buchanan\'s 12',
    categoria: 'Combos',
    ...calcularOferta(165000, 11),
    presentacion: 'Buchanan\'s 750ml + 4 Red Bull + Hielo 3kg',
    imagen: '/Images/productos/combo-buchanans.jpg',
    stock: 3,
    unidades: 'combos'
  },

  // --- AGUARDIENTE ---
  {
    id: 'ag-01',
    nombre: 'Aguardiente Néctar Verde',
    categoria: 'Aguardiente',
    ...calcularOferta(48000),
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/nectar-verde-375.jpg',
    stock: 10,
    unidades: 'botellas'
  },
  {
    id: 'ag-02',
    nombre: 'Aguardiente Néctar Verde',
    categoria: 'Aguardiente',
    ...calcularOferta(48000),
    presentacion: 'Botella 250 ml',
    imagen: '/Images/productos/nectar-verde-250.jpg',
    stock: 10,
    unidades: 'botellas'
  },
  {
    id: 'ag-03',
    nombre: 'Aguardiente Amarillo',
    categoria: 'Aguardiente',
    ...calcularOferta(55000, 0, 60000),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/amarillo-750.jpg',
    stock: 5,
    unidades: 'botellas'
  },
  {
    id: 'ag-04',
    nombre: 'Aguardiente Amarillo',
    categoria: 'Aguardiente',
    ...calcularOferta(48000),
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/amarillo-375.jpg',
    stock: 5,
    unidades: 'botellas'
  },
  {
    id: 'ag-05',
    nombre: 'Aguardiente Antioqueño Tapa Azul',
    categoria: 'Aguardiente',
    ...calcularOferta(55000, 0, 60000),
    presentacion: 'Botella 250 ml',
    imagen: '/Images/productos/Antioqueño.jpg',
    stock: 4,
    unidades: 'botellas'
  },

  // --- WHISKY ---
  {
    id: 'wh-01',
    nombre: 'Whisky Buchanan\'s Deluxe 12 Años',
    categoria: 'Whisky',
    ...calcularOferta(55000, 0, 60000),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/buchanans-12.jpg',
    stock: 1,
    unidades: 'botellas'
  },
  {
    id: 'wh-02',
    nombre: 'Whisky Old Parr 12 Años',
    categoria: 'Whisky',
    ...calcularOferta(138000, 0, 150000),
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/old-parr.jpg',
    stock: 1,
    unidades: 'botellas'
  },

  // --- RON ---
  {
    id: 'rn-01',
    nombre: 'Ron Medellín Añejo 3 Años',
    categoria: 'Ron',
    ...calcularOferta(55000, 0, 60000),
    presentacion: 'Botella 250 ml',
    imagen: '/Images/productos/ron-medellin.jpg',
    stock: 4,
    unidades: 'botellas'
  },
  {
    id: 'rn-02',
    nombre: 'Ron Viejo de Caldas 3 Años',
    categoria: 'Ron',
    ...calcularOferta(55000, 0, 60000),
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/caldas-375.jpg',
    stock: 2,
    unidades: 'botellas'
  },
  {
    id: 'rn-03',
    nombre: 'Ron Viejo de Caldas 3 Años',
    categoria: 'Ron',
    ...calcularOferta(55000, 0, 60000),
    presentacion: 'Botella 250 ml',
    imagen: '/Images/productos/caldas-250.jpg',
    stock: 4,
    unidades: 'botellas'
  },

  // --- CERVEZA ---
  {
    id: 'cv-01',
    nombre: 'Sixpack Cerveza Corona Extra',
    categoria: 'Cerveza',
    ...calcularOferta(26000),
    presentacion: '6 Latas 269 ml',
    imagen: '/Images/productos/corona-sixpack.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-02',
    nombre: 'Sixpack Club Colombia Dorada',
    categoria: 'Cerveza',
    ...calcularOferta(22000,0,24000),
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/club-dorada.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-03',
    nombre: 'Sixpack Poker',
    categoria: 'Cerveza',
   ...calcularOferta(22000, 0, 24000),
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/Poker-Sixpack.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-04',
    nombre: 'Sixpack Águila',
    categoria: 'Cerveza',
    ...calcularOferta(21000, 0, 23000),
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/Águila-Sixpack.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-05',
    nombre: 'Sixpack Costeña Original',
    categoria: 'Cerveza',
    ...calcularOferta(13000, 0, 14000),
    presentacion: '6 Latas 310 ml',
    imagen: '/Images/productos/Costeña-Original-Sixpack.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },

  // --- VODKA ---
  {
    id: 'vod-01',
    nombre: 'Vodka Smirnoff',
    categoria: 'Vodka',
    ...calcularOferta(6000),
    presentacion: 'Lata 330 ml',
    imagen: '/Images/productos/Vodka-Smirnoff.jpg',
    stock: 7,
    unidades: 'Latas'
  },
  {
    id: 'vod-02',
    nombre: 'Vodka Like',
    categoria: 'Vodka',
    ...calcularOferta(5500),
    presentacion: 'Botella 300 ml',
    imagen: '/Images/productos/Vodka-Like.jpg',
    stock: 24,
    unidades: 'Botella'
  },

  // --- CIGARRILLOS ---
  {
    id: 'cig-01',
    nombre: 'Lucky Verde',
    categoria: 'Cigarrillos',
    ...calcularOferta(7500),
    presentacion: 'Medio',
    imagen: '/Images/productos/Luke-Verde-Medio.jpg',
    stock: 20,
    unidades: 'Medios'
  },
  {
    id: 'cig-02',
    nombre: 'Lucky Strike Alaska',
    categoria: 'Cigarrillos',
    ...calcularOferta(7500),
    presentacion: 'Medio',
    imagen: '/Images/productos/Luke-Alaska-Medio.jpg',
    stock: 20,
    unidades: 'Medios'
  },
  {
    id: 'cig-03',
    nombre: 'Mustang Azul',
    categoria: 'Cigarrillos',
    ...calcularOferta(6500),
    presentacion: 'Medio',
    imagen: '/Images/productos/Mustang-Azul-Medio.jpg',
    stock: 40,
    unidades: 'Medios'
  },
  {
    id: 'cig-04',
    nombre: 'Encendedor',
    categoria: 'Cigarrillos',
   ...calcularOferta(3500),
    presentacion: 'Unidad',
    imagen: '/Images/productos/Encendedores.jpg',
    stock: 25,
    unidades: 'Unidades'
  },

  // --- hidratantes y energizantes ---
  {
    id: 'hid-01',
    nombre: 'Monster',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(9500),
    presentacion: 'Lata 473 ml',
    imagen: '/Images/productos/Monsters.jpg',
    stock: 10,
    unidades: 'latas'
  },
  {
    id: 'hid-02',
    nombre: 'Speed Max',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(2200),
    presentacion: 'Lata 310 ml',
    imagen: '/Images/productos/Speed-Max-310.jpg',
    stock: 24,
    unidades: 'latas'
  },
 {
    id: 'hid-03',
    nombre: 'Speed Max',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(1600),
    presentacion: 'Lata 250 ml',
    imagen: '/Images/productos/Speed-Max-250.jpg',
    stock: 11,
    unidades: 'botellas'
  },
  {
    id: 'hid-04',
    nombre: 'Electrolit Uva/Fresa Kiwi',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(8500),
    presentacion: 'Botella 625 ml',
    imagen: '/Images/productos/Electrolit.jpg',
    stock: 11,
    unidades: 'botellas'
  },
  {
    id: 'hid-05',
    nombre: 'Hidralyte Blueberry/Maracuya/Fresa Kiwi',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(5500),
    presentacion: 'Botella 625 ml',
    imagen: '/Images/productos/Hidralyte.jpg',
    stock: 11,
    unidades: 'botellas'
  },
  {
    id: 'hid-06',
    nombre: 'Gatorade',
    categoria: 'Hidratantes y Energizantes',
    ...calcularOferta(4000),
    presentacion: 'Botella 500 ml',
    imagen: '/Images/productos/Gatorade.jpg',
    stock: 12,
    unidades: 'botellas'
  },

  // --- Hielo Y Otras Bebidas ---
  {
    id: 'ins-01',
    nombre: 'Bolsa de Hielo',
    categoria: 'Otras Bebidas',
    ...calcularOferta(3000),
    presentacion: 'Bolsa 3 Kg',
    imagen: '/Images/productos/hielo.jpg',
    stock: 50,
    unidades: 'bolsas'
  },
  {
    id: 'ins-02',
    nombre: 'Los Cuates',
    categoria: 'Otras Bebidas',
    ...calcularOferta(5000,0,5500),
    presentacion: 'Lata 269 ml',
    imagen: '/Images/productos/Los-Cuates.jpg',
    stock: 15,
    unidades: 'latas'
  },
  {
    id: 'ins-03',
    nombre: 'Flur Loko',
    categoria: 'Otras Bebidas',
    ...calcularOferta(18500,0,20000),
    presentacion: 'Lata 473 ml',
    imagen: '/Images/productos/Flur-Loko.jpg',
    stock: 15,
    unidades: 'latas'
  },
  {
    id: 'ins-04',
    nombre: 'Bretaña',
    categoria: 'Otras Bebidas',
    ...calcularOferta(2500),
    presentacion: 'Botella 400 ml',
    imagen: '/Images/productos/Bretaña.jpg',
    stock: 24,
    unidades: 'botellas'
  },
  {
    id: 'ins-05',
    nombre: 'Gaseosa Coca-Cola',
    categoria: 'Otras Bebidas',
    ...calcularOferta(4000),
    presentacion: 'Botella 400 ml',
    imagen: '/Images/productos/Coca-Cola.jpg',
    stock: 34,
    unidades: 'botellas'
  }
];
