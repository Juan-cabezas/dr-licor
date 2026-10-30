export const calcularOferta = (precioActual, descuentoPorcentaje = 0, precioOriginal = null) => {
    if (descuentoPorcentaje > 0) {
        const anterior = Math.round(precioActual / (1 - descuentoPorcentaje / 100));
    return { precio: precioActual, precioAnterior: anterior, descuento: descuentoPorcentaje };
    } else if (precioOriginal && precioOriginal > precioActual) {
        const desc = Math.round(((precioOriginal - precioActual) / precioOriginal) * 100);
    return { precio: precioActual, precioAnterior: precioOriginal, descuento: desc };
    }
    return { precio: precioActual, precioAnterior: null, descuento: 0 };
};