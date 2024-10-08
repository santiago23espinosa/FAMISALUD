import React from 'react';
import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Productos from './componentes/Productos/Productos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';

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
    </div>
  );
}

export default App;