import { eliminar } from "./api/EliminarProducto";
import { useState } from "react";

const Productos = ({ productos, onEditar, setProductos }) => {

    const [eliminando, setEliminando] = useState(false);

    return (
        <table className="table">

            <thead>
                <tr className="table-dark fs-5">
                    <th scope="col" style={{ minWidth: '250px' }}>Nombre</th>
                    <th scope="col" style={{ minWidth: '100px' }}>Precio</th>
                    <th scope="col" style={{ minWidth: '100px' }}>Cantidad</th>
                    <th scope="col" style={{ minWidth: '150px', paddingLeft: '7.4%' }}>Opciones</th>
                </tr>
            </thead>

            <tbody className="fs-5">
                {
                    productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.cantidad_en_stock}</td>
                            <td className="d-flex gap-2 justify-content-center">

                                <button className="btn btn-success w-50" onClick={() => onEditar(producto.id)}>
                                    Editar
                                </button>

                                <button className="btn btn-danger w-50" onClick={(e) => {
                                    eliminar(producto.id, e, productos, setProductos, setEliminando);
                                    
                                }}
                                disabled={eliminando}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                }
                {
                    productos.length === 0 && (
                        <tr className="w-100">
                            <td colSpan="4" className="text-center fs-3 p-5">
                                No hay productos para Mostrar
                            </td>
                        </tr>
                    )

                }

            </tbody>

        </table>
    );
};

export default Productos;