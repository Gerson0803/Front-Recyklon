import React from "react";
import { Link } from "react-router-dom";
import LogoSection from "../../../Logo";
import Button from "../../../Components/Button/Button";
import Informacion from "./Informacion"; // Importa el componente Informacion
import "./Header.css";

const Header = () => {
  return (
    <div className="inicio-container">
      <ul className="inicio-elementos">
        <li>
          <LogoSection />
        </li>
        <li>
          <a href="#" className="active">Inicio</a>
        </li>
        <li>
          <Link to="/Informacion">
            Información
          </Link>
        </li>
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
  );
};

export default Header;
