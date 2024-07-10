import { useEffect, useState } from "react";
import obtenerProductos from './api/ObtenerProductos';
import Productos from './Productos';
import { useNavigate } from 'react-router-dom';
import mostrarModal from "./utils/Modal";
import { rellenarTabla } from "./api/RellenarTabla";

const TablaProductos = () => {
    const [errorRespuesta, setErrorRespuesta] = useState(false);
    const [cargando, setCargando] = useState(true);

    const [productos, setProductos] = useState([]);
    const [existenciaProductos, setExistenciaProductos] = useState(0);
    const [modalAbierto, setModalAbierto] = useState(false);
    const navigate = useNavigate();

    // ------------------------------

    const cargarProductos = () => {
        obtenerProductos()
            .then(setProductos)
            .then(() => {
                if (productos.length === 0) {
                    setExistenciaProductos(false)
                    setCargando(false)
                } else {
                    setExistenciaProductos(true)
                }
                setErrorRespuesta(false)
            })
            .catch(() => { setErrorRespuesta(true) });
    }
    useEffect(() => {

        cargarProductos();
    }, [setErrorRespuesta]);


    // ------------------------------

    const handleEditar = (id) => {
        navigate(`/editar/${id}`);
    };

    const handleCrearProducto = () => {
        navigate(`/crear/`);
    };

    const handleRellenarTabla = (e) => {
        e.target.innerText = "Rellenando Tabla..."
        e.target.disabled = true;
        rellenarTabla(cargarProductos,e)
    };

    // ------------------------------

    if (cargando || errorRespuesta === false && productos.length === 0 && existenciaProductos) {
        return (

            <div className='container'>
                <div className='vh-100 d-flex flex-column justify-content-center'>
                    <div className=" alert alert-info text-center fw-bold fs-3 ">Cargando...</div>
                </div>
            </div>
        );
    }

    if (errorRespuesta && !modalAbierto) {
        mostrarModal('Error', 'Error al cargar los productos', 'danger');
        setModalAbierto(true);
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