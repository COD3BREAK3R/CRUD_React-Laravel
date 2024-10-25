import mostrarModal from "../utils/Modal";
import { urlAPI } from "./urlAPI";

export const rellenarTabla = async (cargarProductos, e) => {
    let api = urlAPI();

    try {
        const response = await fetch(`${api}/run-seed`);

        const mensajeRespuesta = await response.json();

        if (!response.ok) {
            throw new Error(mensajeRespuesta.error || 'Error al intentar rellenar la tabla');
        } else {
            mostrarModal('Éxito', mensajeRespuesta.success, 'success');
            cargarProductos();
        }

    } catch (error) {
        throw new Error(error.message);
    } finally {
        e.target.innerText = "Rellenar Tabla"
        e.target.disabled = false;
    }
}
