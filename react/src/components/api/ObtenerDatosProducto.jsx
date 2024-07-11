import { urlAPI } from "./urlAPI";

const obtenerProducto = async (id) => {
    let api = urlAPI();

    try {
        const respuesta = await fetch(`${api}/productos/${id}`);

        if (!respuesta.ok) {
            const mensajeError = await respuesta.json();
            throw new Error(mensajeError.error || 'Error fetching productos');
        }

        const datosRespuesta = await respuesta.json();
        return datosRespuesta;

    } catch (error) {
        console.error('Error obteniendo productos:', error);
        throw error;
    }
};

export default obtenerProducto;