import React, { createContext, useState } from 'react';

function Productos() {
  const [searchTerm, setSearchTerm] = useState('');
  export const ProductosContext = createContext();
  const productosFiltrados = productosData.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="productos">
      <h2>Nuestros Productos</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="product-grid">
        {productosFiltrados.map((producto, index) => (
          <div key={index} className="product">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="price">
              {producto.precioAnterior > producto.precioActual && (
                <span className="original-price">${producto.precioAnterior.toFixed(2)}</span>
              )}
              <span className="discount-price">${producto.precioActual.toFixed(2)}</span>
            </p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
