export const categorias = [
  'Todos',
  'Combos',
  'Aguardiente',
  'Whisky',
  'Ron',
  'Cerveza',
  'Vodka',
  'Cigarrillos',
  'Insumos'
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
    ...calcularOferta(68000, 9), // 68k con 9% de descuento automático
    presentacion: 'Néctar 750ml + Hielo 3kg + 2 Gatorade',
    imagen: '/Images/productos/combo-nectar.jpg',
    stock: 5,
    unidades: 'combos'
  },
  {
    id: 'cb-02',
    nombre: 'Combo Guaro Antioqueño',
    categoria: 'Combos',
    ...calcularOferta(72000, 10), // 72k con 10% de descuento automático
    presentacion: 'Antioqueño Tapa Azul 750ml + Hielo 3kg + 2 Sodas',
    imagen: '/Images/productos/combo-antioqueno.jpg',
    stock: 8,
    unidades: 'combos'
  },
  {
    id: 'cb-03',
    nombre: 'Combo VIP Buchanan\'s 12',
    categoria: 'Combos',
    ...calcularOferta(165000, 11), // 165k con 11% de descuento automático
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
    ...calcularOferta(48000), // Sin descuento
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/nectar-verde.jpg',
    stock: 10,
    unidades: 'botellas'
  },
  {
    id: 'ag-02',
    nombre: 'Aguardiente Amarillo',
    categoria: 'Aguardiente',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/amarillo-750.jpg',
    stock: 5,
    unidades: 'botellas'
  },
  {
    id: 'ag-03',
    nombre: 'Aguardiente Amarillo',
    categoria: 'Aguardiente',
        ...calcularOferta(48000), // Sin descuento
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/amarillo-375.jpg',
    stock: 5,
    unidades: 'botellas'
  },
  {
    id: 'ag-04',
    nombre: 'Aguardiente Antioqueño Tapa Azul',
    categoria: 'Aguardiente',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/amarillo-manizales.jpg',
    stock: 2, // Stock bajo para probar la etiqueta de alerta
    unidades: 'botellas'
  },

  // --- WHISKY ---
  {
    id: 'wh-01',
    nombre: 'Whisky Buchanan\'s Deluxe 12 Años',
    categoria: 'Whisky',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/buchanans-12.jpg',
    stock: 0,
    unidades: 'botellas'
  },
  {
    id: 'wh-02',
    nombre: 'Whisky Old Parr 12 Años',
    categoria: 'Whisky',
    ...calcularOferta(138000, 0, 150000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/old-parr.jpg',
    stock: 2,
    unidades: 'botellas'
  },

  // --- RON ---
  {
    id: 'rn-01',
    nombre: 'Ron Medellín Añejo 3 Años',
    categoria: 'Ron',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/ron-medellin-3.jpg',
    stock: 15,
    unidades: 'botellas'
  },
  {
    id: 'rn-02',
    nombre: 'Ron Viejo de Caldas 3 Años',
    categoria: 'Ron',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Botella 375 ml',
    imagen: '/Images/productos/caldas-3.jpg',
    stock: 2,
    unidades: 'botellas'
  },

  // --- CERVEZA ---
  {
    id: 'cv-01',
    nombre: 'Sixpack Cerveza Corona Extra',
    categoria: 'Cerveza',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: '6 Latas 355 ml',
    imagen: '/Images/productos/corona-sixpack.jpg',
    stock: 30,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-02',
    nombre: 'Sixpack Club Colombia Dorada',
    categoria: 'Cerveza',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/club-dorada.jpg',
    stock: 25,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-03',
    nombre: 'Sixpack Poker',
    categoria: 'Cerveza',
   ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/Poker-Sixpack.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-04',
    nombre: 'Sixpack Águila',
    categoria: 'Cerveza',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: '6 Latas 330 ml',
    imagen: '/Images/productos/Águila-Sixpack.jpg',
    stock: 32,
    unidades: 'sixpacks'
  },
  {
    id: 'cv-05',
    nombre: 'Sixpack Costeña Original',
    categoria: 'Cerveza',
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
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
    ...calcularOferta(55000, 0, 60000), // Precio actual 55k y anterior 60k -> Calcula el % de descuento solo
    presentacion: 'Lata 330 ml',
    imagen: '/Images/productos/Vodka-Smirnoff.jpg',
    stock: 8,
    unidades: 'Latas'
  },
  {
    id: 'vod-02',
    nombre: 'Vodka Like',
    categoria: 'Vodka',
    precio: 5500,
    precioAnterior: 150000,
    descuento: 8,
    presentacion: 'Botella 750 ml',
    imagen: '/Images/productos/Vodka-Like.jpg',
    stock: 2,
    unidades: 'Latas'
  },

  // --- CIGARRILLOS ---
  {
    id: 'cig-01',
    nombre: 'Mustang Azul',
    categoria: 'Cigarrillos',
    precio: 6500,
    precioAnterior: null,
    descuento: 0,
    presentacion: 'Medio',
    imagen: '/Images/productos/Mustang-Azul-Medio.jpg',
    stock: 20,
    unidades: 'Medios'
  },
  {
    id: 'cig-02',
    nombre: 'Lucky Verde',
    categoria: 'Cigarrillos',
    precio: 7500,
    precioAnterior: 150000,
    descuento: 8,
    presentacion: 'Medio',
    imagen: '/Images/productos/Luke-Verde-Medio.jpg',
    stock: 20,
    unidades: 'Medios'
  },
  {
    id: 'cig-03',
    nombre: 'Encendedor',
    categoria: 'Cigarrillos',
    precio: 3500,
    precioAnterior: 150000,
    descuento: 8,
    presentacion: 'Unidad',
    imagen: '/Images/productos/Encendedores.jpg',
    stock: 25,
    unidades: 'Unidades'
  },

  // --- Hielo Y Otras Bebidas ---
  {
    id: 'ins-01',
    nombre: 'Bolsa de Hielo en Cubos',
    categoria: 'Insumos',
    precio: 8000,
    precioAnterior: null,
    descuento: 0,
    presentacion: 'Bolsa 3 Kg',
    imagen: '/Images/productos/hielo.jpg',
    stock: 50,
    unidades: 'bolsas'
  },
  {
    id: 'ins-02',
    nombre: 'Bebida Energizante Red Bull',
    categoria: 'Insumos',
    ...calcularOferta(48000), // Sin descuento
    presentacion: 'Lata 250 ml',
    imagen: '/Images/productos/redbull.jpg',
    stock: 40,
    unidades: 'latas'
  },
  {
    id: 'ins-03',
    nombre: 'Hidralyte Blueberry/Maracuya/Fresa Kiwi',
    categoria: 'Insumos',
    ...calcularOferta(48000), // Sin descuento
    presentacion: 'Botella 625 ml',
    imagen: '/Images/productos/Hidralyte.jpg',
    stock: 11,
    unidades: 'botellas'
  },
  {
    id: 'ins-04',
    nombre: 'Bretaña',
    categoria: 'Insumos',
    ...calcularOferta(48000), // Sin descuento
    presentacion: 'Botella 400 ml',
    imagen: '/Images/productos/Bretaña.jpg',
    stock: 24,
    unidades: 'botellas'
  },
  {
    id: 'ins-05',
    nombre: 'Gaseosa Coca-Cola',
    categoria: 'Insumos',
    ...calcularOferta(48000), // Sin descuento
    presentacion: 'Botella 400 ml',
    imagen: '/Images/productos/Coca-Cola.jpg',
    stock: 12,
    unidades: 'botellas'
  }
];