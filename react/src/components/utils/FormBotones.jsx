export const FormBotones = (botonesProps) => {
    const { mostrarTodos, textoBotonPrimario, onClickBotonPrimario, onClickVolverAtras } = botonesProps;

    return (
        <div className='d-flex flex-wrap gap-2 botonPrimario'>
            <button type="button" className="btn btn-primary fs-5" onClick={onClickBotonPrimario}>{textoBotonPrimario}</button>


            <button type="button" className="btn btn-secondary fs-5" onClick={onClickVolverAtras}>Volver Atrás</button>

            {mostrarTodos && (
                <button type="button" className="btn  btn-dark fs-5" onClick={() => location.reload()}>Reiniciar</button>
            )}
        </div>
    )
}
