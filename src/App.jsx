import './App.css'
import Header from './components/Header';
import Product3DView from './components/Product3DView';
import ImpactoPanel from './components/ImpactoPanel';
import MapaPosicionamiento from './components/MapaPosicionamiento';
import { useEffect, useRef, useState } from 'react';
import poleraImg from './assets/Polera.png';
import poleraAzul from './assets/poleraAzul.jpeg';
import FeaturesSlider from './components/FeaturesSlider';
import ComparativaTabla from './components/ComparativaTabla';

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
  const [enfasisDesafio, setEnfasisDesafio] = useState(false);
  const [enfasisImpacto, setEnfasisImpacto] = useState(false);
  const [colorSeleccionado, setColorSeleccionado] = useState('blanco');
  const [imgFade, setImgFade] = useState(false);
  const [showComparativa, setShowComparativa] = useState(false);
  const desafioRef = useRef();
  const impactoRef = useRef();

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

      if (desafioRef.current) {
        const rect = desafioRef.current.getBoundingClientRect();
        setEnfasisDesafio(rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.2);
      }
      if (impactoRef.current) {
        const rect = impactoRef.current.getBoundingClientRect();
        setEnfasisImpacto(rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleColorChange = (color) => {
    if (color === colorSeleccionado) return;
    setImgFade(true);
    setTimeout(() => {
      setColorSeleccionado(color);
      setImgFade(false);
    }, 250);
  };

  return (
    <>
      <Header />
      
      {/* Componente 3D en la parte superior */}
      <Product3DView />
      
      <div className="main-landing">
        {/* Hero principal */}
        <section className="hero-tech">
          <div className="hero-content">
            <h1 className="hero-title-tech">CoolShield</h1>
            <p className="hero-subtitle-tech">La revolución en comodidad y frescura para tu día a día.</p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">4-8h</span>
                <span className="stat-label">Autonomía</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">-15°C</span>
                <span className="stat-label">de enfriamiento vs. la temperatura ambiente</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">IP65</span>
                <span className="stat-label">Resistencia</span>
              </div>
            </div>
          </div>
          
          <div className="hero-spacer"></div>
          
          {/* Tabla comparativa */}
          <div className="hero-img-container-tech">
            <div className="hero-color-selector-bar">
              <button
                className={`hero-color-btn color-azul${colorSeleccionado === 'azul' ? ' active' : ''}`}
                onClick={() => handleColorChange('azul')}
                aria-label="Polera azul"
              >
                <span className="color-label text-[10px]">Azul</span>
              </button>
              <button
                className={`hero-color-btn color-blanco${colorSeleccionado === 'blanco' ? ' active' : ''}`}
                onClick={() => handleColorChange('blanco')}
                aria-label="Polera blanca"
              >
                <span className="color-label text-[10px]">Blanco</span>
              </button>
            <div className="hero-spacer"></div>
            </div>
            <div className="hero-img-wrapper" style={{ position: 'relative' }}>
              <div className="hero-spacer"></div>
              <div className="hero-spacer"></div>
              <img
                src={
                  colorSeleccionado === 'azul'
                    ? poleraAzul
                    : poleraImg
                }
                alt="Polera de enfriamiento activo"
                className={`hero-img-tech${imgFade ? ' fade-out' : ' fade-in'}`}
              />
              <div className="img-glow"></div>
            </div>
            <button
              className="comparativa-btn"
              onClick={() => setShowComparativa(true)}
            >
              Tabla comparativa de productos
            </button>
          </div>
        </section>

        {/* Slogan dinámico mejorado */}
        <div
          ref={sloganRef}
          className={`slogan-scroll-tech${sloganState === 'big' ? ' big' : sloganState === 'small' ? ' small' : ''}`}
        >
          <span className="slogan-text-tech">Innovación que refresca tu jornada</span>
          <div className="slogan-particles"></div>
        </div>

        {/* Sección interactiva de beneficios y características */}
        <FeaturesSlider />

        {/* Sección Desafío Industrial mejorada */}
        <section
          className={`desafio-industrial-tech${enfasisDesafio ? ' enfasis' : ''}`}
          ref={desafioRef}
          id="desafio"
        >
          <div className="desafio-background"></div>
          <div className="desafio-content">
            <h2 className="desafio-title-tech">El Desafío Industrial</h2>
            <p className="desafio-subtitle-tech">El calor: más que una incomodidad, un riesgo.</p>
            <p className="desafio-desc-tech">
              En industrias vitales como la minería y la construcción, el estrés térmico provoca pérdidas millonarias y pone en peligro la salud de los trabajadores. Las soluciones tradicionales ya no son suficientes.
            </p>
            <div className="desafio-cifras-tech">
              {desafioData.map((item, idx) => (
                <div className="desafio-cifra-card-tech" key={idx}>
                  <div className="cifra-glow"></div>
                  <span className="desafio-cifra-value-tech">{item.value}</span>
                  <span className="desafio-cifra-desc-tech">{item.desc}</span>
                  <span className="desafio-cifra-fuente-tech">{item.fuente}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`impacto-panel-tech${enfasisImpacto ? ' enfasis' : ''}`}
          ref={impactoRef}
        >
          <ImpactoPanel />
        </section>

        <MapaPosicionamiento />

        {/* Sección de compra mejorada */}
        <section className="buy-tech" id="buy">
          <div className="buy-content">
            <h2 className="buy-title-tech">¡Adquiere la Tecnología del Futuro!</h2>
            <div className="price-container">
              <span className="price-tech">$500 USD</span>
              <span className="price-label">Precio de lanzamiento</span>
            </div>
            <button className="buy-btn-tech">
              <span>Comprar Ahora</span>
              <div className="btn-glow"></div>
            </button>
            
          </div>
        </section>

        {/* Pie de página mejorado */}
        <footer className="footer-tech" id="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contacto</h3>
              <p>ventas@coolshield.cl</p>
              <p>+56 9 1234 5678</p>
            </div>
            <div className="footer-section">
              <p>Política de privacidad</p>
              <p>Términos y condiciones</p>
            </div>
            <div className="footer-section">
              <h3>Síguenos</h3>
              <p>LinkedIn | X | Instagram</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Coolshield - Innovación que Refresca tu Jornada</p>
          </div>
        </footer>

        {showComparativa && (
          <ComparativaTabla onClose={() => setShowComparativa(false)} />
        )}
      </div>
    </>
  )
}

export default App
