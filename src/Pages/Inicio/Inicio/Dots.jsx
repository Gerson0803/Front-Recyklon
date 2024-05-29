import React from "react";
import "./Dots.css";

const Dots = ({ totalDots, activeDot, onDotClick }) => {
  return (
    <div className="dots-container">
      <div className="dots-buttons">
        {Array.from({ length: totalDots }).map((_, index) => (
          <span
            key={index}
            className={`dot ${activeDot === index ? "active" : ""}`}
            onClick={() => onDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Dots;
