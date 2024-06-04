import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "../src/Pages/Inicio/Login/LoginForm.jsx";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";



describe("LoginForm", () => {
  it("Envía el formulario y redirige en caso de éxito", async () => {
    render(<LoginForm />);

    const mock = new MockAdapter(axios);

    mock
      .onPost("http://localhost:3000/login")
      .reply(200, { message: "Inicio de sesión exitoso" });

    fireEvent.change(screen.getByLabelText("Nombre de usuario:"), {
      target: { value: "usuario" },
    });
    fireEvent.change(screen.getByLabelText("Contraseña:"), {
      target: { value: "contraseña" },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Iniciar sesión" }));

    await waitFor(() =>
      expect(require("react-router-dom").useNavigate).toHaveBeenCalledTimes(1)
    );

    expect(require("react-router-dom").useNavigate).toHaveBeenCalledWith(
      "/Menu"
    );
  });
});
