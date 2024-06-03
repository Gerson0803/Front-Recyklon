// Section2.js

import React from "react";
import "./Section2.css";

const Section2Left = () => {
  return (
    <div className="section2-left-side">
      <div className="section2-one"></div>
      <div className="section2-division">
        <div className="section2-inner-one"></div>
        <div className="section2-inner-two"></div>
      </div>
    </div>
  );
};

const Section2Right = () => {
  return (
    <div className="section2-right-side">
      <div className="section2-right-division">
        <div className="section2-inner-one"></div>
        <div className="section2-inner-two"></div>
        <div className="section2-inner-three"></div>
        <div className="section2-inner-four"></div>
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
