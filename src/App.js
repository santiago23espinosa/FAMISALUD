import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encabezado from './componentes/Encabezado/Encabezado';
import Portada from './componentes/Portada/Portada';
import CuadriculaProductos from './componentes/CuadriculaProductos/CuadriculaProductos';
import Servicios from './componentes/Servicios/Servicios';
import Contacto from './componentes/Contacto/Contacto';
import PanelAdmin from './componentes/PanelAdmin/PanelAdmin';
import PiePagina from './componentes/PiePagina/PiePagina';
import './App.css';

function App() {
  const [modoAdmin, setModoAdmin] = useState(false);

  return (
    <Router>
      <div className="App">
        <Encabezado setModoAdmin={setModoAdmin} />
        <Routes>
          <Route path="/admin" element={<PanelAdmin />} />
          <Route path="/" element={
            <>
              <Portada />
              <main>
                <section id="productos">
                  <h2>Nuestros Productos</h2>
                  <CuadriculaProductos />
                </section>
                <Servicios />
                <Contacto />
              </main>
            </>
          } />
        </Routes>
        <PiePagina />
      </div>
    </Router>
  );
}

export default App;