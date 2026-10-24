import React, { useState, useEffect } from 'react';

export default function AgeVerificationModal() {
  const [esMayor, setEsMayor] = useState(true);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Usamos sessionStorage para que el modal aparezca cada vez que se cierre y reabra la pestaña/navegador
    const verificado = sessionStorage.getItem('dr_licor_mayor_edad');
    if (!verificado) {
      setEsMayor(false); 
    }
    setCargando(false);
  }, []);

  const confirmarEdad = () => {
    sessionStorage.setItem('dr_licor_mayor_edad', 'true');
    setEsMayor(true);
  };

  const denegarEdad = () => {
    // Redirigir fuera del sitio si es menor de edad
    window.location.href = 'https://www.google.com';
  };

  if (cargando || esMayor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-amber-500/30 bg-slate-900 p-6 sm:p-8 text-center shadow-2xl shadow-amber-500/10">
        
        {/* LOGO Y ADVERTENCIA */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/10 ring-2 ring-amber-500/40">
          <span className="text-3xl">🔞</span>
        </div>

        <h2 className="text-2xl font-black uppercase tracking-wider text-white">
          Verificación de Edad
        </h2>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Para ingresar al sitio web de <strong className="text-amber-400">Dr. Licor</strong> y consultar nuestro catálogo de bebidas alcohólicas, debes ser mayor de edad.
        </p>

        <p className="mt-2 text-xs text-slate-500 font-medium">
          El exceso de alcohol es perjudicial para la salud. Ley 30 de 1986. Prohíbase el expendio de bebidas embriagantes a menores de edad. Ley 124 de 1994.
        </p>

        {/* BOTONES DE ACCIÓN */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={confirmarEdad}
            className="w-full rounded-2xl bg-amber-500 py-3.5 text-sm font-black text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all active:scale-95"
          >
            Soy mayor de 18 años
          </button>
          
          <button
            onClick={denegarEdad}
            className="w-full rounded-2xl border border-slate-700 bg-slate-800 py-3.5 text-sm font-bold text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
          >
            Soy menor de edad
          </button>
        </div>

      </div>
    </div>
  );
}