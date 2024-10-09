import React from 'react';
import './Carrito.css';

function Carrito({ items, onUpdateQuantity, onRemoveItem }) {
  const total = items.reduce((sum, item) => sum + item.precioActual * item.cantidad, 0);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="carrito-items">
            {items.map((item, index) => (
              <div key={index} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="item-details">
                  <h3>{item.nombre}</h3>
                  <p className="item-price">${item.precioActual.toFixed(2)}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => onUpdateQuantity(item, item.cantidad - 1)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => onUpdateQuantity(item, item.cantidad + 1)}>+</button>
                </div>
                <button 
                  className="remove-item" 
                  onClick={() => onRemoveItem(item)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="carrito-total">
            <h3>Total:</h3>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="btn-checkout">Proceder al pago</button>
        </>
      )}
    </div>
  );
}

export default Carrito;