import React from 'react';
import { Link } from 'react-router-dom';
import './Encabezado.css';

function Encabezado() {
  return (
    <header className="encabezado-fijo">
      <nav>
        <div className="logo">
          <img src="/imagenes/logo3.png" alt="Logo FAMISALUD" />
        </div>
        <ul className="menu-centrado">
          <li><Link to="/">Inicio</Link></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Encabezado;