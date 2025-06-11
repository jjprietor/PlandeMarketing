import './Product3DView.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState } from 'react';

const features = [
	{
		icon: '🌡️',
		title: 'Enfriamiento Activo Personalizable',
		desc: 'Sistema eléctrico que permite al usuario ajustar la temperatura, garantizando confort y seguridad óptimos en cualquier condición.',
	},
	{
		icon: '🔋',
		title: 'Autonomía para Toda la Jornada',
		desc: 'Baterías intercambiables de ion-litio ofrecen entre 4 y 8 horas de funcionamiento continuo, cubriendo turnos de trabajo completos.',
	},
	{
		icon: '🛡️',
		title: 'Materiales de Avanzada',
		desc: 'Poliamida con protección UV y fibra de plata antimicrobiana para una protección dérmica integral y duradera.',
	},
];

function CoolshieldModel() {
	const gltf = useGLTF('/Coolshield_0611194442_texture.glb');
	return <primitive object={gltf.scene} scale={2.2} />;
}

function Product3DView() {
	const [active, setActive] = useState(0);

	return (
		<section className="product-3d-view" id="visual3d">
			<h2>Características de Coolshield</h2>
			<div className="product-3d-canvas">
				<Canvas
					camera={{ position: [0, 0, 5], fov: 40 }}
					style={{ height: 400 }}
				>
					<ambientLight intensity={0.7} />
					<directionalLight position={[5, 5, 5]} intensity={0.7} />
					<CoolshieldModel />
					<OrbitControls enablePan={false} />
				</Canvas>
			</div>
			<div className="product-features">
				<div className="feature-selector">
					{features.map((f, i) => (
						<button
							key={i}
							className={`feature-btn${
								active === i ? ' active' : ''
							}`}
							onClick={() => setActive(i)}
							aria-label={f.title}
						>
							<span className="feature-icon">{f.icon}</span>
						</button>
					))}
				</div>
				<div className="feature-detail">
					<h3>{features[active].title}</h3>
					<p>{features[active].desc}</p>
				</div>
			</div>
			<p className="product-3d-hint">Arrastra para girar la polera en 3D.</p>
		</section>
	);
}

export default Product3DView;
