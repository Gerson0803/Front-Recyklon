import React from 'react';
import axios from 'axios';
import "./DeleteProfile.css";

const DeleteUserComponent = () => {
  const userId = JSON.parse(localStorage.getItem('userData')).id; // Obtiene el ID del usuario del localStorage

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${userId}`);
      console.log('Usuario eliminado:', response.data);
      // Realiza cualquier acción adicional después de eliminar el usuario, como redireccionar a otra página
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <div className="delete-user-container">
      <h2 className="delete-user-title">Eliminar Usuario</h2>
      <p className="delete-user-text">¿Estás seguro de que deseas eliminar tu usuario?</p>
      <button className="delete-user-button" onClick={deleteUser}>Eliminar Usuario</button>
    </div>
  );
};

export default DeleteUserComponent;
