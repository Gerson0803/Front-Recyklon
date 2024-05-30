import React from 'react';
import './Login.css';
import LoginForm from './LoginForm';
import Imagen from './Oficial.jpg';
import User from './User.png';

function Login() {
    return (
        <div className="login-principal">
            <div className="login-division">
                <div className="login-division-left">
                    <img src={Imagen} alt="Carrito" className="login-img" />
                </div>
                <div className="login-division-right">
                    <LoginForm userImage={User} />
                </div>
            </div>
        </div>
    );
}

export default Login;
