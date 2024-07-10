import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
    <App />

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
    
  </BrowserRouter>
  ,
)