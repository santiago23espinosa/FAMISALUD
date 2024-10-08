import React from 'react';
import './PiePagina.css';

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Políticas de privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; FAMISALUD 2024 - Todos los derechos reservados.</p>
        <p>Desarrollado por Santiago Espinosa Ordoñez.</p>
      </div>
    </footer>
  );
}

export default PiePagina;