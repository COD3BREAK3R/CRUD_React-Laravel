import { useState, useEffect } from 'react';
import { obtenerProductoPorId } from '../api/Productos';
import mostrarModal from '../utils/Modal';

const useProducto = (id) => {
    const [nombreOriginal, setNombreOriginal] = useState('');
    const [producto, setProducto] = useState('');
    const [modalAbierto, setModalAbierto] = useState(false);

    useEffect(() => {
        obtenerProductoPorId(id)
            .then((res) => {
                setProducto(res);
                setNombreOriginal(res.nombre);
            })
            .catch(error => {
                setModalAbierto(true);
                mostrarModal('Error', error.message, 'danger');
            });
    }, [id]);

    return { nombreOriginal, producto, setProducto, modalAbierto };
};

export default useProducto;