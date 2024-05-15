import React from "react";
import "./Profile.css";
import UpdateUserComponent from "./UpDateProfile/UpDateProfile";
import DeleteProfile from "./DeleteProfile/DeleteProfile";

function Profile() {
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
        <button className="profile-button">Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Profile;
