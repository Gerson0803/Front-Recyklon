import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IsNotEmpty, IsOptional, IsEnum, Min } from 'class-validator'; // Importa las validaciones necesarias
import { ProductStatus } from '../entities/product.entity';

const CreateProductForm = () => {
  // Estados para almacenar los valores del formulario
  const [nombreProducto, setNombreProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [estado, setEstado] = useState(ProductStatus);
  const [idVendedor, setIdVendedor] = useState('');
  const [cantidadDisponible, setCantidadDisponible] = useState(0);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    // Recuperar el ID del vendedor del localStorage
    const storedIdVendedor = localStorage.getItem('vendedorId');
    if (storedIdVendedor) {
      setIdVendedor(storedIdVendedor);
    }
  }, []); // Se ejecuta solo una vez al cargar el componente

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realiza la solicitud POST al backend para crear un nuevo producto
      const response = await axios.post('http://localhost:3000/products', {
        nombreProducto,
        descripcion,
        precio,
        categorias,
        estado,
        idVendedor,
        cantidadDisponible
      });

      // Maneja la respuesta del backend
      console.log('Nuevo producto creado:', response.data);
    } catch (error) {
      // Maneja errores
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <div className="container">
      <h2>Crear Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombreProducto">Nombre del Producto:</label>
          <input
            type="text"
            id="nombreProducto"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Categorías:</label>
          <div>
            <input
              type="checkbox"
              id="decoracion"
              value="Artículos de decoración y manualidades"
              checked={categorias.includes("Artículos de decoración y manualidades")}
              onChange={(e) =>
                e.target.checked
                  ? setCategorias([...categorias, e.target.value])
                  : setCategorias(
                      categorias.filter((cat) => cat !== e.target.value)
                    )
              }
            />
            <label htmlFor="decoracion">Artículos de decoración y manualidades</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="hogar"
              value="Artículos para el hogar"
              checked={categorias.includes("Artículos para el hogar")}
              onChange={(e) =>
                e.target.checked
                  ? setCategorias([...categorias, e.target.value])
                  : setCategorias(
                      categorias.filter((cat) => cat !== e.target.value)
                    )
              }
            />
            <label htmlFor="hogar">Artículos para el hogar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="muebles"
              value="Muebles y accesorios"
              checked={categorias.includes("Muebles y accesorios")}
              onChange={(e) =>
                e.target.checked
                  ? setCategorias([...categorias, e.target.value])
                  : setCategorias(
                      categorias.filter((cat) => cat !== e.target.value)
                    )
              }
            />
            <label htmlFor="muebles">Muebles y accesorios</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="juguetes"
              value="Juguetes y juegos"
              checked={categorias.includes("Juguetes y juegos")}
              onChange={(e) =>
                e.target.checked
                  ? setCategorias([...categorias, e.target.value])
                  : setCategorias(
                      categorias.filter((cat) => cat !== e.target.value)
                    )
              }
            />
            <label htmlFor="juguetes">Juguetes y juegos</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="accesorios"
              value="Accesorios de moda"
              checked={categorias.includes("Accesorios de moda")}
              onChange={(e) =>
                e.target.checked
                  ? setCategorias([...categorias, e.target.value])
                  : setCategorias(
                      categorias.filter((cat) => cat !== e.target.value)
                    )
              }
            />
            <label htmlFor="accesorios">Accesorios de moda</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="estado">Estado:</label>
          <select
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          >
            <option value={ProductStatus.DISPONIBLE}>Disponible</option>
            <option value={ProductStatus.NO_DISPONIBLE}>No Disponible</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="idVendedor">ID del Vendedor:</label>
          <input
            type="text"
            id="idVendedor"
            value={idVendedor}
            readOnly // Campo de solo lectura
            disabled // Deshabilita la edición
          />
        </div>
        <div className="form-group">
          <label htmlFor="cantidadDisponible">Cantidad Disponible:</label>
          <input
            type="number"
            id="cantidadDisponible"
            value={cantidadDisponible}
            onChange={(e) => setCantidadDisponible(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CreateProductForm;
