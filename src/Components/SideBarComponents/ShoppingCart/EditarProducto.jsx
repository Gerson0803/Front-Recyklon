import React, { useState, useEffect } from 'react';
import axios from 'axios';

const imagenesPorCategoria = {
  'Artículos de decoración y manualidades': 'https://via.placeholder.com/150',
  'Artículos para el hogar': 'https://via.placeholder.com/150',
  'Muebles y accesorios': 'https://via.placeholder.com/150',
  'Juguetes y juegos': 'https://via.placeholder.com/150',
  'Accesorios de moda': 'https://via.placeholder.com/150',
};

const EditarProducto = ({ userId, productId }) => {
  const [productoData, setProductoData] = useState({
    nombreProducto: '',
    descripcion: '',
    precio: 0,
    estado: '',
    idVendedor: userId,
    cantidadDisponible: 0,
    imagen: '',
  });
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        const producto = response.data;
        setProductoData({
          nombreProducto: producto.nombreProducto,
          descripcion: producto.descripcion,
          precio: producto.precio,
          estado: producto.estado,
          idVendedor: producto.idVendedor || userId,
          cantidadDisponible: producto.cantidadDisponible,
          imagen: producto.imagen || '',
        });
        setCategoriaSeleccionada(producto.categoria || '');
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    obtenerProducto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCategorias([
      'Artículos de decoración y manualidades',
      'Artículos para el hogar',
      'Muebles y accesorios',
      'Juguetes y juegos',
      'Accesorios de moda',
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoData({ ...productoData, [name]: value });
  };

  const handleCategoriaChange = (e) => {
    const { value } = e.target;
    setCategoriaSeleccionada(value);
    setProductoData({ ...productoData, imagen: imagenesPorCategoria[value], categoria: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const precio = parseFloat(productoData.precio);
      const cantidadDisponible = parseInt(productoData.cantidadDisponible);
      const datosAEnviar = {
        nombreProducto: productoData.nombreProducto,
        descripcion: productoData.descripcion,
        precio: isNaN(precio) ? 0 : precio,
        categoria: categoriaSeleccionada,
        estado: productoData.estado,
        idVendedor: userId,
        cantidadDisponible: isNaN(cantidadDisponible) ? 0 : cantidadDisponible,
        imagen: productoData.imagen,
      };
      const response = await axios.patch(`http://localhost:3000/products/${productId}`, datosAEnviar);

      console.log('Producto actualizado:', response.data);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input type="text" name="nombreProducto" value={productoData.nombreProducto} onChange={handleChange} />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea name="descripcion" value={productoData.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" name="precio" value={productoData.precio} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={productoData.estado} onChange={handleChange} />
        </div>
        <div>
          <label>ID del Vendedor:</label>
          <input type="number" name="idVendedor" value={productoData.idVendedor} onChange={handleChange} readOnly />
        </div>
        <div>
          <label>Cantidad Disponible:</label>
          <input type="number" name="cantidadDisponible" value={productoData.cantidadDisponible} onChange={handleChange} />
        </div>
        <div>
          <label>Categoría:</label>
          {categorias.map((categoria, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`${categoria}-${index}`}
                name="categoria"
                value={categoria}
                checked={categoria === categoriaSeleccionada}
                onChange={handleCategoriaChange}
              />
              <label htmlFor={`${categoria}-${index}`}>{categoria}</label>
            </div>
          ))}
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditarProducto;
