import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="Contacto">
      <h2>Contáctanos</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
