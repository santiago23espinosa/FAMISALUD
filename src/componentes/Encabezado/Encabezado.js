import React from 'react';
import './Encabezado.css';

const Encabezado = () => {
  return (
    <header className="Encabezado">
      <nav>
        <div className="logo">
          <img src="images/logo3.png" alt="FAMISALUD Logo" />
        </div>
        <ul className="centered-menu">
          <li><a href="#productos">Productos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Encabezado;
