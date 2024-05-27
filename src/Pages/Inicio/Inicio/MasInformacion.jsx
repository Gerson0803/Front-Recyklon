import React from "react";
import "./MasInformacion.css";
import imagePath from "./tomas-malik-CMkJ-oT4lsQ-unsplash.jpg"; // Importa la imagen

const MasInformacion = () => {
  return (
    <div className="mas-informacion">
      <h2>Más información sobre el reciclaje</h2>
      <div className="grid-container">
        {/* Contenedor para "¿Qué se puede reciclar?" */}
        <div className="contenedor-verde grande">
          <h3>¿Qué se puede reciclar?</h3>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 1</h4>
              <ul>
                <li>Papel y cartón tales como periódicos, revistas, cajas de cartón, papel de oficina, etc.</li>
                <li>Plástico: botellas de agua, envases de alimentos, bolsas de plástico, etc.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Reciclaje Parte 1" />
            </div>
          </div>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 2</h4>
              <ul>
                <li>Vidrio como botellas, frascos, vasos, etc.</li>
                <li>Metal como latas de aluminio, latas de conservas, envases de metal, etc.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Reciclaje Parte 2" />
            </div>
          </div>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 3</h4>
              <ul>
                <li>Electrónicos como teléfonos celulares, computadoras, televisores, etc.</li>
                <li>Pilas y baterías.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Reciclaje Parte 3" />
            </div>
          </div>
        </div>
        {/* Contenedor para "Consejos para reciclar en casa" */}
        <div className="contenedor-verde grande">
          <h3>Consejos para reciclar en casa</h3>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 1</h4>
              <ul>
                <li>Conoce tus materiales: Aprende qué materiales son reciclables en tu área y cómo deben ser separados. Algunos lugares tienen programas de reciclaje específicos y diferentes normativas.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Consejos Parte 1" />
            </div>
          </div>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 2</h4>
              <ul>
                <li>Establece un sistema de reciclaje: Coloca contenedores o cubos de reciclaje en áreas convenientes de tu casa para facilitar la separación de materiales reciclables. Puedes tener uno para papel y cartón, otro para plásticos, otro para vidrio, etc.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Consejos Parte 2" />
            </div>
          </div>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 3</h4>
              <ul>
                <li>Lava y separa los materiales: Asegúrate de enjuagar los envases antes de reciclarlos para evitar malos olores y mantener limpio el proceso de reciclaje. Separa los materiales según su tipo para facilitar el proceso de reciclaje.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Consejos Parte 3" />
            </div>
          </div>
          {/* Contenedor para cada sección */}
          <div className="content-wrapper">
            <div className="text-content">
              <h4>Parte 4</h4>
              <ul>
                <li>Reduce y reutiliza: Antes de reciclar, considera formas de reducir el consumo de materiales y de reutilizar objetos. Por ejemplo, utiliza botellas de vidrio como recipientes para almacenar alimentos, o convierte periódicos viejos en materiales de embalaje.</li>
              </ul>
            </div>
            <div className="image-content">
              <img src={imagePath} alt="Consejos Parte 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasInformacion;
