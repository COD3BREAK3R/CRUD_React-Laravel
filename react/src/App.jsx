import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import TablaProductos from './components/TablaProductos';
import EditarProducto from './components/EditarProducto';
import CrearProducto from "./components/CrearProducto";

const App = () => {
  return (
    <Body>

      <Routes>
        <Route path="/" element={<TablaProductos />} />
        <Route path="/crear" element={<CrearProducto />} />
        <Route path="/editar/:id" element={<EditarProducto />} />
      </Routes>

      <div id="mensajeModal" className="modal fade" tabIndex="-1" aria-labelledby="mensajeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mensajeModalLabel">Éxito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="botonModal btn btn-success" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
      
    </Body>
  );
}

export default App;