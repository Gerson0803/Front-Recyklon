import React from "react";
import "./Profile.css";
import UpdateUserComponent from "./UpDateProfile/UpDateProfile";
import DeleteProfile from "./DeleteProfile/DeleteProfile";
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData'); // Elimina los datos del usuario del localStorage
    navigate('/'); // Redirige a la página de inicio o a la página de login
  };

  return (
    <div className="profile-principal-container">
      <div className="profile-content">
        <h2 className="profile-title">Tu Perfil</h2>
        <div className="profile-component">
          <UpdateUserComponent />
        </div>
        <div className="profile-component">
          <DeleteProfile />
        </div>
        <button className="profile-button" onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Profile;
