import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios'; // Mockear axios para simular solicitudes HTTP
import { MemoryRouter } from 'react-router-dom'; // Utilizar MemoryRouter para simular la navegación
import LoginForm from './LoginForm';

// Mockear axios.post para simular una respuesta exitosa
jest.mock('axios');
axios.post.mockResolvedValue({ status: 201, data: { /* datos de usuario simulados */ } });

describe('LoginForm', () => {
  it('debería manejar el inicio de sesión exitoso y redirigir al usuario al menú', async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <LoginForm userImage="ruta/de/imagen.jpg" />
      </MemoryRouter>
    );

    // Simular entrada de usuario
    fireEvent.change(getByLabelText('Correo Electronico:'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText('Contraseña:'), { target: { value: 'password123' } });

    // Simular envío de formulario
    fireEvent.submit(getByText('Iniciar sesión'));

    // Esperar a que se complete la solicitud
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/auth/login', {
        correo: 'test@example.com',
        contraseña: 'password123',
      });
    });

    // Verificar que se redirija al usuario al menú
    expect(window.location.pathname).toBe('/Menu');
  });

  // También puedes escribir pruebas similares para manejar casos de error y mostrar mensajes de error al usuario
});
