import { useState, useEffect } from 'react';
import { validarFormulario } from '../utils/ValidarFormulario';
import crearProducto from "../api/InsertarProducto";
import mostrarModal from '../utils/Modal';

const useProductoForm = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
    cantidad_en_stock: ''
  });
  const [errores, setErrores] = useState({});
  const [btnActivo, setBtnActivo] = useState(true);
  const [validar, setValidar] = useState(false);
  const [botonClickeado, setBotonClickeado] = useState(null);

  const validacionFormulario = (tipo) => {
    setErrores(validarFormulario(errores, producto, tipo));
  };

  useEffect(() => {
    if (validar && Object.keys(errores).length === 0 && btnActivo) {
      botonClickeado.innerText = 'Creando Producto...';
      setBtnActivo(false);

      crearProducto(producto)
        .then(() => {
          mostrarModal('Éxito', 'Producto Creado con Éxito', 'success');
        })
        .catch(error => {
          mostrarModal('Error', error, 'danger');
        })
        .finally(() => {
          botonClickeado.innerText = 'Crear Producto';
          setValidar(false);
          setBtnActivo(true);
        });
    } else {
      setValidar(false);
      setBtnActivo(true);
    }
  }, [errores, validar, btnActivo, producto]);

  const handleCrearProducto = (btnClickeado) => {
    validacionFormulario('todo');
    setValidar(true);
    setBotonClickeado(btnClickeado.target);
  };

  return {
    producto,
    setProducto,
    errores,
    btnActivo,
    handleCrearProducto,
    validacionFormulario
  };
};

export default useProductoForm;