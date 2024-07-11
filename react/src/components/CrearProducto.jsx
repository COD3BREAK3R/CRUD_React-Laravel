import { useNavigate } from 'react-router-dom';
import useProductoForm from './hooks/useCrearProductoForm';
import { FormProducto } from './FormProducto';
import { FormBotones } from './FormBotones';

const CrearProducto = () => {
  const navigate = useNavigate();
  
  const { producto, setProducto, errores, btnActivo, handleCrearProducto, validacionFormulario } = useProductoForm();

  return (
    <div className="container mt-5">
      <h2 className='d-flex justify-content-center'>Crear Producto</h2>

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
          onClickVolverAtras={() => navigate(-1)}
          btnActivo={btnActivo}
        ></FormBotones>
      </form>

    </div>
  );
};

export default CrearProducto;