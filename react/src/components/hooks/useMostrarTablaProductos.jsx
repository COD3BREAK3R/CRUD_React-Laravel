import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import obtenerProductos from '../api/ObtenerProductos';
import mostrarModal from "../utils/Modal";
import { rellenarTabla } from "../api/RellenarTabla";

const useMostrarTablaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // ------------------------------
    const cargarProductos = async () => {
        try {
            const productos = await obtenerProductos();
            setProductos(productos);
            setError(false);
        } catch (error) {
            setError(true);
        } finally {
            setCargando(false);
        }
    };
    // ------------------------------
    useEffect(() => {
        cargarProductos();
    }, []);

    useEffect(() => {
        if (error) {
            mostrarModal('Error', 'Error al cargar los productos', 'danger');
        }
    }, [error]);
    // ------------------------------
    const handleEditar = (id) => navigate(`/editar/${id}`);
    const handleCrearProducto = () => navigate(`/crear/`);

    const handleRellenarTabla = (e) => {
        e.target.innerText = "Rellenando Tabla...";
        e.target.disabled = true;
        rellenarTabla(cargarProductos, e);
    };
    // ------------------------------

    return {
        productos,
        setProductos,
        cargando,
        handleEditar,
        handleCrearProducto,
        handleRellenarTabla
    };
};

export default useMostrarTablaProductos;