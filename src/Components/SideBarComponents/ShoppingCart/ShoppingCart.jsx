import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditarProducto from "./EditarProducto"; // Suponiendo que tengas un componente para editar productos
import "./ShoppingCart.css";

const ShoppingCart = ({ userId }) => {
  const [productos, setProductos] = useState([]);
  const [mostrarEditarProducto, setMostrarEditarProducto] = useState(false);
  const [productoIdEditar, setProductoIdEditar] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const productosDelUsuario = response.data.filter(
          (producto) => producto.vendedor.id === userId
        );
        setProductos(productosDelUsuario);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
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
    setProductoIdEditar(productId); // Guarda el ID del producto a editar
    setMostrarEditarProducto(true); // Muestra la ventana emergente para editar el producto
  };

  const handleCloseEditarProducto = () => {
    setMostrarEditarProducto(false); // Oculta la ventana emergente para editar el producto
  };

  return (
    <div className="ShoppingCart-container">
      <div className="ShoppingCart-content">
        <h2>Lista de Productos del Usuario</h2>
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
                      className="edit-button" // Clase para el botón de editar
                      onClick={() => handleEditarProducto(producto.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="delete-button" // Clase para el botón de eliminar
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
        <div className="ShoppingModal">
          <div className="ShoppingModal-content">
            <span className="ShoppingClose" onClick={handleCloseEditarProducto}>
              &times;
            </span>
            <EditarProducto
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
