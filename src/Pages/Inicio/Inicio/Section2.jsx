import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./Section2.css";
import bottleImage from "./bottle.png";

const images = [
  { src: bottleImage, className: "inclined" }, 
]; 

const Section2Left = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section2-left-side">
      <div className="section2-one">
        <img
          src={images[currentImageIndex].src}
          alt="Reciclable"
          className={`recyclable-image ${images[currentImageIndex].className}`}
        />
      </div>
      <div className="section2-division">
        <div className="section2-inner-one">
          <h2>Productos Reciclables</h2>
          <ul>
            <li>Botellas de plástico</li>
            <li>Latas de aluminio</li>
            <li>Papel y cartón</li>
            <li>Envases de vidrio (limpios y secos)</li>
            <li>Revistas y periódicos</li>
            <li>Envases de tetrapak</li>
          </ul>
          <p>
            Asegúrate de limpiar y secar los productos reciclables antes de
            desecharlos. El reciclaje adecuado ayuda a reducir la contaminación
            y conservar recursos naturales.
          </p>
        </div>
      </div>
    </div>
  );
};

const Section2Right = () => {
  return (
    <div className="section2-right-side">
      <div className="section2-right-division">
        <div className="section2-inner-one">
          <h2>Contenedor Azul</h2>
          <FontAwesomeIcon icon={faTrashAlt} color="blue" size="3x" />
          <p>Usa este contenedor para papel y cartón. Recuerda doblar las cajas para ahorrar espacio.</p>
        </div>
        <div className="section2-inner-two">
          <h2>Contenedor Verde</h2>
          <FontAwesomeIcon icon={faTrashAlt} color="green" size="3x" />
          <p>Este contenedor es para vidrio. Solo envases de vidrio que estén limpios y sin residuos.</p>
        </div>
        <div className="section2-inner-three">
          <h2>Contenedor Amarillo</h2>
          <FontAwesomeIcon icon={faTrashAlt} color="yellow" size="3x" />
          <p>En este contenedor van los plásticos y metales. Asegúrate de enjuagar los envases antes de reciclarlos.</p>
        </div>
        <div className="section2-inner-four">
          <h2>Contenedor Marrón</h2>
          <FontAwesomeIcon icon={faTrashAlt} color="brown" size="3x" />
          <p>Este es para residuos orgánicos. Incluye restos de comida y residuos de jardinería.</p>
        </div>
        
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="section2-contenido-principal">
      <div className="section2-division-container">
        <Section2Left />
        <Section2Right />
      </div>
    </div>
  );
};

export { Section2Left, Section2Right, Section2 };
