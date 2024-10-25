import { urlAPI } from "./urlAPI";

const obtenerProductos = async () => {
    let api = urlAPI();

    try {
        const respuesta = await fetch(`${api}/productos`);

        if (!respuesta.ok) {
            const mensajeError = await respuesta.json();
            throw new Error(mensajeError.error || 'Error obteniendo productos');
        }

        const datosRespuesta = await respuesta.json();
        return datosRespuesta;

    } catch (error) {
        throw new error;
    }
};

export default obtenerProductos;