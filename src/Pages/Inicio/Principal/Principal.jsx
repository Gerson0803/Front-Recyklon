// Principal.js
import React, { useState, useEffect } from "react";
import NavBar from "../../../Components/Navbar/NavBar";
import FormularioProducto from "../../../Components/Productos/CrearProductos/CrearProductos";
import SideBar from "../../../Layouts/SideBar/SideBar";
import Inicio from "../../../Components/SideBarComponents/Main/Main";
import ShoppingCart from "../../../Components/SideBarComponents/ShoppingCart/ShoppingCart";
import Shop from "../../../Components/SideBarComponents/Shop/Shop";
import Community from "../../../Components/SideBarComponents/Community/Community";
import Profile from "../../../Components/SideBarComponents/Profile/Profile";
import ContactUs from "../../../Components/SideBarComponents/ContactUs/ContactUs";
import "./Principal.css";

function Principal() {
  const [userData, setUserData] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    // Obtener datos del localStorage al cargar el componente
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    setUserData(userDataFromLocalStorage);
  
    // No se define ninguna función de limpieza para evitar que los datos se eliminen del localStorage
  }, []);
  
  const handleSidebarItemClick = (section) => {
    setSelectedSection(section);
  };

  let componentToRender;
  switch (selectedSection) {
    case "Inicio":
      componentToRender = <Inicio />;
      break;
    case "ShoppingCart":
      componentToRender = <ShoppingCart />;
      break;
    case "Shop":
      componentToRender = <FormularioProducto/>;
      break;
    case "Community":
      componentToRender = <Community />;
      break;
    case "Profile":
      componentToRender = <Profile />;
      break;
    case "ContactUs":
      componentToRender = <ContactUs />;
      break;
    default:
      componentToRender = <Shop/>;
  }

  return (
    <div className="principal">
      <div className="principal-container-menu">
        <SideBar nombre={userData ? userData.nombre : "Sapa"} onSidebarItemClick={handleSidebarItemClick} />
      </div>
      <NavBar />
      <div className="principal-content">{componentToRender}</div>
    </div>
  );
}

export default Principal;
