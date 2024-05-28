// src/Components/UserCards/UserCards.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserCard.css"; // Asegúrate de que este archivo está en el lugar correcto

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div className="user-cards">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <img 
            src={`https://ui-avatars.com/api/?name=${user.nombre}&background=random`} 
            alt={`Avatar of ${user.nombre}`} 
            className="avatar" 
          />
          <h3>{user.nombre}</h3>
          <p>Email: {user.correo}</p>
          <p>Username: {user.usernombre}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
