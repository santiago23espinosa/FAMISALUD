import React from 'react';
import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Productos from './componentes/Productos/Productos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';
import PiePagina from './componentes/PiePagina/PiePagina';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main>
        <section id="productos">
          <Productos />
        </section>
        <section id="servicios">
          <Servicios />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </main>
      <PiePagina />
      
    </div>
  );
}

export default App;