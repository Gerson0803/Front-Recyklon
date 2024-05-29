import React from "react";
import bottle from "./pngegg.png"; // Asegúrate de tener la imagen correcta para la sección 3
import "./Section.css";

const Section3Left = () => {
  return (
    <div className="section-left-side">
      <div className="section-text-container">
        <h1 className="section-recyklon-text">RECYKLON 3</h1>
        <p className="section-subtitle">Donde tu ayuda cuenta aún más</p>
        <p className="section-description">
          Descripción de la sección 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

const Section3Right = () => {
  return (
    <div className="section-right-side">
      <img src={bottle} alt="Section 3" className="section-hoja-image" />
    </div>
  );
};

export { Section3Left, Section3Right };
