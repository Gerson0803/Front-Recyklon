import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoSection from "../../../Logo"; // Importa el componente del logo
import Button from "../../../Components/Button/Button";
import MasInformacion from "./MasInformacion"; // Importa el componente MasInformacion
import "./Inicio.css";

const Inicio = () => {
  const [isQueEsOpen, setIsQueEsOpen] = useState(false);
  const [isImportanciaOpen, setIsImportanciaOpen] = useState(false);
  const [isFuncionesOpen, setIsFuncionesOpen] = useState(false);
  const [isImpactoOpen, setIsImpactoOpen] = useState(false);

  const toggleQueEs = () => {
    setIsQueEsOpen(!isQueEsOpen);
  };

  const toggleImportancia = () => {
    setIsImportanciaOpen(!isImportanciaOpen);
  };

  const toggleFunciones = () => {
    setIsFuncionesOpen(!isFuncionesOpen);
  };

  const toggleImpacto = () => {
    setIsImpactoOpen(!isImpactoOpen);
  };

  return (
    <div className="inicio-principal">
      <div className="inicio-container">
        <ul className="inicio-elementos">
          <li>
            <LogoSection /> {/* Agrega el componente del logo */}
          </li>
          <li>Inicio</li>
          <li>Información</li>
          <li>Recursos</li>
          <li>
            <Link to="/Login">
              <Button texto="Login" />
            </Link>

            <Link to="/Sign">
              <Button texto="SignUp" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="contenedor-textos">
        <div className="inicio-texto-contenedor">
          <div className="inicio-texto-principal">
            <p>
              ¡Bienvenido a Recyklon!, tu destino para un consumo consciente y
              sostenible!
            </p>
          </div>
          <div className="inicio-texto-pequeño">
            <p>
              En nuestra plataforma, puedes descubrir una amplia gama de
              productos reciclados, desde muebles hasta accesorios de moda,
              creados con materiales reutilizados y amor por el planeta.
            </p>
          </div>
          <div className="inicio-titulo-que_es" onClick={toggleQueEs}>
            <p>
              ¿Qué es Recyklon?
            </p>
            {isQueEsOpen && (
              <p>
                Recyklon es tu guía personal para el reciclaje, diseñada para hacer que el proceso sea fácil, educativo y un lugar donde podras
                encontrar productos con una gran diversidad de funciones y hechos de elementos reciclables para ayudar al medio ambiente.
              </p>
            )}
          </div>
          <div className="inicio-titulo-importancia_recic" onClick={toggleImportancia}>
            <p>
              ¿Por qué es importante reciclar?
            </p>
            {isImportanciaOpen && (
              <p>
                Reciclar es clave para preservar nuestro planeta. Con Recyklon, puedes aprender sobre la importancia del reciclaje y cómo tu contribución puede marcar la diferencia.
              </p>
            )}
          </div>
          <div className="inicio-titulo-funciones" onClick={toggleFunciones}>
            <p>Funciones principales de Recyklon:</p>
            {isFuncionesOpen && (
              <ul>
                <li>Educación interactiva: Aprende sobre los fundamentos del reciclaje, la importancia de separar los materiales y cómo hacerlo correctamente para maximizar su impacto.</li>
                <li>Rastreo de progreso: Registra tus hábitos de reciclaje y sigue tu progreso para ver cuántos materiales has reciclado y el impacto positivo que has tenido en el medio ambiente.</li>
                <li>Consejos y trucos: Descubre consejos prácticos para reducir residuos, reutilizar objetos y reciclar de manera creativa.</li>
                <li>Localización de puntos de reciclaje: Encuentra fácilmente puntos de reciclaje cercanos a ti, incluyendo contenedores de reciclaje, centros de recogida especializados y programas de recogida selectiva.</li>
              </ul>
            )}
          </div>
          <div className="inicio-texto-ultimo">
            <p>Únete a la comunidad de Recyklon y haz la diferencia hoy mismo.</p>
            <p>Descarga Recyklon y únete a una comunidad comprometida con el cuidado del medio ambiente. ¡Juntos, podemos hacer del mundo un lugar más limpio y sostenible para todos!</p>
            <p>Recuerda, el reciclaje es una de las formas más efectivas de reducir la contaminación y conservar nuestros recursos naturales. ¡Haz tu parte hoy mismo!</p>
          </div>
          <MasInformacion /> {/* Integra el componente MasInformacion */}
        </div>
      </div>
      <div className="footer">
        <p>© 2024 Recyklon. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Inicio;
