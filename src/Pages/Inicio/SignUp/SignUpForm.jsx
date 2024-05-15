import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './SignUpForm.css';

const SignUpForm = () => {
    // Estados para almacenar los valores del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('normal');

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           
            const response = await axios.post('http://localhost:3000/auth/register', {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                contraseña: contraseña,
                tipoUsuario: tipoUsuario
            });

            // Manejar la respuesta del backend
            console.log('Respuesta del backend:', response.data);
        } catch (error) {
            // Manejar errores
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        placeholder="Ingresa tu apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="correo">Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        placeholder="Ingresa tu correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input
                        type="password"
                        id="contraseña"
                        name="contraseña"
                        placeholder="Ingresa tu contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
                    <select
                        id="tipoUsuario"
                        name="tipoUsuario"
                        value={tipoUsuario}
                        onChange={(e) => setTipoUsuario(e.target.value)}
                    >
                        <option value="normal">Normal</option>
                        <option value="corporativo">Corporativo</option>
                    </select>
                </div>
                <button type="submit" className="button">
                    <span className="button-text">Registrarse</span>
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
                </button>
            </form>
            <p className="small-text">
                ¿Ya tienes una cuenta? <a href="/Login">Iniciar sesión</a>
            </p>
        </div>
    );
};

export default SignUpForm;