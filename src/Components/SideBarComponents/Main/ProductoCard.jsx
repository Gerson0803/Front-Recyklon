import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import './ProductoCard.css';

function ProductoCard({ producto }) {
  const [showQRCode, setShowQRCode] = useState(false);

  const handlePayment = () => {
    setShowQRCode(true);
  };

  return (
    <div className="producto-card">
      <img src={producto.imagen || 'default-image-url.jpg'} alt={producto.nombre} className="product-image" />
      <div className="producto-content">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p className="price">${producto.precio}</p>
        {!showQRCode && (
          <button onClick={handlePayment}>Pagar</button>
        )}
        {showQRCode && (
          <div className="qr-code">
            <p>Escanea el código QR para realizar el pago:</p>
            <QRCode value={`Producto: ${producto.nombre}, Precio: ${producto.precio}`} size={128} />
          </div>
        )}
      </div>
    </div>
  );
}

ProductoCard.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    imagen: PropTypes.string,
  }).isRequired,
};

export default ProductoCard;
