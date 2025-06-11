import './MapaPosicionamiento.css';
import posicionamientoImg from '../assets/MapaDePosicionamiento.png';

function MapaPosicionamiento() {
  return (
    <section className="mapa-posicionamiento" id="mercado">
      <h2>Posicionamiento en el Mercado</h2>
      <p className="mapa-desc">
        A diferencia de las soluciones pasivas, Coolshield ofrece una tecnología superior. El análisis de mercado, basado en encuestas a decisores de compra, confirma nuestro posicionamiento como la opción premium y más avanzada.
      </p>
      <div className="mapa-img-container">
        <img src={posicionamientoImg} alt="Mapa de posicionamiento de Coolshield" className="mapa-img" />
      </div>
    </section>
  );
}

export default MapaPosicionamiento;
