import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Escuchar el evento de scroll para mostrar u ocultar el botón
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Función para volver arriba suavemente
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-10 right-6 z-50 flex items-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 ring-1 ring-amber-400 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
        >
            <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            <span>Arriba</span>
        </button>
    );
}