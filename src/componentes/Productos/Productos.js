import React, { useState } from 'react';
import './Productos.css';


const productosData = [
  { 
    nombre: "ACETAMINOFEN", 
    precioAnterior: 2000, 
    precioActual: 1500,
    imagen: "/images/producto1.jpg"
  },
  { 
    nombre: "IBUPROFENO", 
    precioAnterior: 2500, 
    precioActual: 1800,
    imagen: "/images/producto2.jpg"
  },
  { 
    nombre: "VITAMINA C", 
    precioAnterior: 3000, 
    precioActual: 2200,
    imagen: "/images/producto3.jpg"
  },
  { 
    nombre: "ALCOHOL EN GEL", 
    precioAnterior: 1500, 
    precioActual: 1200,
    imagen: "/images/producto4.jpg"
  },
  { 
    nombre: "ASPIRINA", 
    precioAnterior: 4000, 
    precioActual: 3500,
    imagen: "images/producto5.jpg"
},
{ 
    nombre: "OMEPREZOL", 
    precioAnterior: 2200, 
    precioActual: 1800,
    imagen: "images/producto6.jpg"
},
{ 
    nombre: "AZITROMICINA", 
    precioAnterior: 1800, 
    precioActual: 1400,
    imagen: "images/producto7.jpg"
},
{ 
    nombre: "DICLOFENACO", 
    precioAnterior: 3500, 
    precioActual: 3000,
    imagen: "images/producto8.jpg"
}
  
];

function Productos() {
  const [searchTerm, setSearchTerm] = useState('');

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
