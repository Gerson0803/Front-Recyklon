import React, { useState } from 'react';
import GoogleButton from '../../../Components/Button/Button';
import SignUpForm from "./SignUpForm";
import "./SignUp.css";
import LogoSection from "../../../../src/Logo";

function SignUp() {
 
  const updateUserData = (data) => {
    
    console.log('Datos del usuario actualizados:', data);
  };

  const handleRegistrationSuccess = () => {
    
    console.log('¡Registro exitoso! Redirigiendo al usuario...');
   
  };

  return (
    <div className="Darly">
      <div className="Supe">
        <div className="Mateo">
          <div className="Carlos">
            { <LogoSection/> }
         
            <div>
             
              <SignUpForm setUserData={updateUserData} onRegistrationSuccess={handleRegistrationSuccess} />
            </div>
          </div>
        </div>
      
      <div className="Blanco"></div>
    </div>
    </div>
  );
}

export default SignUp;
