// Login.js
import React from 'react';

import './Login.css';
import LoginForm from './LoginForm';

function Login() {
    return (
        <div className="login-principal">
            <div className="login-container-left"></div>
            <div className="login-container-right">
                <div className="login-container-form">
                    <div className="login-container-content">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
