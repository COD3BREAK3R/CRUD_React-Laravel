const mostrarModal = (title, message, variant) => {

    const modal = new bootstrap.Modal(document.getElementById('mensajeModal'));

    document.querySelector('.modal-title').innerText = title;
    document.querySelector('.modal-body').innerText = message;
    document.querySelector('.botonModal').className = `botonModal btn btn-${variant}`;
    modal.show();

};

export default mostrarModal;