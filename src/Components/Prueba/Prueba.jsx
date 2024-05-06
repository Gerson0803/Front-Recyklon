import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        if (response.status === 200) {
          setPhotos(response.data);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="photo-gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.url} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
