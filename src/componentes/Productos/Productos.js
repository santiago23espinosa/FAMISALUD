import React from 'react';
import './Productos.css';

const Productos = () => {
  const productos = [
    { nombre: 'ACETAMINOFEN', precio: 1500 },
    { nombre: 'IBUPROFENO', precio: 1800 },
    { nombre: 'VITAMINA C', precio: 2200 }
  ];

  return (
    <div className="Productos">
      <h2>Nuestros Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;
