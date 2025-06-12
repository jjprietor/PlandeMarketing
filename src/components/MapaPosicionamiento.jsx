import './MapaPosicionamiento.css';
import posicionamientoImg from '../assets/MapaDePosicionamiento.png';
import { useState } from 'react';

function MapaPosicionamiento() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <section className="mapa-posicionamiento" id="mercado">
      <h2>Posicionamiento en el Mercado</h2>
      <p className="mapa-desc">
        A diferencia de las soluciones pasivas, Coolshield ofrece una tecnología superior. El análisis de mercado, basado en encuestas a decisores de compra, confirma nuestro posicionamiento como la opción premium y más avanzada.
      </p>
      <div className="mapa-img-container">
        <img 
          src={posicionamientoImg} 
          alt="Mapa de posicionamiento de Coolshield" 
          className={`mapa-img ${isZoomed ? 'zoomed' : ''}`}
          onClick={handleImageClick}
          style={{
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
            zIndex: isZoomed ? 1000 : 1
          }}
        />
      </div>
    </section>
  );
}

export default MapaPosicionamiento;
