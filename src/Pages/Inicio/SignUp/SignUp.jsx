import React, { useState } from 'react';
import GoogleButton from '../../../Components/Button/Button';
import SignUpForm from "./SignUpForm";
import "./SignUp.css";
import LogoSection from "../../../../src/Logo";

function SignUp() {
  // No necesitas declarar userData si no la vas a utilizar
  // const [userData, setUserData] = useState(null);

  // Define una función para actualizar los datos del usuario
  const updateUserData = (data) => {
    // Actualiza el estado userData con los nuevos datos del usuario
    // setUserData(data);
    // Aquí puedes manejar cualquier otra lógica relacionada con la actualización de los datos del usuario
    console.log('Datos del usuario actualizados:', data);
  };

  // Define una función para manejar el registro exitoso
  const handleRegistrationSuccess = () => {
    // Aquí puedes realizar acciones adicionales después de que el usuario se registre correctamente
    console.log('¡Registro exitoso! Redirigiendo al usuario...');
    // Por ejemplo, redirige al usuario a la página de inicio
    // history.push('/');
  };

  return (
    <div className="Darly">
      <div className="Supe">
        <div className="Mateo">
          <div className="Carlos">
            { <LogoSection/> }
         
            <div>
              {/* Pasa la función updateUserData como prop al componente SignUpForm */}
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
