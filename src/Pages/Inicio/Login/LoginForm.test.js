import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; 
import { MemoryRouter } from 'react-router-dom'; 
import LoginForm from './LoginForm';


jest.mock('axios');
axios.post.mockResolvedValue({ status: 201, data:  });

describe('LoginForm', () => {
  it('debería manejar el inicio de sesión exitoso y redirigir al usuario al menú', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <LoginForm userImage="ruta/de/imagen.jpg" />
      </MemoryRouter>
    );

  
    fireEvent.change(getByLabelText('Correo Electronico:'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Contraseña:'), { target: { value: 'password123' } });

   
    fireEvent.submit(getByText('Iniciar sesión'));

    
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/auth/login', {
        correo: 'test@example.com',
        contraseña: 'password123',
      });
    });

    
    expect(window.location.pathname).toBe('/Menu');
  });

  
});
