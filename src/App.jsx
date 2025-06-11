import './App.css'
import Header from './components/Header';
import Product3DView from './components/Product3DView';
import ImpactoPanel from './components/ImpactoPanel';
import MapaPosicionamiento from './components/MapaPosicionamiento';
import { useEffect, useRef, useState } from 'react';
import poleraImg from './assets/Polera.png';

const desafioData = [
  {
    value: '>2%',
    desc: 'Pérdida de productividad global proyectada para 2030 debido al calor.',
    fuente: '(Fuente: OIT)'
  },
  {
    value: '1,086',
    desc: 'Consultas por golpes de calor solo en Enero en Chile.',
    fuente: '(Fuente: Canales, 2025)'
  }
];

function App() {
  // Estado para animar el slogan
  const [sloganState, setSloganState] = useState('normal');
  const sloganRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sloganRef.current) return;
      const rect = sloganRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.3 && rect.bottom > 0) {
        setSloganState('big');
      } else if (rect.bottom < window.innerHeight * 0.2) {
        setSloganState('small');
      } else {
        setSloganState('normal');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="main-landing">
        {/* Hero principal */}
        <section className="hero">
          <h1>Coolshield</h1>
          <p>La revolución en comodidad y frescura para tu día a día.</p>
          <div className="hero-img-container">
            <img src={poleraImg} alt="Polera de enfriamiento activo" className="hero-img" />
            <div className="hero-options">
              <div className="hero-colors">
                <div className="color color-blue"><span>Azul</span></div>
                <div className="color color-black"><span>Negro</span></div>
                <div className="color color-white"><span>Blanco</span></div>
              </div>
              <div className="hero-sizes">
                <span>S</span> <span>M</span> <span>L</span> <span>XL</span>
              </div>
            </div>
          </div>
        </section>
        {/* Sección Desafío Industrial */}
        <section className="desafio-industrial">
          <h2 className="desafio-title">El Desafío Industrial</h2>
          <p className="desafio-subtitle">El calor es más que una incomodidad. Es un riesgo.</p>
          <p className="desafio-desc">
            En industrias vitales como la minería y la construcción, el estrés térmico provoca pérdidas millonarias y pone en peligro la salud de los trabajadores. Las soluciones tradicionales ya no son suficientes.
          </p>
          <div className="desafio-cifras">
            {desafioData.map((item, idx) => (
              <div className="desafio-cifra-card" key={idx}>
                <span className="desafio-cifra-value">{item.value}</span>
                <span className="desafio-cifra-desc">{item.desc}</span>
                <span className="desafio-cifra-fuente">{item.fuente}</span>
              </div>
            ))}
          </div>
        </section>
        <Product3DView />
        <ImpactoPanel />
        <MapaPosicionamiento />

        {/* Sección de compra */}
        <section className="buy">
          <h2>¡Compra ahora!</h2>
          <p><strong>$29.990</strong> CLP</p>
          <button className="buy-btn">Comprar</button>
          <p className="payment-methods">Aceptamos tarjetas, transferencia y pago en cuotas.</p>
        </section>

        {/* Preguntas frecuentes / testimonios */}
        <section className="faq-testimonials">
          <h2>Preguntas Frecuentes</h2>
          <ul>
            <li><strong>¿Cómo funciona la tecnología de enfriamiento?</strong> Utiliza microfibras que disipan el calor corporal.</li>
            <li><strong>¿Se puede lavar a máquina?</strong> Sí, es apta para lavadora.</li>
          </ul>
          <h2>Testimonios</h2>
          <blockquote>“Nunca había estado tan fresco en el gimnasio. ¡La recomiendo!”</blockquote>
          <blockquote>“Perfecta para el verano y para trabajar al aire libre.”</blockquote>
        </section>

        {/* Pie de página */}
        <footer className="footer">
          <p>Contacto: ventas@poleraenfriamiento.cl | +56 9 1234 5678</p>
          <p>Política de privacidad | Términos y condiciones</p>
          <p>&copy; 2025 Polera de Enfriamiento Activo</p>
        </footer>
      </div>
    </>
  )
}

export default App
