
const ProductoEstado = ({ producto, modalAbierto, navigate }) => {
    if (!producto && !modalAbierto) {
        return (
            <div className='container'>
                <div className='vh-100 d-flex flex-column justify-content-center'>
                    <div className=" alert alert-info text-center fw-bold fs-3 ">Cargando...</div>
                </div>
            </div>
        );
    }

    if (!producto && modalAbierto) {
        return (
            <div className='container'>
                <div className='vh-100 d-flex flex-column justify-content-center'>
                    <div className=" alert alert-danger text-center fw-bold fs-3 ">Producto no Encontrado</div>
                    <button type="button" className="btn btn-secondary fs-5" onClick={() => navigate(-1)}>Volver Atrás</button>
                </div>
            </div>
        );
    }

    return null;
};

export default ProductoEstado;