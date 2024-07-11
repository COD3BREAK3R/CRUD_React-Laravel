import { useState, useEffect } from 'react';
import { validarFormulario } from '../utils/ValidarFormulario';
import guardarCambios from '../api/ActualizarDatosProducto';
import mostrarModal from '../utils/Modal';

const useGuardarCambiosProductoForm = ({ producto, setProducto }) => {

  const [errores, setErrores] = useState({});
  const [btnActivo, setBtnActivo] = useState(true);
  const [validar, setValidar] = useState(false);
  const [botonClickeado, setBotonClickeado] = useState(null);

  const validacionFormulario = (tipo) => {
    setErrores(validarFormulario(errores, producto, tipo));
  };

  useEffect(() => {
    if (validar && Object.keys(errores).length === 0 && btnActivo) {
      botonClickeado.innerText = 'Guardando Cambios...';
      setBtnActivo(false);

      guardarCambios(producto)
        .then(() => {
          mostrarModal('Éxito', 'Producto Editado con Éxito', 'success');
        })
        .catch(error => {
          mostrarModal('Error', error, 'danger');
        })
        .finally(() => {
          botonClickeado.innerText = 'Guardar Cambios';
          setValidar(false);
          setBtnActivo(true);
        });
    } else {
      setValidar(false);
      setBtnActivo(true);
    }
  }, [errores, validar, btnActivo, producto]);

  const handleGuardarProducto = (btnClickeado) => {
    validacionFormulario('todo');
    setValidar(true);
    setBotonClickeado(btnClickeado.target);
  };

  return {
    producto,
    setProducto,
    errores,
    btnActivo,
    handleGuardarProducto,
    validacionFormulario
  };
};

export default useGuardarCambiosProductoForm;