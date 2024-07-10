
const guardarCambios = async (producto) => {

    const datosFecth = {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
    };

    try {
        const response = await fetch(`http://localhost:8000/api/productos/${producto.id}`, datosFecth);

        if (!response.ok) {
            throw new Error('No se pudo actualizar el producto');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export default guardarCambios;