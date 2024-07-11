
import Productos from './Productos';
import useMostrarTablaProductos from './hooks/useMostrarTablaProductos';

const TablaProductos = () => {

    // ------------------------------
    const { productos, setProductos, cargando, handleEditar, handleCrearProducto, handleRellenarTabla } = useMostrarTablaProductos();

    if (cargando) {
        return (

            <div className='container'>
                <div className='vh-100 d-flex flex-column justify-content-center'>
                    <div className=" alert alert-info text-center fw-bold fs-3 ">Cargando...</div>
                </div>
            </div>
        );
    }

    // ------------------------------

    return (
        <section className="container table-responsive-sm mt-1" id="mostrarModal">

            <h1 className="text-center">Tabla de Productos</h1>

            <div className="d-flex justify-content-center flex-column flex-sm-row">
                <button className="w-100 w-50-sm mb-2 btn btn-primary fs-4 me-2" onClick={handleCrearProducto}>Crear Producto</button>

                <button className=" w-100 w-50-sm mb-2 btn btn-secondary fs-4" onClick={handleRellenarTabla}>Rellenar Tabla</button>
            </div>

            <div className="table-responsive-sm tablaProductos">
                <Productos productos={productos} onEditar={handleEditar} setProductos={setProductos} />
            </div>

        </section>
    );
};

export default TablaProductos;