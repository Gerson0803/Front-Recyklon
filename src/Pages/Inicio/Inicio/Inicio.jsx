import React from "react";
import { Link } from "react-router-dom";

import LogoSection from "../../../Logo"; // Importa el componente del logo
import "./Inicio.css";
import Button from "../../../Components/Button/Button";

const Inicio = () => {
  return (
    <div className="inicio-principal">
      <div className="inicio-container">
        <ul className="inicio-elementos">
          <li>
            <LogoSection /> {/* Agrega el componente del logo */}
          </li>
          <li>Inicio</li>
          <li>Informacion</li>
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
              {" "}
              En nuestra plataforma, puedes descubrir una amplia gama de
              productos reciclados, desde muebles hasta accesorios de moda,
              creados con materiales reutilizados y amor por el planeta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
