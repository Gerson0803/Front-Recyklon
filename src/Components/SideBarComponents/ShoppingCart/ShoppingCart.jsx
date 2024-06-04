import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditarProducto from "./EditarProducto";
import "./ShoppingCart.css";

const ShoppingCart = ({ userId }) => {
  const [productos, setProductos] = useState([]);
  const [mostrarEditarProducto, setMostrarEditarProducto] = useState(false);
  const [productoIdEditar, setProductoIdEditar] = useState(null);

  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log('Datos recibidos del servidor:', response.data);
      const productosDelUsuario = response.data.filter(producto => producto.vendedor && producto.vendedor.id === userId);
      console.log('Productos filtrados del usuario:', productosDelUsuario);
      setProductos(productosDelUsuario);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, [userId]);

  const handleEliminarProducto = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      setProductos(productos.filter((producto) => producto.id !== productId));
      console.log("Producto eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const handleEditarProducto = (productId) => {
    setProductoIdEditar(productId);
    setMostrarEditarProducto(true);
  };

  const handleCloseEditarProducto = () => {
    setMostrarEditarProducto(false);
    fetchProductos();  
  };

  return (
    <div className="ShoppingCart-container">
      <div className="ShoppingCart-content">
        <h2>Mis productos</h2>
        <div className="ShoppingTable-container">
          <table className="ShoppingTable">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <td>
                    <img
                      src={producto.imagen}
                      alt={producto.nombreProducto}
                      className="ShoppingTable-image"
                    />
                  </td>
                  <td>{producto.nombreProducto}</td>
                  <td>{producto.descripcion}</td>
                  <td>${producto.precio}</td>
                  <td className="ShoppingTable-buttons">
                    <button
                      className="edit-button"
                      onClick={() => handleEditarProducto(producto.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleEliminarProducto(producto.id)}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {mostrarEditarProducto && (
        <div className="ProductModal">
          <div className="ProductModal-content">
            <div className="ProductBotton">
              <span className="ProductClose" onClick={handleCloseEditarProducto}>
                &times;
              </span>
            </div>
            <EditarProducto
              userId={userId}
              productId={productoIdEditar}
              onClose={handleCloseEditarProducto}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
