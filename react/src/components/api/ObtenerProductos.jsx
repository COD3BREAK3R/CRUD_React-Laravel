const obtenerProductos = async () => {
    try {
        const respuesta = await fetch('http://localhost:8000/api/productos');

        if (!respuesta.ok) {
            const mensajeError = await respuesta.json();
            throw new Error(mensajeError.error || 'Error obteniendo productos');
        }

        const datosRespuesta = await respuesta.json();
        return datosRespuesta;

    } catch (error) {
        throw error;
    }
};

export default obtenerProductos;