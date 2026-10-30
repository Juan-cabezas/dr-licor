import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useCart } from '../context/CartContext';

export default function CheckoutModal({ isOpen, onClose, carrito, totalPrecio, onOpenLegalModal }) {
    
    const { vaciarCarrito } = useCart();
    
    // Estados para los datos del formulario del cliente
    const [formData, setFormData] = useState({
        nombre_completo: '',
        telefono: '',
        email: '',
        direccion_entrega: '',
        metodoPago: 'transferencia',
    });

    // Estado para el checkbox obligatorio de términos y tratamiento de datos
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [enviando, setEnviando] = useState(false);

    if (!isOpen) return null;

    // Función para resetear el formulario a sus valores iniciales vacíos
    const handleResetForm = () => {
        setFormData({
            nombre_completo: '',
            telefono: '',
            email: '',
            direccion_entrega: '',
            metodoPago: 'transferencia',
        });
        setAcceptedTerms(false);
        setEnviando(false);
    };

    // Manejar el cierre del modal limpiando el formulario
    const handleCloseModal = () => {
        handleResetForm();
        onClose();
    };

    // Manejar cambios en los inputs del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Mapeo legible del método de pago para el mensaje de WhatsApp
    const obtenerTextoMetodoPago = (metodo) => {
        switch (metodo) {
            case 'transferencia':
                return 'Transferencia Bancaria (QR / Llaves)';
            case 'contraentrega':
                return 'Pago Contra Entrega (Transferencia)';
            default:
                return 'WhatsApp / Por coordinar';
        }
    };

    // Generar el mensaje estructurado para WhatsApp, guardar en DB y limpiar
    const handleEnviarPedidoWhatsApp = async (e) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert('Debes aceptar los Términos y Condiciones y la Política de Tratamiento de Datos para continuar.');
            return;
        }

        try {
            setEnviando(true);
            const costoEnvio = 6000;
            const totalConEnvio = totalPrecio + costoEnvio;

            // Enviar datos a la Base de Datos mediante la función RPC
            const { data: pedidoId, error: errorRpc } = await supabase.rpc('crear_pedido_completo', {
                p_nombre_completo: formData.nombre_completo,
                p_telefono: formData.telefono,
                p_email: formData.email,
                p_direccion_entrega: formData.direccion_entrega,
                p_metodo_pago: formData.metodoPago,
                p_subtotal: totalPrecio,
                p_costo_domicilio: costoEnvio,
                p_total_pedido: totalConEnvio,
                p_acepta_terminos: acceptedTerms,
                p_acepta_tratamiento_datos: acceptedTerms,
                p_es_mayor_de_edad: acceptedTerms,
                p_items: carrito.map(item => ({
                    id: item.dbId,
                    tipo: item.tipo, // Identifica si es producto o combo
                    cantidad: item.cantidad,
                    precio: item.precio
                }))
            });
            
            if (errorRpc) {
                console.error('Detalle del error de db:', errorRpc);
                throw errorRpc;
            }

            console.log('Pedido guardado con éxito.');

            vaciarCarrito();

            let mensaje = 'Hola Dr. Licor! Quiero realizar el siguiente pedido:\n\n';
            
            // Datos del Cliente
            mensaje += '*DATOS DEL CLIENTE*\n';
            mensaje += `• Nombre: ${formData.nombre_completo}\n`;
            mensaje += `• Teléfono: ${formData.telefono}\n`;
            mensaje += `• Correo: ${formData.email}\n`;
            mensaje += `• Dirección: ${formData.direccion_entrega}\n\n`;

            // Productos del Carrito
            mensaje += '*DETALLE DEL PEDIDO*\n';
            carrito.forEach((item) => {
                mensaje += `• ${item.cantidad}x ${item.nombre} ($${(item.precio * item.cantidad).toLocaleString('es-CO')})\n`;
            });

            mensaje += `\nSubtotal: $${totalPrecio.toLocaleString('es-CO')}`;
            mensaje += `\nDomicilio: $${costoEnvio.toLocaleString('es-CO')}`;
            mensaje += `\nTOTAL A PAGAR: $${totalConEnvio.toLocaleString('es-CO')}\n`;
            mensaje += `\nMétodo de pago: ${obtenerTextoMetodoPago(formData.metodoPago)}`;

            const urlWhatsApp = `https://wa.me/573222524569?text=${encodeURIComponent(mensaje)}`;
            
            // Abrir WhatsApp de forma segura según el dispositivo
            const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            if (esMovil) {
                window.location.href = urlWhatsApp;
            } else {
                window.open(urlWhatsApp, '_blank');
            }

            // Limpiamos el formulario y cerramos el modal
            handleResetForm();
            onClose();

        } catch (error) {
            console.error('Error completo al guardar pedido:', error);
            alert('Hubo un error al guardar tu pedido en la base de datos.');
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-2xl my-8">
                
                {/* CABECERA */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">🚀</span>
                        <h3 className="text-base font-bold text-white">Finaliza tu Pedido</h3>
                    </div>
                    <button
                        onClick={handleCloseModal}
                        className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
                    >
                        ✕
                    </button>
                </div>

                {/* FORMULARIO DE DATOS */}
                <form onSubmit={handleEnviarPedidoWhatsApp} className="mt-4 space-y-4 text-xs">                
                    <div>
                        <label className="block font-semibold text-slate-300 mb-1">Nombre Completo *</label>
                        <input
                            type="text"
                            name="nombre_completo"
                            required
                            value={formData.nombre_completo}
                            onChange={handleChange}
                            placeholder="Ej. Pepito Pérez"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label className="block font-semibold text-slate-300 mb-1">Teléfono / WhatsApp *</label>
                            <input
                                type="tel"
                                name="telefono"
                                required
                                pattern="[0-9]{10}"
                                maxLength={10}
                                inputMode="numeric"
                                title="Ingresa un número de celular de 10 dígitos (ej. 3222524569)"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Ej. 3222524569"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold text-slate-300 mb-1">Correo Electrónico *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="dr.licor.bogota@gmail.com"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold text-slate-300 mb-1">Dirección e Indicaciones de Entrega *</label>
                        <input
                            type="text"
                            name="direccion_entrega"
                            required
                            value={formData.direccion_entrega}
                            onChange={handleChange}
                            placeholder="Ej. Calle 000 # 00-00, Suba (Barrio / Edificio / Torre / Apt)"
                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-white focus:border-amber-500 focus:outline-none"
                        />
                    </div>

                    {/* SELECTOR DE MÉTODO DE PAGO (3 OPCIONES) */}
                    <div className="pt-2 border-t border-slate-800">
                        <label className="block font-semibold text-amber-500 mb-2">Selecciona el Método de Pago:</label>
                        <div className="grid grid-cols-1 gap-2">
                        
                            {/* OPCIÓN 1: TRANSFERENCIA BANCARIA */}
                            <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.metodoPago === 'transferencia' ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'}`}>
                                <input
                                    type="radio"
                                    name="metodoPago"
                                    value="transferencia"
                                    checked={formData.metodoPago === 'transferencia'}
                                    onChange={handleChange}
                                    className="accent-amber-500"
                                />
                                <div>
                                    <p className="font-bold">Transferencia Bancaria Directa</p>
                                    <p className="text-[10px] text-slate-400">Código QR / Llaves / Bancolombia</p>
                                </div>
                            </label>

                            {/* OPCIÓN 2: CONTRA ENTREGA */}
                            <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${formData.metodoPago === 'contraentrega' ? 'border-amber-500 bg-amber-500/10 text-white' : 'border-slate-800 bg-slate-950 text-slate-400'}`}>
                                <input
                                    type="radio"
                                    name="metodoPago"
                                    value="contraentrega"
                                    checked={formData.metodoPago === 'contraentrega'}
                                    onChange={handleChange}
                                    className="accent-amber-500"
                                />
                                <div>
                                    <p className="font-bold">Pago Contra Entrega</p>
                                    <p className="text-[10px] text-slate-400">Transferencia al recibir</p>
                                </div>
                            </label>

                            {/* OPCIÓN 3: PAGO EN LÍNEA CON BOLD (DESHABILITADA) */}
                            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 opacity-50 cursor-not-allowed">
                                <input
                                    type="radio"
                                    name="metodoPago"
                                    value="bold"
                                    disabled
                                    checked={formData.metodoPago === 'bold'}
                                    onChange={handleChange}
                                    className="cursor-not-allowed"
                                />
                                <div className="flex-1 flex items-center justify-between">
                                    <div>
                                        <p className="font-bold text-slate-400">Pago en Línea</p>
                                        <p className="text-[10px] text-slate-500">Tarjeta Débito/Crédito / PSE</p>
                                    </div>
                                    <span className="text-[9px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-full">
                                        Próximamente
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* CHECKBOX LEGAL OBLIGATORIO */}
                    <div className="pt-3 border-t border-slate-800 flex items-start gap-2.5">
                        <input
                            type="checkbox"
                            id="legalAccept"
                            required
                            checked={acceptedTerms}
                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-500 accent-amber-500 cursor-pointer"
                        />
                        <label htmlFor="legalAccept" className="text-[11px] text-slate-400 leading-tight select-none">
                            Confirmo que soy mayor de 18 años y acepto los{' '}
                            <button
                                type="button"
                                onClick={() => onOpenLegalModal('terms')}
                                className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                            >
                                Términos y Condiciones
                            </button>{' '}
                            y la{' '}
                            <button
                                type="button"
                                onClick={() => onOpenLegalModal('privacy')}
                                className="text-amber-400 underline hover:text-amber-300 font-semibold cursor-pointer"
                            >
                                Política de Tratamiento de Datos Personales
                            </button>. *
                        </label>
                    </div>

                    {/* BOTÓN DE ACCIÓN FINAL */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={!acceptedTerms || enviando}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-center text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        >
                            <span>{enviando ? 'Registrando Pedido...' : 'Enviar Pedido'}</span>
                            <span className="text-base">🚀</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}