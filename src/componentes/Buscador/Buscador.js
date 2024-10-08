import React, { useState } from 'react';
import './Buscador.css';

function Buscador({ productos, onFiltrar }) {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    const valor = event.target.value.toLowerCase();
    setBusqueda(valor);
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(valor)
    );
    onFiltrar(productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre)));
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Buscador;
