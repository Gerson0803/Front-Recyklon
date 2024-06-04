import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpDate.css';


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
    
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }

    if (showModal) {
      document.body.classList.add('modal-active');
    } else {
      document.body.classList.remove('modal-active');
    }

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
      const userId = JSON.parse(localStorage.getItem('userData')).id;
      await axios.patch(`http://localhost:3000/users/${userId}`, userData); 
      localStorage.setItem('userData', JSON.stringify(userData)); 
      console.log('Usuario actualizado:', userData);
      alert('Usuario actualizado con éxito.');
      window.location.reload();
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
