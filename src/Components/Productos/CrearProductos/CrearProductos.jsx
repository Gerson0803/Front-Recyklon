

import React, { useState } from 'react';
import axios from 'axios';

const FormularioProducto = () => {
  const [productoData, setProductoData] = useState({
    nombreProducto: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    estado: '',
    idVendedor: 0,
    cantidadDisponible: 0,
    imagen: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoData({ ...productoData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imagen = e.target.files[0];
    setProductoData({ ...productoData, imagen: imagen });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('nombreProducto', productoData.nombreProducto);
      formData.append('descripcion', productoData.descripcion);
      formData.append('precio', productoData.precio);
      formData.append('categoria', productoData.categoria);
      formData.append('estado', productoData.estado);
      formData.append('idVendedor', productoData.idVendedor);
      formData.append('cantidadDisponible', productoData.cantidadDisponible);
      formData.append('imagen', productoData.imagen);
      
      const response = await axios.post('http://localhost:3000/products', formData);
      console.log('Producto creado:', response.data);
    } catch (error) {
      console.error('Error al crear el producto:', error);
    
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Producto</h2>
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
          <label>Categoría:</label>
          <input type="text" name="categoria" value={productoData.categoria} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={productoData.estado} onChange={handleChange} />
        </div>
        <div>
          <label>ID del Vendedor:</label>
          <input type="number" name="idVendedor" value={productoData.idVendedor} onChange={handleChange} />
        </div>
        <div>
          <label>Cantidad Disponible:</label>
          <input type="number" name="cantidadDisponible" value={productoData.cantidadDisponible} onChange={handleChange} />
        </div>
        <div>
          <label>Imagen del Producto:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default FormularioProducto;

