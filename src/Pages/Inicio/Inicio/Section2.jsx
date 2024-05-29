import React from "react";
import bottle from "./pngegg.png"; // Asegúrate de tener la imagen correcta para la sección 2
import "./Section.css";

const Section2Left = () => {
  return (
    <div className="section-left-side">
      <div className="section-text-container">
        <h1 className="section-recyklon-text">RECYKLON 2</h1>
        <p className="section-subtitle">Donde tu ayuda cuenta más</p>
        <p className="section-description">
          Descripción de la sección 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

const Section2Right = () => {
  return (
    <div className="section-right-side">
      <img src={bottle} alt="Section 2" className="section-hoja-image" />
    </div>
  );
};

export { Section2Left, Section2Right };
