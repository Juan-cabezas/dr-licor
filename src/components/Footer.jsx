import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LegalModal from './LegalModal';

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null); // 'terms' | 'privacy' | null

    return (
        <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400">
            <div className="mx-auto max-w-7xl px-6 lg:px-8"> 
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* COLUMNA 1: MARCA Y DESCRIPCIÓN */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <Link to="/" className="inline-flex items-center gap-2">
                                <span className="text-3xl font-black uppercase tracking-wider text-white">
                                    Dr. <span className="text-amber-500">Licor</span>
                                </span>
                            </Link>
                            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                                Soluciones nocturnas en bebidas y licores. Entregas rápidas directas a tu puerta en Bogotá.
                            </p>
                        </div>
                        <p className="mt-4 text-[11px] text-slate-600 sm:mt-0">
                            © {new Date().getFullYear()} Dr. Licor. Todos los derechos reservados.
                        </p>
                    </div>

                    {/* COLUMNA 2: DOMICILIOS & COBERTURA */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                            Domicilios
                        </h3>
                        <ul className="mt-4 space-y-2 text-xs text-slate-400">
                            <li>Tiempo aprox: 30 minutos.</li>
                            <li>Cobertura: Suba San Pedro y barrios cercanos.</li>
                            <li>Localidad de Suba, Bogotá D.C.</li>
                        </ul>
                    </div>

                    {/* COLUMNA 3: HORARIOS Y ATENCIÓN */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                            Horarios y Atención
                        </h3>
                        <ul className="mt-4 space-y-2 text-xs text-slate-400">
                            <li>Todos los días hasta la 01:00 AM</li>
                            <li className="pt-1">
                                • WhatsApp:{' '}
                                <a
                                    href="https://wa.me/573222524569?text=Hola%20Dr.%20Licor,%20tengo%20una%20consulta..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-amber-400 hover:underline"
                                >
                                    +57 322 252 4569
                                </a>
                            </li>
                            <li>Pagos: Transferencia / QR / Llaves / Enlace Web</li>
                        </ul>
                    </div>

                    {/* COLUMNA 4: NAVEGACIÓN Y LEGALES */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500">
                            Enlaces Rápidos
                        </h3>
                        <ul className="mt-4 space-y-2 text-xs text-slate-400">
                            <li>
                                <Link to="/" className="hover:text-amber-400 transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveModal('terms')}
                                    className="text-left hover:text-amber-400 transition-colors cursor-pointer"
                                >
                                    Términos y Condiciones
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setActiveModal('privacy')}
                                    className="text-left hover:text-amber-400 transition-colors cursor-pointer"
                                >
                                    Tratamiento de Datos Personales
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ENLACES LEGALES & LEYES */}
                <div className="mt-10 border-t border-slate-900/80 pt-6 text-center text-[11px] text-slate-500 space-y-1">
                    <p>
                        El exceso de alcohol es perjudicial para la salud.{' '}
                        <a
                            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2774"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 underline decoration-slate-700 underline-offset-2 hover:text-amber-400 transition-colors"
                        >
                            Ley 30 de 1986.
                        </a>
                    </p>
                    <p>
                        Prohíbase el expendio de bebidas embriagantes a menores de edad.{' '}
                        <a
                            href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=291"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 underline decoration-slate-700 underline-offset-2 hover:text-amber-400 transition-colors"
                        >
                            Ley 124 de 1994.
                        </a>
                    </p>
                </div>
            </div>

            {/* COMPONENTE MODAL REUTILIZABLE */}
            <LegalModal docType={activeModal} onClose={() => setActiveModal(null)} />
        </footer>
    );
}