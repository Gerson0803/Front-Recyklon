import React, { useState } from "react";
import Header from "./Header";
import Dots from "./Dots";
import Footer from "./Footer";
import { Section1Left, Section1Right } from "./Section1";
import { Section2Left, Section2Right } from "./Section2";
import { Section3Left, Section3Right } from "./Section3"; 

import "./Inicio.css";

const Inicio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 3;

  const handleNext = () => {
    setActiveSection((prevActiveSection) => (prevActiveSection + 1) % totalSections);
  };

  const handlePrev = () => {
    setActiveSection((prevActiveSection) => (prevActiveSection - 1 + totalSections) % totalSections);
  };

  return (
    <div className="inicio-principal">
      <Header />
      <Dots totalDots={totalSections} activeDot={activeSection} onDotClick={setActiveSection} />
      <div className="inicio-section-container">
        <div className="inicio-division-container">
          <div className={`inicio-left-side ${activeSection === 2 ? 'section3-full-width' : ''}`}>
            <button className="inicio-nav-button inicio-prev-button" onClick={handlePrev}>
              &lt;
            </button>
            {activeSection === 0 && <Section1Left />}
            {activeSection === 1 && <Section2Left />}
            {activeSection === 2 && <Section3Left />} 
          </div>
          <div className="inicio-right-side">
            {activeSection === 0 && <Section1Right />}
            {activeSection === 1 && <Section2Right />}
            {activeSection === 2 && <Section3Right />} 
            <button className="inicio-nav-button inicio-next-button" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
