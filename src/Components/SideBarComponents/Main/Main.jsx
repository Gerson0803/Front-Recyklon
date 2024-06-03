import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoCard from './ProductoCard';
import "./Main.css";

function Inicio({ userId }) {
  const [productos, setProductos] = useState([]);
  const [indiceProductoActual, setIndiceProductoActual] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products?userId=${userId}`);
        console.log('Productos recibidos:', response.data);
        setProductos(response.data);
      } catch (error) {
        setError('Error al obtener los productos');
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProductos();
  }, [userId]);

  useEffect(() => {
    if (productos.length > 0) {
      const interval = setInterval(() => {
        setIndiceProductoActual((prevIndice) => (prevIndice + 1) % productos.length);
      }, 5000); // Cambia de producto cada 5 segundos

      return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }
  }, [productos.length]);

  return (
    <div className="inicio">
      <h1>Inicio</h1>
      {error && <p className="error">{error}</p>}
      <div className="producto-actual">
        {productos.length > 0 ? (
          <ProductoCard producto={productos[indiceProductoActual]} isPrimero />
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
      <h2>Productos</h2>
      <div className="todos-los-productos">
        {productos.map((producto, index) => (
          <ProductoCard key={producto.id} producto={producto} isPrimero={index === indiceProductoActual} />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
