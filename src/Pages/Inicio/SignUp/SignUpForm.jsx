import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './SignUpForm.css';

const SignUpForm = ({ setUserData }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('normal');
    const [contacto, setContacto] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const dataToSend = {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                contraseña: contraseña,
                tipoUsuario: tipoUsuario,
                contacto: contacto
            };

            console.log('Datos enviados al endpoint:', dataToSend);

            const response = await axios.post('http://localhost:3000/auth/register', dataToSend);
            
            console.log('Respuesta del backend:', response.data);

            setRegistrationSuccess(true);
            setUserData(response.data);

            // Redirigir a la página del menú
            navigate('/Menu');

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    if (registrationSuccess) {
        // No se renderiza nada aquí porque ya redirigimos al menú
        return null;
    }

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
                    <label htmlFor="contacto">Contacto:</label>
                    <input
                        type="text"
                        id="contacto"
                        name="contacto"
                        placeholder="Ingresa tu contacto"
                        value={contacto}
                        onChange={(e) => setContacto(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="tipoUsuario"
                                value="normal"
                                checked={tipoUsuario === "normal"}
                                onChange={() => setTipoUsuario("normal")}
                            />
                            Normal
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="tipoUsuario"
                                value="corporativo"
                                checked={tipoUsuario === "corporativo"}
                                onChange={() => setTipoUsuario("corporativo")}
                            />
                            Corporativo
                        </label>
                    </div>
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

SignUpForm.propTypes = {
    setUserData: PropTypes.func.isRequired
};

export default SignUpForm;
