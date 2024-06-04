
import React from "react";
import bottle from "./pngegg.png";
import "./Section.css";

const Section1Left = () => {
  return (
    <div className="section-left-side">
      <div className="section-text-container">
        <h1 className="section-recyklon-text">RECYKLON</h1>
        <p className="section-subtitle">Donde tu ayuda cuenta</p>
        <p className="section-description">
          Descripción de la sección 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

const Section1Right = () => {
  return (
    <div className="section-right-side">
      
        <img src={bottle} alt="Section 1" className="section-hoja-image" />
      
    </div>
  );
};

export { Section1Left, Section1Right };