import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faShoppingCart,
  faShop,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";


function SideBar({ nombre, onSidebarItemClick }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleItemClick = (section) => {
    setSelectedSection(section);
    onSidebarItemClick(section);
  };

  return (
    <div className="sidebar-menu_content">
      <div className="sidebar-user_container">
        <div className="sidebar-item">
          
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="sidebar-item">
          <p>{nombre}</p>
        </div>
      </div>
      <div className="sidebar-elementos">
        <h3>Menu</h3>
        <div
          className={`sidebar-elemento ${
            selectedSection === "Inicio" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Inicio")}
        >
          <div className="sidebar-division">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div className="sidebar-division">
            <span>Inicio</span>
          </div>
        </div>
        <div
          className={`sidebar-elemento ${
            selectedSection === "ShoppingCart" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("ShoppingCart")}
        >
          <div className="sidebar-division">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="sidebar-division">
            <span>Shopping Cart</span>
          </div>
        </div>
        <div
          className={`sidebar-elemento ${
            selectedSection === "Shop" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Shop")}
        >
          <div className="sidebar-division">
            <FontAwesomeIcon icon={faShop} />
          </div>
          <div className="sidebar-division">
            <span>Shop</span>
          </div>
        </div>
        <div
          className={`sidebar-elemento ${
            selectedSection === "Community" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Community")}
        >
          <div className="sidebar-division">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="sidebar-division">
            <span>Community</span>
          </div>
        </div>
      </div>
      <div className="sidebar-elementos">
        <h3>Settings</h3>
        <div
          className={`sidebar-elemento ${
            selectedSection === "Profile" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("Profile")}
        >
          <div className="sidebar-division">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="sidebar-division">
            <span>Profile</span>
          </div>
        </div>
        <div
          className={`sidebar-elemento ${
            selectedSection === "ContactUs" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("ContactUs")}
        >
          <div className="sidebar-division">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="sidebar-division">
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  nombre: PropTypes.string.isRequired,
  onSidebarItemClick: PropTypes.func.isRequired,
};

export default SideBar;
