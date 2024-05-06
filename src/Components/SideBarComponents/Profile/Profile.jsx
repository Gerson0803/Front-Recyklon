import React from "react";
import "./Profile.css"
import UpdateUserComponent from "./UpDateProfile/UpDateProfile";
import DeleteProfile from "./DeleteProfile/DeleteProfile";
function Profile() {
  return <>
    <div className="profile-principal-container">
      <div className="profile-content">
        <UpdateUserComponent/>
        <DeleteProfile/>
      </div>
    </div>
  </>;
}

export default Profile;
