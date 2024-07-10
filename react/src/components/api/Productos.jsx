import obtenerProducto from "./ObtenerDatosProducto";
import guardarCambios from "./ActualizarDatosProducto";

export const obtenerProductoPorId = (id) => {
    return obtenerProducto(id);
};

export const guardarCambiosProducto = (producto) => {
    return guardarCambios(producto);
};