import React from 'react';
import './Encabezado.css';
import logo from '../images/logo3.png'; // 
function Encabezado() {
  return (
    <header className="fixed-header">
      <nav>
        <div className="logo">
          <img src={logo} alt="FAMISALUD Logo" />
        </div>
        <ul className="centered-menu">
          <li><a href="#inicio" data-color="#E6F3FF">Inicio</a></li>
          <li><a href="#productos" data-color="#ffaf49">Productos</a></li>
          <li><a href="#servicios" data-color="#FFF2E6">Servicios</a></li>
          <li><a href="#contacto" data-color="#7deacb">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Encabezado;