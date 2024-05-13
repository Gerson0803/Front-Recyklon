import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogoSection from '../../../../src/Logo';
import Button from '../../../../src/Components/Button/Button';
import GoogleButton from '../../../BotonGoogle';

const LoginForm = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                correo: correo,
                contraseña: contraseña,
            });

            if (response.status === 201) {
                // Guardar la información del usuario en el localStorage
                localStorage.setItem('userData', JSON.stringify(response.data));

                // Redirigir a la página del menú después de un inicio de sesión exitoso
                navigate('/Menu');
            } else {
                // Mostrar un mensaje de error al usuario en caso de un inicio de sesión fallido
                console.error('Error al iniciar sesión:', response.data.message);
            }
        } catch (error) {
            // Mostrar un mensaje de error al usuario en caso de un error en la solicitud
            console.error('Error al iniciar sesión:', error.response.data);
        }
    };

    return (
        <div className="loginform-container">
            <div className="header-section">
                <LogoSection />
            </div>
            <div className="greeting-section">
                <p className="greeting-text">Welcome please login to your account</p>
                <GoogleButton />
                <h2 className='lines-decoration'>Login other accounts</h2>
            </div>
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" className="label">
                            Nombre de usuario:
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu nombre de usuario"
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

                    <Button type="submit" texto={"Iniciar sesión"} />
                </form>
                <p>You don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    );
};

export default LoginForm;
