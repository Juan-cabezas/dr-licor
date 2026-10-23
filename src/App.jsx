import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ScrollToTop from './components/ScrollToTop';
import CartFloatButton from './components/CartFloatButton';
import CartDrawer from './components/CartDrawer';
import AgeVerificationModal from './components/AgeVerificationModal'; // Importamos la verificación de edad
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer'; // Importamos el Footer Global

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enServicio, setEnServicio] = useState(true); // Estado para controlar si está abierto o cerrado
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-amber-500 selection:text-slate-950">
        
        {/* VERIFICACIÓN DE EDAD (Modal que bloquea si no se ha confirmado) */}
        <AgeVerificationModal />
        
        {/* NAVBAR GLOBAL (Conservado exactamente como lo tenías) */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            {/* Logo, Nombre y Badge de Estado */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/" onClick={closeMenu} className="flex items-center gap-2 sm:gap-3 shrink-0">
                
                {/* CONTENEDOR RECTANGULAR DEL LOGO */}
                <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-xl border border-amber-500/40 bg-slate-900/90 p-0.5 sm:p-1 shadow-sm transition-transform hover:scale-105">
                  <img
                    src="/Images/dr-licor-logo.svg"
                    alt="Dr. Licor Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* NOMBRE DE LA MARCA */}
                <span className="text-lg sm:text-2xl font-black uppercase tracking-wider text-white">
                  Dr. <span className="text-amber-500">Licor</span>
                </span>
              </Link>

              {/* BADGE DE ESTADO (En Servicio / Fuera de Servicio) */}
              {enServicio ? (
                <span className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>En Servicio</span>
                </span>
              ) : (
                <span className="ml-1 sm:ml-2 inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-rose-400 ring-1 ring-inset ring-rose-500/20">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  <span>Cerrado</span>
                </span>
              )}
            </div>

            {/* Menú Desktop */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-slate-300 text-sm">
              <li>
                <Link
                  to="/"
                  className={`transition ${location.pathname === '/' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/productos"
                  className={`transition ${location.pathname === '/productos' ? 'text-amber-400 font-bold' : 'hover:text-amber-400'}`}
                >
                  Productos
                </Link>
              </li>
              <li>
                <a href="/#nosotros" className="transition hover:text-amber-400">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/#pilares" className="transition hover:text-amber-400">
                  Pilares
                </a>
              </li>
              <li>
                <a href="/#contacto" className="transition hover:text-amber-400">
                  Contacto
                </a>
              </li>
            </ul>

            {/* Botón Menú Móvil */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white"
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desplegable Móvil */}
          {menuOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
              <Link to="/" onClick={closeMenu} className="block text-slate-200 hover:text-amber-400">
                Inicio
              </Link>
              <Link to="/productos" onClick={closeMenu} className="block text-slate-200 hover:text-amber-400">
                Productos
              </Link>
              <a href="/#nosotros" onClick={closeMenu} className="block text-slate-200 hover:text-amber-400">
                Nosotros
              </a>
              <a href="/#pilares" onClick={closeMenu} className="block text-slate-200 hover:text-amber-400">
                Pilares
              </a>
              <a href="/#contacto" onClick={closeMenu} className="block text-slate-200 hover:text-amber-400">
                Contacto
              </a>
            </div>
          )}
        </nav>

        {/* RUTAS */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>

        {/* FOOTER GLOBAL (Aparecerá en todas las páginas) */}
        <Footer />

        {/* COMPONENTES FLOTANTES */}
        <CartDrawer />
        <CartFloatButton /> {/* Aparece solo cuando hay productos, ubicado arriba del scroll */}
        <ScrollToTop />     {/* Tu botón original en la esquina inferior derecha */}
      </div>
    </CartProvider>
  );
}