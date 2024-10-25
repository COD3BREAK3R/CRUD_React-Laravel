export const validarFormulario = (erroresRecibios, producto, tipo) => {

    let errores = { ...erroresRecibios };
    let precioProducto = Number(producto.precio);
    let cantidadStock = Number(producto.cantidad_en_stock);
    let patronNombre = /^[a-zA-Z0-9\sñÑáéíóúÁÉÍÓÚ_-]{5,100}$/;

    // --------------------
    if (tipo === 'nombre' || tipo === 'todo' || producto.nombre.length > 0) {
        const inputNombre = document.querySelector('.inputNombre');
        inputNombre.classList.remove('is-invalid');

        if (!patronNombre.test(producto.nombre)) {
            errores.nombre = 'El nombre debe tener entre 5 y 100 caracteres.';

            inputNombre.classList.add('is-invalid');
        } else {
            delete errores['nombre'];
        }

    }
    // --------------------

    if (tipo === 'precio' || tipo === 'todo' || producto.precio.length > 0) {

        const inputPrecio = document.querySelector('.inputPrecio');
        inputPrecio.classList.remove('is-invalid');

        if (producto.precio <= 0 || producto.precio >= 100000 || !Number(precioProducto)) {
            errores.precio = 'El precio debe ser un número mayor a 0 y menor a 100000.';

            inputPrecio.classList.add('is-invalid');
        } else {
            delete errores['precio'];
        }
    }

    // --------------------

    if (tipo === 'stock' || tipo === 'todo' || producto.cantidad_en_stock.length > 0) {

        const inputStock = document.querySelector('.inputStock');
        inputStock.classList.remove('is-invalid');

        const regexStock = /^[0-9]+$/;

        if (tipo === 'stock' && producto.cantidad_en_stock <= 0 || producto.cantidad_en_stock > 100000 || !Number.isInteger(cantidadStock) || !regexStock.test(producto.cantidad_en_stock)) {
            errores.cantidad_en_stock = 'La cantidad en stock debe ser un número mayor a 0 y menor a 100000 y';

            inputStock.classList.add('is-invalid');
        } else {
            delete errores['cantidad_en_stock'];
        }

    }

    return errores;
};

