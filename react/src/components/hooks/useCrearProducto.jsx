import { useState } from "react";
import crearProducto from "../api/InsertarProducto";
import mostrarModal from '../utils/Modal';



const useCrearProducto = (producto, errores) => {
    const [btnActivo, setBtnActivo] = useState(true);

    const handleCrearProducto = (btnClickeado) => {
        console.log('sdsdsd');

        btnClickeado.target.innerText = "Creando Producto...";
        setBtnActivo(false);

        if (Object.keys(errores).length === 0 && btnActivo === true) {
            crearProducto(producto)
                .then(() => {
                    mostrarModal('Éxito', 'Producto Creado con Éxito', 'success');
                    btnClickeado.target.innerText = "Crear Producto";
                    setBtnActivo(true);
                })
                .catch(error => {
                    mostrarModal('Error', error, 'danger');
                })
        }

    };

    return handleCrearProducto
}

export default useCrearProducto;
