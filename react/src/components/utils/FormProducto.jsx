
export const FormProducto = ({ productoProps }) => {

    const { producto, setProducto, errores, validacionFormulario} = productoProps;

    return (
        <>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-bold fs-5">Nombre:</label>
                <input
                    type="text"
                    className="form-control fs-5 inputNombre"
                    id="nombre"
                    value={producto.nombre}
                    onChange={(e) => setProducto({
                        ...producto, nombre: e.target.value
                    })}
                    onBlur={() => {
                        validacionFormulario('nombre')
                    }}
                />
                <small className='text-danger'>{errores.nombre}</small>
            </div>

            <div className="mb-3">
                <label htmlFor="precio" className="form-label fw-bold fs-5">Precio:</label>
                <input
                    type="number"
                    className="form-control fs-5 inputPrecio"
                    id="precio"
                    value={producto.precio}
                    onChange={(e) => setProducto({
                        ...producto, precio: e.target.value
                    })}
                    onBlur={() => {
                        validacionFormulario('precio')
                    }}

                />
                <small className='text-danger'>{errores.precio}</small>
            </div>

            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label fw-bold fs-5">Cantidad:</label>
                <input
                    type="number"
                    className="form-control fs-5 inputStock"
                    id="cantidad"
                    value={producto.cantidad_en_stock}
                    onChange={(e) => setProducto({
                        ...producto, cantidad_en_stock: e.target.value
                    })}
                    onBlur={() => {
                        validacionFormulario('stock')
                    }}

                />
                <small className='text-danger'>{errores.cantidad_en_stock}</small>
            </div>
        </>
    )
}
