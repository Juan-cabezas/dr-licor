import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';
import LegalModal from './LegalModal'; // Reutilizamos el modal legal que ya creamos

export default function CartDrawer() {
  const {
    carrito,
    isCartOpen,
    toggleCart,
    disminuirCantidad,
    agregarAlCarrito,
    eliminarDelCarrito,
    totalPrecio,
    totalArticulos,
  } = useCart();

  // Estados para controlar el modal de checkout y los modales legales internos
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState(null); // 'terms' | 'privacy' | null

  if (!isCartOpen) return null;

  // Función para cerrar el carrito haciendo clic fuera del panel (en el fondo oscuro)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleCart();
    }
  };

  return (
    <>
      <div onClick={handleBackdropClick} className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm transition-opacity">
        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="w-screen max-w-md border-l border-slate-800 bg-slate-900 text-white shadow-2xl flex flex-col justify-between">
            
            {/* CABECERA */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛒</span>
                <h2 className="text-lg font-bold">Tu Pedido</h2>
                <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-bold text-amber-400 border border-amber-500/30">
                  {totalArticulos} {totalArticulos === 1 ? 'ítem' : 'ítems'}
                </span>
              </div>
              <button
                onClick={toggleCart}
                className="text-slate-400 hover:text-white transition-colors p-2 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* LISTA DE ITEMS */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {carrito.length === 0 ? (
                <div className="py-20 text-center text-slate-500">
                  <span className="text-4xl block mb-2">🍾</span>
                  <p className="text-sm font-medium">Tu carrito está vacío</p>
                  <p className="text-xs text-slate-600 mt-1">
                    Agrega licores o insumos para armar tu pedido nocturno.
                  </p>
                </div>
              ) : (
                carrito.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/50 p-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="h-12 w-12 rounded-lg object-cover bg-slate-900"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white line-clamp-1">
                          {item.nombre}
                        </h4>
                        <span className="text-xs text-amber-400 font-semibold">
                          ${(item.precio * item.cantidad).toLocaleString('es-CO')}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900">
                        <button
                          onClick={() => disminuirCantidad(item.id)}
                          className="px-2.5 py-1 text-xs text-slate-300 hover:text-amber-400 font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.cantidad}
                        </span>
                        <button
                          onClick={() => agregarAlCarrito(item)}
                          disabled={item.cantidad >= item.stock}
                          className="px-2.5 py-1 text-xs text-slate-300 hover:text-amber-400 font-bold disabled:opacity-30 cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => eliminarDelCarrito(item.id)}
                        className="text-xs text-red-400 hover:text-red-300 p-1 cursor-pointer"
                        title="Eliminar"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* PIE Y BOTÓN PARA ABRIR MODAL DE DATOS */}
            {carrito.length > 0 && (
              <div className="p-6 border-t border-slate-800 bg-slate-950/80 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">Subtotal estimado:</span>
                  <span className="text-xl font-black text-amber-400">
                    ${totalPrecio.toLocaleString('es-CO')}
                  </span>
                </div>

                {/* RECORDATORIO DE PAGOS DENTRO DEL CARRITO */}
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-[11px] text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-200 font-bold">
                    <span>💳</span>
                    <span>Métodos de Pago y envío:</span>
                  </div>
                  <p>• Transferencia bancaria (QR / Llaves) o Pago en línea</p>
                  <p>• El envío a domicilio tiene un costo adicional de $6.000.</p>
                  <p>• Pago contra entrega disponible (solo transferencia)</p>
                </div>

                {/* BOTÓN QUE ABRE EL MODAL DE CHECKOUT */}
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 text-center text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all cursor-pointer"
                >
                  <span>Continuar con el Pedido</span>
                  <span className="text-base">🚀</span>
                </button>

                <p className="text-[10px] text-center text-slate-500">
                  Domicilio rápido en Suba (según cobertura) • Cumplimiento Ley 124 y Ley 1581.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL DE CHECKOUT (DATOS DEL CLIENTE, CORREO Y CHECKBOX LEGAL) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        carrito={carrito}
        totalPrecio={totalPrecio}
        onOpenLegalModal={(docType) => setActiveLegalDoc(docType)}
      />

      {/* MODAL LEGAL REUTILIZABLE (SE ABRE DESDE LOS ENLACES DEL CHECKOUT) */}
      <LegalModal
        docType={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </>
  );
}