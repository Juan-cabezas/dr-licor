import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartFloatButton() {
  const { totalArticulos, toggleCart } = useCart();

  // Si no hay artículos, el botón permanece completamente oculto
  if (totalArticulos === 0) return null;

  return (
    <div className="fixed bottom-25 right-6 z-40 animate-bounce-short">
      <button
        onClick={toggleCart}
        className="flex items-center gap-3 rounded-2xl bg-amber-500 px-4 py-3 text-slate-950 font-black shadow-xl shadow-amber-500/30 hover:bg-amber-400 transition-all border border-amber-300 active:scale-95"
        aria-label="Ver carrito de compras"
      >
        <span className="text-xl">🛒</span>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-wider text-slate-900 font-bold">
            Tu Pedido
          </span>
          <span className="text-sm font-extrabold">
            {totalArticulos} {totalArticulos === 1 ? 'ítem' : 'ítems'}
          </span>
        </div>
      </button>
    </div>
  );
}