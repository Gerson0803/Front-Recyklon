import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpDate.css';

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

// Componente UpdateUserComponent
const UpdateUserComponent = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData')) || {
      nombre: '',
      apellido: '',
      correo: '',
      contraseña: '',
      tipoUsuario: '',
      contacto: '',
    }
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Actualiza el estado local si cambia el localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }

    // Añadir o quitar la clase de fondo gris al body
    if (showModal) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }

    // Limpiar la clase del body cuando el componente se desmonte
    return () => {
      document.body.classList.remove('modal-active');
    };
  }, [showModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateUser = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('userData')).id; // Obtiene el ID del usuario del localStorage
      await axios.patch(`http://localhost:3000/users/${userId}`, userData); // Utiliza el ID del usuario en la solicitud PATCH
      localStorage.setItem('userData', JSON.stringify(userData)); // Actualiza los datos en el almacenamiento local
      console.log('Usuario actualizado:', userData);
      alert('Usuario actualizado con éxito.');
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
      alert('Hubo un error al actualizar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    updateUser();
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="update-user-container">
      <h2 className="update-user-title">Actualizar Usuario</h2>
      <form>
        <div className="update-user-input">
          <label className="update-user-label">Nombre:</label>
          <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} />
        </div>
        <div className="update-user-input">
          <label className="update-user-label">Apellido:</label>
          <input type="text" name="apellido" value={userData.apellido} onChange={handleChange} />
        </div>
        <div className="update-user-input">
          <label className="update-user-label">Correo:</label>
          <input type="email" name="correo" value={userData.correo} onChange={handleChange} />
        </div>
        <div className="update-user-input">
          <label className="update-user-label">Contraseña:</label>
          <input type="password" name="contraseña" value={userData.contraseña} onChange={handleChange} />
        </div>
        <div className="update-user-input">
          <label className="update-user-label">Contacto:</label>
          <input type="text" name="contacto" value={userData.contacto} onChange={handleChange} />
        </div>
        <div className="update-user-input">
          <label className="update-user-label">Tipo de Usuario:</label>
          <input type="text" name="tipoUsuario" value={userData.tipoUsuario} onChange={handleChange} disabled />
        </div>
        <button type="button" className="update-user-button" onClick={handleUpdateClick}>Actualizar</button>
      </form>
      {showModal && (
        <ConfirmationModal 
          message="¿Estás seguro de que quieres actualizar tus datos?" 
          onConfirm={handleConfirm} 
          onCancel={handleCancel} 
        />
      )}
    </div>
  );
};

export default UpdateUserComponent;
