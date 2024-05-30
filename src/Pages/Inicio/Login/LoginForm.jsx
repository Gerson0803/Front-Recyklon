import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogoSection from '../../../../src/Logo';
import Button from '../../../../src/Components/Button/Button';
import "./LoginForm.css";

const LoginForm = ({ userImage }) => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(correo, contraseña, "holaaaaaaaaaa");
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                correo: correo,
                contraseña: contraseña,
            });

            if (response.status === 201) {
                // Guardar la información del usuario en el localStorage
                localStorage.setItem('userData', JSON.stringify(response.data));
                console.log("Login successful");
                console.log(response.data);

                // Redirigir a la página del menú después de un inicio de sesión exitoso
                navigate('/Menu');
            } else {
                // Mostrar un mensaje de error al usuario en caso de un inicio de sesión fallido
                setError(response.data?.message || 'Error al iniciar sesión: respuesta no válida');
                console.error('Error al iniciar sesión:', response.data?.message || 'respuesta no válida');
            }
        } catch (error) {
            // Mostrar un mensaje de error al usuario en caso de un error en la solicitud
            setError(error.response?.data?.message || 'Error al iniciar sesión: no se pudo acceder a la respuesta del servidor');
            console.error('Error al iniciar sesión:', error.response?.data || 'no se pudo acceder a la respuesta del servidor');
        }
    };

    return (
        <div className="loginform-container">
            <div className="header-section">
                <img src={userImage} alt="User" className="user-img" />
                <p className="greeting-text">Welcome please login to your account</p>
            </div>
            <div className="greeting-section"></div>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" className="label">
                            Correo Electronico:
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu correo electronico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="input"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="label">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            className="input"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <Button type="submit" texto={"Iniciar sesión"} />
                </form>
                <p>You don't have an account? <a href="#">Sign Up</a></p>
                <LogoSection />
            </div>
        </div>
    );
};

export default LoginForm;
