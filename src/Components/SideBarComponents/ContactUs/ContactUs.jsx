import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1 className="contact-us-title">Contact Us</h1>
        <p className="contact-us-description">
          ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte!
          Por favor, completa el formulario a continuación y nos pondremos en
          contacto contigo lo antes posible.
        </p>
        <form className="contact-us-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
