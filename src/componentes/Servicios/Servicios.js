import React from 'react';
import './Servicios.css';

function Servicios() {
  const servicios = [
    {
      titulo: "Entrega a Domicilio",
      descripcion: "Ofrecemos entregas rápidas y seguras directamente en la puerta de tu hogar. Ya sea que necesites medicamentos o productos de cuidado personal, nuestro equipo está listo para hacer la entrega en el menor tiempo posible.",
      accion: "Solicitar Entrega"
    },
    {
      titulo: "Consulta en Línea",
      descripcion: "Habla con nuestros farmacéuticos o doctores desde la comodidad de tu hogar. Consulta tus síntomas o aclara dudas sobre tus medicamentos a través de nuestras plataformas seguras de videollamada.",
      accion: "Reservar Consulta"
    },
    {
      titulo: "Recetas Electrónicas",
      descripcion: "Recibe tus recetas médicas directamente en tu correo electrónico o a través de nuestra plataforma, para que puedas gestionarlas de manera rápida y sin papeleo.",
      accion: "Solicitar Recetas"
    }
  ];

  return (
    <section id="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        {servicios.map((servicio, index) => (
          <div key={index} className="service">
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
            <button className="cta-button">{servicio.accion}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;