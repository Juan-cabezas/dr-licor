import React, { useState } from 'react';
import { LEGAL_DOCUMENTS } from '../data/legalData';

export default function LegalModal({ docType, onClose }) {
    const [viewMode, setViewMode] = useState('summary'); // 'summary' | 'full'

    // Función para cerrar y resetear la vista siempre al resumen
    const handleClose = () => {
        setViewMode('summary'); // Resetea el modo de vista
        onClose();              // Notifica al Footer para ocultar el modal
    };

    if (!docType || !LEGAL_DOCUMENTS[docType]) return null;

    const document = LEGAL_DOCUMENTS[docType];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-2xl">              
                {/* ENCABEZADO */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-base font-bold text-white">{document.title}</h3>
                    <button
                        onClick={handleClose}
                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* CONTENIDO */}
                <div className="my-4 max-h-[60vh] overflow-y-auto pr-2 text-xs leading-relaxed space-y-3">
                    {viewMode === 'summary' ? document.summary : document.fullText}
                </div>

                {/* PIE Y NAVEGACIÓN */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                    {viewMode === 'summary' ? (
                        <button
                            onClick={() => setViewMode('full')}
                            className="text-xs font-semibold text-amber-500 hover:text-amber-400 underline cursor-pointer"
                        >
                            Ver documento completo →
                        </button>
                    ) : (
                        <button
                            onClick={() => setViewMode('summary')}
                            className="text-xs font-semibold text-slate-400 hover:text-white underline cursor-pointer"
                        >
                            ← Volver al resumen
                        </button>
                    )}

                    <button
                        onClick={handleClose}
                        className="rounded-lg bg-amber-500 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                    >
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    );
}