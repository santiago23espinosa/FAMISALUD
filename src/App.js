import React from 'react';
import Encabezado from './components/Encabezado/Encabezado';
import MenuNavegacion from './components/MenuNavegacion/MenuNavegacion';
import SeccionInicio from './components/SeccionInicio/SeccionInicio';
import SeccionProductos from './components/SeccionProductos/SeccionProductos';
import SeccionServicios from './components/SeccionServicios/SeccionServicios';
import FormularioContacto from './components/FormularioContacto/FormularioContacto';
import PiePagina from './components/PiePagina/PiePagina';
import './App.css';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main>
        <SeccionInicio />
        <SeccionProductos />
        <SeccionServicios />
        <FormularioContacto />
      </main>
      <PiePagina />
    </div>
  );
}

export default App;