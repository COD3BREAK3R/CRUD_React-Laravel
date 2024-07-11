import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { FormProducto } from './FormProducto';
import { FormBotones } from './FormBotones';
import ProductoEstado from './utils/EstadoCargaProducto';

import useProducto from './hooks/useObtenerProducto';
import useGuardarCambiosProductoForm from './hooks/useGuardarCambiosProductoForm';

// ---------------------------
const EditarProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // ---------------------------
    
    const { nombreOriginal, producto, setProducto, modalAbierto } = useProducto(id);

    const {
        errores,
        btnActivo,
        handleGuardarProducto,
        validacionFormulario } = useGuardarCambiosProductoForm({ producto, setProducto });

    // ---------------------------
    if (!producto) {
        return <ProductoEstado producto={producto} modalAbierto={modalAbierto} navigate={navigate} />
    }
    // ---------------------------

    return (
        <div className="container mt-5">

            <h2 className='d-flex justify-content-center text-center mb-3'>
                Editar Producto {nombreOriginal}
            </h2>

            <form>
                <FormProducto productoProps={{ producto, setProducto, errores, validacionFormulario }} />
                <FormBotones
                    mostrarTodos={false}
                    textoBotonPrimario="Guardar Cambios"
                    onClickBotonPrimario={handleGuardarProducto}
                    onClickVolverAtras={() => navigate(-1)}
                    btnActivo={btnActivo}
                />
            </form>
        </div>
    );
};

export default EditarProducto;