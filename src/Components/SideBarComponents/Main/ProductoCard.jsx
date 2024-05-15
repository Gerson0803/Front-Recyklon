// ProductoCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ProductoCard.css';

function ProductoCard({ producto, isGrande }) {
  return (
    <div className={`producto-card ${isGrande ? 'grande' : ''}`}>
      <img src={producto.imagen || 'default-image-url.jpg'} alt={producto.nombre} className="product-image" />
      <div className="producto-content">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <p className="price">${producto.precio}</p>
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

