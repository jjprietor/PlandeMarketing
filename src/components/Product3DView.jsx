import './Product3DView.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Float } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const features = [
	{
		icon: '🌡️',
		title: 'Enfriamiento Activo Personalizable',
		desc: 'Sistema eléctrico que permite al usuario ajustar la temperatura, garantizando confort y seguridad óptimos en cualquier condición.',
		color: '#2563eb'
	},
	{
		icon: '🔋',
		title: 'Autonomía para Toda la Jornada',
		desc: 'Baterías intercambiables de ion-litio ofrecen entre 4 y 8 horas de funcionamiento continuo, cubriendo turnos de trabajo completos.',
		color: '#059669'
	},
	{
		icon: '🛡️',
		title: 'Materiales de Avanzada',
		desc: 'Poliamida con protección UV y fibra de plata antimicrobiana para una protección dérmica integral y duradera.',
		color: '#dc2626'
	},
];

// Componente del modelo 3D con rotación automática
function CoolshieldModel({ isInteracting, setIsInteracting }) {
	const gltf = useGLTF('/Coolshield_0611194442_texture.glb');
	const modelRef = useRef();
	
	useFrame((state) => {
		if (modelRef.current && !isInteracting) {
			modelRef.current.rotation.y = state.clock.elapsedTime * 0.5;
		}
	});
	
	return (
		<Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
			<primitive 
				ref={modelRef}
				object={gltf.scene} 
				scale={2.5}
				onPointerDown={() => setIsInteracting(true)}
				onPointerUp={() => setIsInteracting(false)}
			/>
		</Float>
	);
}

// Componente de anillo sutil
function SubtleRing() {
	const ringRef = useRef();
	
	useFrame((state) => {
		if (ringRef.current) {
			ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
		}
	});
	
	return (
		<mesh ref={ringRef} position={[0, 0, 0]}>
			<torusGeometry args={[4, 0.02, 16, 100]} />
			<meshBasicMaterial color="#e5e7eb" transparent opacity={0.3} />
		</mesh>
	);
}

function Product3DView() {
	const [active, setActive] = useState(0);
	const [isInteracting, setIsInteracting] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const startX = useRef(null);

	const handleTouchStart = (e) => {
		startX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e) => {
		if (startX.current === null) return;
		const endX = e.changedTouches[0].clientX;
		const diff = endX - startX.current;
		if (Math.abs(diff) > 40) {
			if (diff < 0) {
				setActive((prev) => (prev + 1) % features.length);
			} else {
				setActive((prev) => (prev - 1 + features.length) % features.length);
			}
		}
		startX.current = null;
	};

	return (
		<section className="product-3d-view-tech" id="visual3d">
			<div className="tech-header">
				<div className="tech-title-container">
					<h2 className="tech-title">
						<span className="tech-title-main">COOLSHIELD</span>
						<span className="tech-title-sub">TECNOLOGÍA DE ENFRIAMIENTO AVANZADA</span>
					</h2>
				</div>
			</div>
			
			<div className="product-3d-canvas-tech">
				<Canvas
					camera={{ position: [0, 0, 8], fov: 45 }}
					style={{ height: '100%', width: '100%' }}
				>
					<color attach="background" args={['#f8fafc']} />
					<SubtleRing />
					
					<ambientLight intensity={0.8} />
					<directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
					<directionalLight position={[-10, -10, -5]} intensity={0.8} color="#f1f5f9" />
					<pointLight position={[0, 0, 10]} intensity={1} color="#e2e8f0" />
					
					<CoolshieldModel 
						isInteracting={isInteracting} 
						setIsInteracting={setIsInteracting}
					/>
					
					<OrbitControls 
						enablePan={false} 
						enableZoom={false}
						autoRotate={!isInteracting}
						autoRotateSpeed={0.5}
					/>
				</Canvas>
				
				<div className="canvas-overlay">
				</div>
			</div>
			<div className="interaction-hint">
				<span>Interactúa con el modelo 3D para detener la rotación automática</span>
			</div>
			<div className="product-features-tech"
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			>
				<div className="features-grid">
					{features.map((feature, i) => (
						<div
							key={i}
							className={`feature-card-tech ${active === i ? 'active' : ''}`}
							onClick={() => setActive(i)}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							style={{ '--accent-color': feature.color }}
						>
							<div className="feature-icon-tech">
								<span>{feature.icon}</span>
								<div className="icon-glow"></div>
							</div>
							<div className="feature-content">
								<h3>{feature.title}</h3>
								<p>{feature.desc}</p>
							</div>
							<div className="feature-border"></div>
						</div>
					))}
				</div>
			</div>

		</section>
	);
}

export default Product3DView;
