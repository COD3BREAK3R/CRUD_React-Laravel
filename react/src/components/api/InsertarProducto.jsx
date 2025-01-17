import { urlAPI } from "./urlAPI";

const InsertarProducto = async (producto) => {
    let api = urlAPI();
    const datosFecth = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
    };

    try {
        const response = await fetch(`${api}/productos`, datosFecth);

        if (!response.ok) {
            const mensajeError = await response.json();
            console.log(await mensajeError);
            
            throw new Error(mensajeError.error || 'Error fetching productos');
        }else{
            return await response.json();
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

export default InsertarProducto