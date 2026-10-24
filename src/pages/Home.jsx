import { Routes, Route, Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

export default function Home() {
    const [contacto, setContacto] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setContacto({
            ...contacto,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Texto para WhatsApp
        const mensajeWA = `Hola Dr. Licor, mi nombre es ${contacto.nombre}, y mi correo electrónico es ${contacto.correo}.\n\n*Consulta / Cotización:\n${contacto.mensaje}`;
        const url = `https://wa.me/573222524569?text=${encodeURIComponent(mensajeWA)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="pt-20">
            {/* HERO SECTION */}
            <header className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-between overflow-hidden">
                {/* Video de fondo con Overlay Oscuro */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover z-0"
                >
                    <source src="/Images/bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/60 to-slate-950 z-0" />
                    {/* HERO CONTENT */}
                    <div id="inicio" className="relative z-10 mx-auto my-auto max-w-4xl px-6 py-20 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                            La Dosis Perfecta Para <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
                                Tu Día A Día
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
                            Atención de emergencias nocturnas y abastecimiento estratégico en Suba Bogotá.
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4">
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="https://wa.me/573222524569?text=Hola%20Dr.%20Licor,%20ya%20sé%20lo%20que%20quiero%20pedir.%20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-amber-500 px-8 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-400 shadow-lg shadow-amber-500/20"
                                >
                                    Hacer Pedido
                                </a>
                                <Link
                                    to="/productos"
                                    className="rounded-full bg-slate-900/80 px-8 py-3.5 text-sm font-semibold text-white ring-1 ring-slate-700 backdrop-blur-md transition hover:bg-slate-800"
                                    >
                                    Ver Catálogo
                                </Link>
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 bg-slate-900/80 px-4 py-1.5 rounded-full border border-slate-800">
                                ¿Ya sabes lo que quieres pedir o prefieres explorar?
                            </span>
                        </div>
                    </div>
                <div className="relative z-10 pb-6 text-center text-xs text-slate-500">
                    Desplaza para explorar
                </div>
            </header>

            {/* NOSOTROS Y PROMESA DE VALOR */}
            <section id="nosotros" className="py-24 border-t border-slate-900 bg-slate-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">           
                    {/* Bloque 1: Nosotros */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Dark Store Modelo</span>
                            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Sobre Nosotros</h2>
                            <div className="mt-3 h-1 w-20 bg-amber-500 rounded-full" />
                            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                                <strong className="text-white">Dr. Licor</strong> es una distribuidora de licores y bebidas que opera bajo el modelo de bodega a puerta cerrada, especializada en la atención y venta nocturna de bebidas para el consumidor final y en el abastecimiento estratégico para establecimientos nocturnos, bares y cigarrerías.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                            <img src="/Images/right.webp" alt="Bodega Dr. Licor" className="h-96 w-full object-cover" />
                        </div>
                    </div>

                    {/* Bloque 2: Promesa de Valor */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="order-last lg:order-first overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                            <img src="/Images/right_2.webp" alt="Atención Nocturna" className="h-96 w-full object-cover" />
                        </div>
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Eficiencia Sin Esperas</span>
                            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Nuestra Promesa De Valor</h2>
                            <div className="mt-3 h-1 w-20 bg-amber-500 rounded-full" />
                            <p className="mt-6 text-slate-300">
                                Sabemos que la noche no da espera y que quedarse sin inventario cuesta dinero y clientes. En Dr. Licor formulamos la solución:
                            </p>
                            
                            <div className="mt-6 space-y-4">
                                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                                    <h3 className="font-bold text-amber-400">Para el Consumidor:</h3>
                                    <p className="mt-1 text-sm text-slate-300">
                                        Domicilios ultrarrápidos de combos, hielo, mezcladores y licores 100% estampillados y legales, directo a tu puerta cuando los demás ya cerraron.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                                    <h3 className="font-bold text-amber-400">Para los Negocios:</h3>
                                    <p className="mt-1 text-sm text-slate-300">
                                        Reabastecimiento de emergencia en horas pico, pedidos sin trámites excesivos y entregas fraccionadas para mantener tu barra siempre activa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NUESTROS PILARES */}
            <section id="pilares" className="py-24 bg-slate-900/50 border-y border-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">Nuestros Pilares</h2>
                        <div className="mx-auto mt-3 h-1 w-20 bg-amber-500 rounded-full" />
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:border-amber-500/50">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xl">
                                ⚡
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">Atención Inmediata</h3>
                            <p className="mt-3 text-sm text-slate-400">
                                Respuesta en minutos con uno de nuestros asesores directamente vía WhatsApp.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:border-amber-500/50">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xl">
                                🏷️
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">Garantía De Legalidad</h3>
                            <p className="mt-3 text-sm text-slate-400">
                                Todo nuestro portafolio cuenta con factura legal y estampillas departamentales al día.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition hover:border-amber-500/50">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xl">
                                ❄️
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-white">Solución Integral</h3>
                            <p className="mt-3 text-sm text-slate-400">
                                Te entregamos el pedido de cerveza, licores, el hielo y/o el mezclador en un solo envío express.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMULARIO Y SEDE */}
            <section id="contacto" className="py-20 bg-slate-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">                
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">                
                        {/* COLUMNA 1: NUESTRA SEDE */}
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">Nuestra Sede</h2>
                                <div className="mt-2.5 h-1 w-16 bg-amber-500 rounded-full" />                    
                                <p className="mt-6 text-sm text-slate-300 leading-relaxed">
                                    Operamos en la ciudad de <strong>Bogotá D.C.</strong>, principalmente en la localidad de <strong>Suba (San Pedro)</strong>. Realizamos domicilios a barrios cercanos para garantizar entregas en el menor tiempo posible y asegurar la calidad de las bebidas frías e insumos.
                                </p>
                            </div>
                            <div className="overflow-hidden rounded-2xl">
                                <img 
                                    src="/Images/t2.webp" 
                                    alt="Atención Nocturna - Nuestra Sede" 
                                    className="w-full h-48 sm:h-56 object-cover object-top rounded-2xl" 
                                />
                            </div>
                        </div>
                        {/* COLUMNA 2: ESCRÍBENOS (FORMULARIO) */}
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">Escríbenos</h2>
                                <div className="mt-2.5 h-1 w-16 bg-amber-500 rounded-full" />
                                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            id="nombre"
                                            value={contacto.nombre}
                                            onChange={handleChange}
                                            required
                                            placeholder="Nombre completo"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            id="correo"
                                            value={contacto.correo}
                                            onChange={handleChange}
                                            required
                                            placeholder="Correo electrónico"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            id="mensaje"
                                            rows={4}
                                            value={contacto.mensaje}
                                            onChange={handleChange}
                                            required
                                            placeholder="Escribe aquí los productos que necesitas o cualquier consulta sobre el servicio y/o cotizaciones..."
                                            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3.5 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-amber-500 py-3.5 text-center font-bold text-slate-950 transition hover:bg-amber-400 active:scale-[0.99] text-sm"
                                        >   
                                        Enviar Consulta 
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}