import mostrarModal from "../utils/Modal";

export const EliminarProducto = async (id) => {

    const datosFecth = {

        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const response = await fetch(`http://localhost:8000/api/productos/${id}`, datosFecth);

        if (!response.ok) {
            throw new Error('No se pudo eliminar el producto');
        }

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

export const eliminar = (id, btnClickeado, productos, setProductos, setEliminando) => {

    setEliminando(true);

    btnClickeado.target.innerText = "Eliminando...";
    btnClickeado.target.previousSibling.remove();
    btnClickeado.target.classList.add('w-100');

    EliminarProducto(id)
        .then(() => {
            setProductos(productos.filter(producto => producto.id !== id));
        })
        .catch((error) => {
            mostrarModal('Error', 'Ocurrió un Error al intentar Eliminar el Producto', 'danger')
            console.log(error);
        }).finally(() => { setEliminando(false) })

};
