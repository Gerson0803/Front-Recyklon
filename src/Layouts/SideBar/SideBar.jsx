// SideBar.js
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

const SideBar = ({ nombre, onSidebarItemClick }) => {
  const [selectedSection, setSelectedSection] = useState("Inicio");

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
        {[
          { label: "Inicio", icon: faHome },
          { label: "ShoppingCart", icon: faShoppingCart },
          { label: "Shop", icon: faShop },
          { label: "Community", icon: faUsers },
        ].map(({ label, icon }) => (
          <div
            key={label}
            className={`sidebar-elemento ${selectedSection === label ? "selected" : ""}`}
            onClick={() => handleItemClick(label)}
          >
            <div className="sidebar-division">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="sidebar-division">
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar-elementos">
        <h3>Settings</h3>
        {[
          { label: "Profile", icon: faUser },
          { label: "ContactUs", icon: faEnvelope },
        ].map(({ label, icon }) => (
          <div
            key={label}
            className={`sidebar-elemento ${selectedSection === label ? "selected" : ""}`}
            onClick={() => handleItemClick(label)}
          >
            <div className="sidebar-division">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="sidebar-division">
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  nombre: PropTypes.string.isRequired,
  onSidebarItemClick: PropTypes.func.isRequired,
};

export default React.memo(SideBar);
