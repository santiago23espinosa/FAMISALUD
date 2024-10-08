import React from 'react';
import './ProductoIndividual.css';

function ProductoIndividual({ producto }) {
  return (
    <div className="producto-individual">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="price">
        {producto.precioAnterior && (
          <span className="original-price">${producto.precioAnterior.toFixed(2)}</span>
        )}
        <span className="discount-price">${producto.precioActual.toFixed(2)}</span>
      </p>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ProductoIndividual;
