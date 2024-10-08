import React from 'react';
import Encabezado from './componentes/Encabezado/Encabezado';
import Productos from './componentes/Productos/Productos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';
import './App.css';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <p>Tu farmacia de confianza en línea</p>
            <a href="#productos" className="cta-button">Ver Productos</a>
          </div>
        </section>
        <Productos />
        <Servicios />
        <Contacto />
      </main>
      <footer>
        <p>Politicas de privacidad      Terminos y condiciones.</p>
        <p>&copy; FAMISALUD 2024 - . Todos los derechos reservados.</p>
        <p>Desarrollado por Santiago Espinosa Ordoñez.</p>
      </footer>
    </div>
  );
}

export default App;