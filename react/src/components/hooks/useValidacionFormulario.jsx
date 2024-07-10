import { useState } from 'react';
import { validarFormulario } from '../utils/ValidarFormulario';

const useValidacionFormulario = (producto) => {
    const [errores, setErrores] = useState({});

    const validacionFormulario = (tipo) => {
        setErrores(validarFormulario(producto, tipo));
    };

    return { errores, validacionFormulario };
};

export default useValidacionFormulario;