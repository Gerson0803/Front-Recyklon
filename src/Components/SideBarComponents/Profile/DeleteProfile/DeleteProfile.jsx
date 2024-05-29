import React, { useState } from 'react';
import axios from 'axios';
import './DeleteProfile.css';

// Componente Modal de Confirmación
const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{message}</h3>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Sí</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

// Componente DeleteUserComponent
const DeleteUserComponent = () => {
  const userId = JSON.parse(localStorage.getItem('userData')).id; // Obtiene el ID del usuario del localStorage

  const [showModal, setShowModal] = useState(false);

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${userId}`);
      console.log('Usuario eliminado:', response.data);
      alert('Usuario eliminado con éxito.');
      window.location.href = '/'; // Redirecciona al usuario a la página de inicio
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      alert('Hubo un error al eliminar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    deleteUser();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="delete-user-container">
      <h2 className="delete-user-title">Eliminar Usuario</h2>
      <p className="delete-user-text">¿Estás seguro de que deseas eliminar tu usuario?</p>
      <button className="delete-user-button" onClick={handleDeleteClick}>Eliminar Usuario</button>
      {showModal && (
        <ConfirmationModal 
          message="¿Estás seguro de que deseas eliminar tu usuario?" 
          onConfirm={handleConfirm} 
          onCancel={handleCancel} 
        />
      )}
    </div>
  );
};

export default DeleteUserComponent;
