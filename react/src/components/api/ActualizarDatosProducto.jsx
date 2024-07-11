import { urlAPI } from "./urlAPI";

const guardarCambios = async (producto) => {

    let api = urlAPI();
    
    const datosFecth = {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
    };

    try {
        console.log(api);
        const response = await fetch(`${api}/productos/${producto.id}`, datosFecth);

        if (!response.ok) {
            throw new Error('No se pudo actualizar el producto');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export default guardarCambios;