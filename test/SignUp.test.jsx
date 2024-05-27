// import React from 'react';
// import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
// import MockAdapter from 'axios-mock-adapter';
// import SignUpForm from '../src/Pages/Inicio/SignUp/SignUpForm'; 

// jest.mock('axios');

// it('submits the form and redirects on success', async () => {
//     const userData = {
//       nombre: 'Gerson',
//       apellido: 'Zambrano',
//       correo: 'gersonzambranoeg@gmail.com',
//       contraseña: 'password123',
//       tipoUsuario: 'normal',
//       contacto: '1234567890'
//     };
  
   
//     const setUserDataMock = jest.fn();
  
    
//     render(
//       <BrowserRouter>
//         <SignUpForm setUserData={setUserDataMock} />
//       </BrowserRouter>
//     );

   
//     const mock = new MockAdapter(axios);

  
//     mock.onPost('http://localhost:3000/auth/register').reply(200, { message: 'Usuario registrado correctamente' });
  
//     // Simula el llenado del formulario
//     fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: userData.nombre } });
//     fireEvent.change(screen.getByLabelText('Apellido:'), { target: { value: userData.apellido } });
//     fireEvent.change(screen.getByLabelText('Correo:'), { target: { value: userData.correo } });
//     fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: userData.contraseña } });
//     fireEvent.change(screen.getByLabelText('Contacto:'), { target: { value: userData.contacto } });
  
    
//     fireEvent.submit(screen.getByRole('button', { name: 'Registrarse' }));
  
    
//     await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  
    
//     expect(axios.post).toHaveBeenCalledWith(
//       'http://localhost:3000/auth/register',
//       userData
//     );
  
   
//     expect(setUserDataMock).toHaveBeenCalled();
// });
