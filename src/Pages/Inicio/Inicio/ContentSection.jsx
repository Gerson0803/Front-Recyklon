import React from "react";
import "./ContentSection.css";

const ContentSection = ({ title, subtitle, description, image }) => {
  return (
    <div className="contenido-principal">
      <div className="division-container">
        <div className="left-side">
          <div className="text-container">
            <h1 className="recyklon-text">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="right-side">
          <img src={image} alt="Section visual" className="hoja-image" />
          <div className="decoration"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
