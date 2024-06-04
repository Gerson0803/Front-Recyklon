import React from "react";
import "./Section3.css";
import bottle from "./hoja.png";
import developerImage from "../Login/User.png";

const Section3Left = () => {
  return (
    <div className="section3-contenido-principal">
      <div className="section3-division-container">
        
        <div className="section-right-side">
          <div className="section-text-container">
            <div className="developer-info" style={{ backgroundColor: "#8B6914" }}>
              <img src={developerImage} alt="Desarrollador" className="developer-image" />
              <h2>Darly</h2>
              <p>Rol: Desarrollador Back-end</p>
            </div>
            <div className="developer-info" style={{ backgroundColor: "#8B6914" }}>
              <img src={developerImage} alt="Desarrollador" className="developer-image" />
              <h2>Mateo</h2>
              <p>Rol: Desarrollador Front-end</p>
            </div>
            <div className="developer-info" style={{ backgroundColor: "#8B6914" }}>
              <img src={developerImage} alt="Desarrollador" className="developer-image" />
              <h2>Gerson</h2>
              <p>Rol: Desarrollador Front-end</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section3Right = () => {
  return (
    <div className="section-right-side">
      <img src={bottle} alt="Section 1" className="section-hoja-image" />
    </div>
  );
};

export { Section3Left, Section3Right };
