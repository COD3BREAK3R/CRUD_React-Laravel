// EditarProducto.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { FormProducto } from './utils/FormProducto';
import { FormBotones } from './utils/FormBotones';
import ProductoEstado from './utils/EstadoCargaProducto';

import useProducto from './hooks/useProducto';
import useValidacionFormulario from './hooks/useValidacionFormulario';
import useGuardarCambios from './hooks/useGuardarCambios';
// ---------------------------
const EditarProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { nombreOriginal, producto, setProducto, modalAbierto } = useProducto(id);
    const { errores, validacionFormulario } = useValidacionFormulario(producto);
    const { handleGuardarCambios } = useGuardarCambios(producto);
    
    if (!producto) {
        return <ProductoEstado producto={producto} modalAbierto={modalAbierto} navigate={navigate} />
    }

    return (
        <div className="container mt-5">

            <h2 className='d-flex justify-content-center'>
                Editar Producto {nombreOriginal}
            </h2>

            <form>
                <FormProducto productoProps={{ producto, setProducto, errores, validacionFormulario }} />
                <FormBotones
                    mostrarTodos={false}
                    textoBotonPrimario="Guardar Cambios"
                    onClickBotonPrimario={handleGuardarCambios}
                    onClickVolverAtras={() => navigate(-1)}
                />
            </form>
        </div>
    );
};

export default EditarProducto;