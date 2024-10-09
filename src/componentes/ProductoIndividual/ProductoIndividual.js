import React from 'react';
import './ProductoIndividual.css';

function ProductoIndividual({ producto, onAddToCart }) {
  const { nombre, imagen, precioActual, precioAnterior, descripcion } = producto;

  return (
    <div className="producto-individual">
      <div className="producto-imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="producto-info">
        <h2>{nombre}</h2>
        <div className="producto-precios">
          {precioAnterior && precioAnterior > precioActual && (
            <span className="precio-anterior">${precioAnterior.toFixed(2)}</span>
          )}
          <span className="precio-actual">${precioActual.toFixed(2)}</span>
        </div>
        <p className="producto-descripcion">{descripcion}</p>
        <div className="producto-acciones">
          <button onClick={() => onAddToCart(producto)} className="btn-agregar">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoIndividual;