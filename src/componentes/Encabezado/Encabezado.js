import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="FAMISALUD/images/logo3.png" alt="FAMISALUD Logo" />
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
