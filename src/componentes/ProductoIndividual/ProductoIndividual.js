import React from 'react';
import ProductoIndividual from '../ProductoIndividual/ProductoIndividual';
import './Productos.css';

const productos = [
  { 
    nombre: "ACETAMINOFEN", 
    precioAnterior: 2000, 
    precioActual: 1500,
    imagen: "/images/producto1.jpg",
    descripcion: "Analgésico y antipirético de uso común."
  },
  { 
    nombre: "IBUPROFENO", 
    precioAnterior: 2500, 
    precioActual: 1800,
    imagen: "/images/producto2.jpg",
    descripcion: "Antiinflamatorio no esteroideo (AINE) utilizado para reducir el dolor y la inflamación."
  },
  // ... Agrega el resto de los productos aquí
];

const Productos = () => {
  return (
    <section id="productos" className="productos">
      <h2>Nuestros Productos</h2>
      <div className="product-grid">
        {productos.map((producto, index) => (
          <ProductoIndividual key={index} producto={producto} />
        ))}
      </div>
    </section>
  );
};

export default Productos;