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

    </Body>
  );
}

export default App;