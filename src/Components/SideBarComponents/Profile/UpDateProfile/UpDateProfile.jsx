import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    // Actualiza el estado local si cambia el localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

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
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Usuario</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" name="apellido" value={userData.apellido} onChange={handleChange} />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" name="correo" value={userData.correo} onChange={handleChange} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="text" name="contraseña" value={userData.contraseña} onChange={handleChange} />
        </div>
        <div>
          <label>Contacto:</label>
          <input type="text" name="contacto" value={userData.contacto} onChange={handleChange} />
        </div>
        <div>
          <label>Tipo de Usuario:</label>
          <input type="text" name="tipoUsuario" value={userData.tipoUsuario} onChange={handleChange} disabled />
        </div>
        <button type="button" onClick={updateUser}>Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateUserComponent;
