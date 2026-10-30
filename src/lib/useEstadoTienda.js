import { useState, useEffect } from 'react';
import { supabase } from './supabase';

export function useEstadoTienda() {
    const [enServicio, setEnServicio] = useState(true);
    const [cargandoEstado, setCargandoEstado] = useState(true);

    useEffect(() => {
        // 1. Obtener estado inicial de la tienda
        const obtenerEstadoTienda = async () => {
            try {
                const { data, error } = await supabase
                    .from('configuracion_general')
                    .select('valor')
                    .eq('parametro', 'En_Linea')
                    .single();

                    if (error) {
                        console.error('Error al consultar estado de la tienda:', error.message);
                    return;
                }

                if (data) {
                    setEnServicio(data.valor.toLowerCase() === 'true');
                }
            } catch (err) {
                console.error('Error inesperado al cargar estado:', err);
            } finally {
                setCargandoEstado(false);
            }
        };

        obtenerEstadoTienda();

        // 2. Suscripción en tiempo real (Supabase Realtime)
        const canalConfiguracion = supabase
        .channel('cambios-configuracion-tienda')
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'configuracion_general',
                    filter: 'parametro=eq.En_Linea',
                },
                (payload) => {
                    if (payload.new && payload.new.valor !== undefined) {
                        setEnServicio(payload.new.valor.toLowerCase() === 'true');
                    }
                }
            )
        .subscribe();

        return () => {
            supabase.removeChannel(canalConfiguracion);
        };
    }, []);

    return { enServicio, cargandoEstado };
}