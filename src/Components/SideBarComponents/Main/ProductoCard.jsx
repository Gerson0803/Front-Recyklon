import React from 'react';
import PropTypes from 'prop-types';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import './ProductoCard.css';

function ProductoCard({ producto, isGrande }) {
  const paypalOptions = {
    'client-id': 'AQqxR1D1uErDpjoA7Q26HaOycUfZ-yMtek5fafaV4cAmD_PhA5v1gk-bq4pM6jianG7M_cWyqUfZqqIM', // Client ID de tu cuenta de Sandbox
    currency: 'USD', // Moneda en la que se realizarán los pagos
  };

  const handlePaymentSuccess = (details, data) => {
    console.log('Pago exitoso:', details, data);
    // Aquí puedes manejar la lógica después de que el pago haya sido exitoso
  };

  return (
    <div className={`producto-card ${isGrande ? 'grande' : ''}`}>
      <img src={producto.imagen || 'default-image-url.jpg'} alt={producto.nombre} className="product-image" />
      <div className="producto-content">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p className="price">${producto.precio}</p>
        <PayPalScriptProvider options={paypalOptions}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: producto.precio,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function(details) {
                handlePaymentSuccess(details, data);
              });
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}

ProductoCard.propTypes = {
  producto: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string,
  }).isRequired,
  isGrande: PropTypes.bool, // Propiedad para indicar si es el contenedor grande
};

ProductoCard.defaultProps = {
  isGrande: false, // Por defecto, no es el contenedor grande
};

export default ProductoCard;
