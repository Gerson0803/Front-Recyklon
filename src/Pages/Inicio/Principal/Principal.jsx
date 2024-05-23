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

const Principal = () => {
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : {};
  });
  const [selectedSection, setSelectedSection] = useState("Shop");

  const handleSidebarItemClick = (section) => {
    setSelectedSection(section);
  };

  let componentToRender;
  console.log("Datos del usuario:", userData);
  switch (selectedSection) {
    case "Inicio":
      componentToRender = <Inicio userId={userData?.id} />;
      break;
    case "ShoppingCart":
      componentToRender = <ShoppingCart userId={userData?.id} />;
      break;
    case "Shop":
      componentToRender = <FormularioProducto userId={userData?.id} />;
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
      componentToRender = <Shop />;
  }

  return (
    <div className="principal">
      <SideBar nombre={userData?.nombre || "vacio"} onSidebarItemClick={handleSidebarItemClick} />
      <div className="principal-main">
        <div className="principal-content">{componentToRender}</div>
      </div>
    </div>
  );
};

export default Principal;
