import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
 
      <h1 className="about-us-heading">Sobre Nosotros</h1>
      
      <p className="about-us-description">¡Bienvenido a nuestro rincón verde, donde la naturaleza inspira tu vida!</p>
      
      <p className="about-us-content">
        En nuestro vivero, nos apasiona conectar a las personas con la frescura de la naturaleza. 
        Nuestra misión es ofrecerte plantas de la mejor calidad que no solo embellezcan tus espacios, 
        sino que también mejoren tu bienestar y promuevan un estilo de vida sostenible.
      </p>

 
      <p className="plant_logo_left">
        <img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="logo" />
      </p>

      <p className="about-us-content">
        Nuestro equipo se dedica a cuidar cada detalle para que cada planta llegue a tu hogar 
        en perfectas condiciones. Ya seas un jardinero experto o estés empezando tu primera 
        colección, estamos aquí para acompañarte en cada paso de tu camino verde.
      </p>

      <p className="about-us-content">
        Únete a nosotros en el objetivo de crear un mundo más saludable. ¡Explora nuestra 
        colección y lleva la belleza natural directamente a tu puerta!
      </p>
    </div>
  );
}

export default AboutUs;