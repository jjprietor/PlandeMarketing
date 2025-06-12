import './FeaturesSlider.css';
import { useRef, useState } from 'react';

const features = [
	{
		title: 'Enfriamiento Activo Personalizable',
		desc: 'Tecnología eléctrica con control de temperatura ajustable para máxima protección y confort en ambientes extremos.',
		icon: '❄️',
	},
	{
		title: 'Materiales Avanzados',
		desc: 'Poliamida con protección UV, fibra de plata antimicrobiana y malla transpirable para mayor seguridad y durabilidad.',
		icon: '🛡️',
	},
	{
		title: 'Batería de Larga Duración',
		desc: 'Hasta 8 horas de enfriamiento continuo con baterías intercambiables y eficientes.',
		icon: '🔋',
	},
	{
		title: 'Reducción de Accidentes y Estrés Térmico',
		desc: 'Disminuye en un 40% los incidentes por golpes de calor y mejora la productividad laboral hasta en un 21%.',
		icon: '📉',
	},
	{
		title: 'Diseño Ergonómico y Lavable',
		desc: 'Peso optimizado, fácil de usar y mantener, con logotipo visible para identidad de marca.',
		icon: '🧺',
	},
	{
		title: 'Certificación y Cumplimiento',
		desc: 'Cumple con normativas de seguridad laboral y estándares internacionales.',
		icon: '✅',
	},
];

function FeaturesSlider() {
	const sliderRef = useRef(null);
	const [active, setActive] = useState(0);

	const scrollRight = () => {
		sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
		setActive((prev) => (prev + 1) % features.length);
	};
	const scrollLeft = () => {
		sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
		setActive((prev) => (prev - 1 + features.length) % features.length);
	};

	return (
		<section className="features-slider" id="features">
			<h2 className="features-title">
				<span className="features-title-highlight">Características</span> Clave de 
				<span className="features-title-brand text-blue-500"> CoolShield</span>
				<div className="features-title-underline"></div>
			</h2>
			<div className="slider-controls">
				<button className="slider-arrow-btn" onClick={scrollLeft} aria-label="Anterior">
					<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<polygon points="28,6 12,20 28,34" fill="currentColor" />
					</svg>
				</button>
				<button className="slider-arrow-btn" onClick={scrollRight} aria-label="Siguiente">
					<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<polygon points="12,6 28,20 12,34" fill="currentColor" />
					</svg>
				</button>
			</div>
			<div className="slider-list" ref={sliderRef}>
				{features.map((f, i) => (
					<div
						className={`feature-card ${active === i ? 'active' : ''}`}
						key={i}
						onMouseEnter={() => setActive(i)}
					>
						<div className="feature-icon">{f.icon}</div>
						<h3>{f.title}</h3>
						<p>{f.desc}</p>
					</div>
				))}
			</div>
			<div className="features-emphasis">
				<strong>¡Innovación, seguridad y productividad en una sola prenda!</strong>
			</div>
		</section>
	);
}

export default FeaturesSlider;
