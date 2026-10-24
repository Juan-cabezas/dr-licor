import React, { useState } from 'react';
import { productos, categorias } from '../data/productos';
import { useCart } from '../context/CartContext';
import MetodosPago from '../components/MetodosPago';

export default function Productos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const { agregarAlCarrito } = useCart();

  const productosFiltrados = categoriaSeleccionada === 'Todos'
    ? productos
    : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <div className="min-h-screen bg-slate-950 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* SECCIÓN DE MÉTODOS DE PAGO */}
        <MetodosPago />

        {/* ENCABEZADO Y SELECTOR DE CATEGORÍAS */}
        <div className="text-center max-w-3xl mx-auto border-b border-slate-800/80 pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Dr. Licor
          </span>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-5xl">
            Catálogo de Productos
          </h1>
          <p className="mt-3 text-slate-400 text-sm">
            Selecciona los licores que deseas para agregarlos a tu pedido.
          </p>
          
          {/* BARRA SUPERIOR DE CATEGORÍAS */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {categorias.map((cat) => {
              const estaActiva = categoriaSeleccionada === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoriaSeleccionada(cat)}
                  className={`rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 border ${
                    estaActiva
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ÁREA PRINCIPAL DE PRODUCTOS */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
              Categoría: <span className="text-amber-400">{categoriaSeleccionada}</span>
            </h2>
            <span className="text-xs text-slate-500">
              {productosFiltrados.length} {productosFiltrados.length === 1 ? 'producto' : 'productos'}
            </span>
          </div>

          {/* GRILLA DE TARJETAS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => {
                const enStock = producto.stock > 0;
                const stockBajo = producto.stock > 0 && producto.stock <= 3;
                const tieneDescuento = producto.descuento && producto.descuento > 0;

                return (
                  <div
                    key={producto.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition-all hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5"
                  >
                    <div>
                      {/* IMAGEN Y ETIQUETAS */}
                      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-950/50 flex items-center justify-center">
                        <img
                          src={producto.imagen}
                          alt={producto.nombre}
                          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                            !enStock ? 'opacity-40 grayscale' : ''
                          }`}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x300/0f172a/f59e0b?text=Dr.+Licor';
                          }}
                        />

                        {/* BADGE DE DESCUENTO */}
                        {tieneDescuento ? (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="rounded-md bg-rose-600 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                              -{producto.descuento}% OFF
                            </span>
                          </div>
                        ) : null}

                        {/* BADGE DE STOCK */}
                        <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                          {!enStock ? (
                            <span className="rounded-md bg-red-500/90 px-2 py-1 text-[10px] font-extrabold text-white uppercase backdrop-blur-md">
                              Agotado
                            </span>
                          ) : stockBajo ? (
                            <span className="rounded-md bg-amber-500 px-2 py-1 text-[10px] font-extrabold text-slate-950 uppercase shadow-md animate-pulse">
                              ¡Últimas {producto.stock} {producto.unidades}!
                            </span>
                          ) : (
                            <span className="rounded-md bg-slate-900/80 border border-slate-700/80 px-2 py-1 text-[10px] font-bold text-slate-300 backdrop-blur-md">
                              {producto.stock} {producto.unidades} disp.
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                          {producto.presentacion}
                        </span>
                        <h3 className="mt-1 text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {producto.nombre}
                        </h3>
                      </div>
                    </div>

                    {/* PRECIOS Y ACCIÓN */}
                    <div className="mt-6 border-t border-slate-800/80 pt-4 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-slate-500 font-medium">Precio</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-black text-white">
                            ${producto.precio.toLocaleString('es-CO')}
                          </span>
                          {producto.precioAnterior && (
                            <span className="text-xs text-slate-500 line-through">
                              ${producto.precioAnterior.toLocaleString('es-CO')}
                            </span>
                          )}
                        </div>
                      </div>

                      {enStock ? (
                        <button
                          onClick={() => agregarAlCarrito(producto)}
                          className="rounded-xl bg-amber-500 px-3.5 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-400 shadow-md shadow-amber-500/10 active:scale-95"
                        >
                          + Agregar
                        </button>
                      ) : (
                        <button
                          disabled
                          className="rounded-xl bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-500 cursor-not-allowed"
                        >
                          Agotado
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center text-slate-500 bg-slate-900/30 rounded-2xl border border-slate-800/50">
                No hay productos en esta categoría por el momento.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}