import { useState } from 'react';
import { guardarCambiosProducto } from '../api/Productos';
import mostrarModal from '../utils/Modal';

const useGuardarCambios = (producto) => {
    const [btnActivo, setBtnActivo] = useState(true);

    const handleGuardarCambios = (btnClickeado) => {
        btnClickeado.target.innerText = 'Guardando...';

        if (btnActivo) {
            setBtnActivo(false);

            guardarCambiosProducto(producto)
                .then(() => {
                    mostrarModal('Éxito', 'Producto Actualizado con Éxito', 'success');
                })
                .catch(error => mostrarModal('Error', error.message, 'danger'))
                .finally(() => {
                    btnClickeado.target.innerText = 'Guardar Cambios';
                    setBtnActivo(true);
                });
        }
    };

    return { btnActivo, handleGuardarCambios };
};

export default useGuardarCambios;