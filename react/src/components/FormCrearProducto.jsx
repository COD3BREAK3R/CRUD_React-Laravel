import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import crearProducto from "./api/InsertarProducto";
// -----------------------------
import { validarFormulario } from './utils/ValidarFormulario';
import { FormProducto } from './utils/FormProducto';
import { FormBotones } from './utils/FormBotones';
import mostrarModal from './utils/Modal';
// -----------------------------

const CrearProducto = () => {
  // -----------------------------
  const [producto, setProducto] = useState(
    {
      nombre: '',
      precio: '',
      cantidad_en_stock: ''
    });

  // ----------------------------------

  const [errores, setErrores] = useState({});
  const [btnActivo, setBtnActivo] = useState(true);
  const [validar, setValidar] = useState(false);
  const [botonClickeado, setBotonClickeado] = useState()

  const validacionFormulario = (tipo) => {

    setErrores(validarFormulario( errores, producto, tipo))
  };

  // ----------------------------------

  const handleCrearProducto = (btnClickeado) => {

    validacionFormulario('todo');
    setValidar(true);
    setBotonClickeado(btnClickeado.target);

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
          botonClickeado.innerText = 'Crear Producto'


          setValidar(false);
          setBtnActivo(true);
        });
    } else {
      setValidar(false);
      setBtnActivo(true);
    }
  }, [errores, validar, btnActivo, producto]);

  // ----------------------------------

  const navigate = useNavigate();

  // ----------------------------------

  return (
    <div className="container mt-5">

      <h2 className='d-flex justify-content-center'>
        Crear Producto
      </h2>

      <form>

        <FormProducto productoProps={{
          producto,
          setProducto,
          errores,
          validacionFormulario
        }}></FormProducto>

        <FormBotones
          mostrarTodos={true}
          textoBotonPrimario="Crear Producto"
          onClickBotonPrimario={handleCrearProducto}
          onClickVolverAtras={() => navigate(-1)}>
        </FormBotones>

      </form>

    </div>
  );
};

export default CrearProducto;