import React from 'react';

export default function MetodosPagoBarra() {
  return (
    <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-around">
        
        {/* OPCIÓN 1: TRANSFERENCIA */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-xl text-amber-400 ring-1 ring-amber-500/20">
            🏦
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Transferencia Bancaria</h4>
            <p className="text-[11px] text-slate-400"> Transferencia / QR / Llaves (Verificación inmediata)</p>
          </div>
        </div>

        <div className="hidden h-8 w-px bg-slate-800 sm:block" />

        {/* OPCIÓN 2: CONTRAENTREGA */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-xl text-amber-400 ring-1 ring-amber-500/20">
            💵
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Contra Entrega</h4>
            <p className="text-[11px] text-slate-400">Pagas al recibir (pago por transferencia / QR / Llaves)</p>
          </div>
        </div>

        <div className="hidden h-8 w-px bg-slate-800 sm:block" />

        {/* OPCIÓN 2: COBERTURA */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-xl text-amber-400 ring-1 ring-amber-500/20">
            📍
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Cobertura De Entregas</h4>
            <p className="text-[11px] text-slate-400">Domicilios a barrios cercanos en Suba y San Pedro</p>
            <p className="text-[11px] text-slate-400">Costo del envío: $6.000 pesos.</p>
          </div>
        </div>

      </div>
    </div>
  );
}