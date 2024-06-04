import react, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CrearProductos.css"

const imagenesPorCategoria = {
  'Artículos de decoración y manualidades': 'https://d2z8zvwx6itreb.cloudfront.net/fomentando-el-reciclaje-en-los-ninos-a-traves-del-arte-y-las-manualidades-large-R22zbK53PO.jpg',
  'Artículos para el hogar': 'https://educowebmedia.blob.core.windows.net/educowebmedia/educospain/media/images/blog/reciclaje-macetas.jpg',
  'Muebles y accesorios': 'https://connectionsbyfinsa.com/wp-content/uploads/2018/03/ConnectionsbyFinsa-muebles-reciclaje-woojai-papel.jpg',
  'Juguetes y juegos': 'https://sentinelcat.com/wp-content/uploads/2023/03/juguetes-reciclados-originales.jpg',
  'Accesorios de moda': 'https://i.pinimg.com/736x/7c/d2/d9/7cd2d92fca7bdfb6f1ea9a75254b6929.jpg ',
};

const FormularioProducto = ({ userId }) => {
  const [productoData, setProductoData] = useState({
    nombreProducto: '',
    descripcion: '',
    precio: 0,
    estado: '',
    idVendedor: userId,
    cantidadDisponible: 0,
    imagen: ''
  });
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

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

  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setProductoData({ ...productoData, imagen: imagenesPorCategoria[categoria] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const precio = parseFloat(productoData.precio);
      const cantidadDisponible = parseInt(productoData.cantidadDisponible);

      const datosAEnviar = {
        nombreProducto: productoData.nombreProducto,
        descripcion: productoData.descripcion,
        precio: precio,
        categoria: categoriaSeleccionada,
        estado: productoData.estado,
        idVendedor: productoData.idVendedor,
        cantidadDisponible: cantidadDisponible,
        imagen: productoData.imagen
      };

      const response = await axios.post('http://localhost:3000/products', datosAEnviar);
      console.log('Producto creado:', response.data);
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <div className="FormularioProducto-container">
      <div className="FormularioProducto-content">
        <h2>Crear Nuevo Producto</h2>
        <form onSubmit={handleSubmit} className="FormularioProducto-form">
          <div className="form-group">
            <label>Nombre del Producto:</label>
            <input type="text" name="nombreProducto" value={productoData.nombreProducto} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea name="descripcion" value={productoData.descripcion} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Precio:</label>
            <input type="number" name="precio" value={productoData.precio} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Estado:</label>
            <input type="text" name="estado" value={productoData.estado} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Cantidad Disponible:</label>
            <input type="number" name="cantidadDisponible" value={productoData.cantidadDisponible} onChange={handleChange} />
          </div>
          <div className="form-group categoria-group">
            <label>Categoría:</label>
            <div className="categoria-grid">
              {categorias.map((categoria, index) => (
                <div
                  key={index}
                  className={`categoria-item ${categoria === categoriaSeleccionada ? 'selected' : ''}`}
                  onClick={() => handleCategoriaChange(categoria)}
                >
                  {categoria}
                </div>
              ))}
            </div>
          </div>
          <button type="submit">Crear Producto</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioProducto;
