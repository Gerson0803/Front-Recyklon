import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditarProducto.css';

const imagenesPorCategoria = {
  'Artículos de decoración y manualidades': 'https://via.placeholder.com/150',
  'Artículos para el hogar': 'https://via.placeholder.com/150',
  'Muebles y accesorios': 'https://via.placeholder.com/150',
  'Juguetes y juegos': 'https://via.placeholder.com/150',
  'Accesorios de moda': 'https://via.placeholder.com/150',
};

const EditarProducto = ({ userId, productId, onClose }) => {
  const [productoData, setProductoData] = useState({
    nombreProducto: '',
    descripcion: '',
    precio: 0,
    estado: 'disponible',
    idVendedor: userId,
    cantidadDisponible: 0,
    imagen: '',
    categoria: '',
  });
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

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
          categoria: producto.categoria || '',
        });
        setCategoriaSeleccionada(producto.categoria || '');
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    obtenerProducto();
  }, [productId, userId]);

  useEffect(() => {
    setCategorias([
      'Artículos de decoración y manualidades',
      'Artículos para el hogar',
      'Muebles y accesorios',
      'Juguetes y juegos',
      'Accesorios de moda',
      'Materia prima',
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

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const precio = parseFloat(productoData.precio);
      const cantidadDisponible = parseInt(productoData.cantidadDisponible);
      const datosAEnviar = {
        ...productoData,
        precio: isNaN(precio) ? 0 : precio,
        cantidadDisponible: isNaN(cantidadDisponible) ? 0 : cantidadDisponible,
      };
      const response = await axios.patch(`http://localhost:3000/products/${productId}`, datosAEnviar);
      console.log('Producto actualizado:', response.data);
      onClose(); // Cierra el modal después de actualizar
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div className='ContentP01'>
      <div className='ContentText1'>
        <h2 className='Tittle1'>Actualizar Producto</h2>
      </div>

      <div className='SelectOption1'>
        <button className='SelectOptionPA' onClick={() => handleOpcionSeleccionada('nombreProducto')}>
          Nombre del Producto
        </button>
        <button className='SelectOptionPA' onClick={() => handleOpcionSeleccionada('descripcion')}>
          Descripción
        </button>
        <button className='SelectOptionPA' onClick={() => handleOpcionSeleccionada('precio')}>
          Precio
        </button>
        <button className='SelectOptionPA' onClick={() => handleOpcionSeleccionada('estado')}>
          Estado
        </button>
        <button className='SelectOptionPA' onClick={() => handleOpcionSeleccionada('cantidadDisponible')}>
          Cantidad Disponible
        </button>
        <button className='SelectOptionPA' onClick={() => handleOpcionSeleccionada('categoria')}>
          Categoría
        </button>
      </div>

      <div className='CenterInput'>
        {opcionSeleccionada === 'nombreProducto' && (
          <div>
            <label>Nombre del Producto:</label>
            <input
              className='RecuadroActP'
              type='text'
              name='nombreProducto'
              value={productoData.nombreProducto}
              onChange={handleChange}
            />
          </div>
        )}

        {opcionSeleccionada === 'descripcion' && (
          <div>
            <label>Descripción:</label>
            <textarea
              className='RecuadroActPD'
              name='descripcion'
              value={productoData.descripcion}
              onChange={handleChange}
            />
          </div>
        )}

        {opcionSeleccionada === 'precio' && (
          <div>
            <label>Precio:</label>
            <input
              className='RecuadroActP'
              type='number'
              name='precio'
              value={productoData.precio}
              onChange={handleChange}
            />
          </div>
        )}

        {opcionSeleccionada === 'estado' && (
          <div>
            <label>Estado:</label>
            <select className='RecuadroActP' name='estado' value={productoData.estado} onChange={handleChange}>
              <option value='disponible'>Disponible</option>
              <option value='vendido'>Vendido</option>
              <option value='reservado'>Reservado</option>
            </select>
          </div>
        )}

        {opcionSeleccionada === 'cantidadDisponible' && (
          <div>
            <label>Cantidad Disponible:</label>
            <input
              className='RecuadroActP'
              type='number'
              name='cantidadDisponible'
              value={productoData.cantidadDisponible}
              onChange={handleChange}
            />
          </div>
        )}

        {opcionSeleccionada === 'categoria' && (
          <div>
            <label>Categoría:</label>
            <div className='category'>
              {categorias.map((categoria, index) => (
                <div key={index}>
                  <input
                    type='radio'
                    id={`${categoria}-${index}`}
                    name='categoria'
                    value={categoria}
                    checked={categoria === categoriaSeleccionada}
                    onChange={handleCategoriaChange}
                  />
                  <label htmlFor={`${categoria}-${index}`}>{categoria}</label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='ButtonAct1'>
        <button className='ButtonAct' type='submit' onClick={handleSubmit}>
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default EditarProducto;
