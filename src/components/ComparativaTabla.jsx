import React from 'react';
import './ComparativaTabla.css';
import dragerImg from '../assets/drager.png';
import ergodyneImg from '../assets/ergodyne.png';
import ezcoolImg from '../assets/Ezcool.png';
import pipImg from '../assets/PIP.png';
import polarImg from '../assets/Polarproducts.png';

const productos = [
  {
    img: dragerImg,
    nombre: 'Dräger CVP 5220',
    tipo: 'PCM',
    duracion: '4',
    reduccion: '3–4°C',
    precio: '395.00 – 526.00',
    mercado: 'Industrial',
  },
  {
    img: ergodyneImg,
    nombre: 'Ergodyne Chill-Its',
    tipo: 'Evaporativo',
    duracion: '4',
    reduccion: '15°C',
    precio: '50.00 – 300.00',
    mercado: 'General',
  },
  {
    img: ezcoolImg,
    nombre: 'EZCooldown',
    tipo: 'PCM/Híbrido',
    duracion: '4',
    reduccion: '15–21°C',
    precio: '90.00 – 210.00',
    mercado: 'Deportivo',
  },
  {
    img: pipImg,
    nombre: 'PIP EZ Cool',
    tipo: 'Evaporativo',
    duracion: '5 a 10',
    reduccion: '15–21°C',
    precio: '27.99 – 45.00',
    mercado: 'Industrial',
  },
  {
    img: polarImg,
    nombre: 'Polar Products',
    tipo: 'PCM',
    duracion: '4',
    reduccion: 'No especificado',
    precio: '150.00 – 243.00',
    mercado: 'Médico – Deportivo',
  },
];

function ComparativaTabla({ onClose }) {
  return (
    <div className="comparativa-modal-bg" onClick={onClose}>
      <div className="comparativa-modal" onClick={e => e.stopPropagation()}>
        <button className="comparativa-close" onClick={onClose}>✕</button>
        <h2>Comparativa de Productos</h2>
        <div className="comparativa-table-wrapper">
          <table className="comparativa-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Tipo</th>
                <th>Duración (hrs)</th>
                <th>Reducción Temp.</th>
                <th>Precio (USD)</th>
                <th>Mercado</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p, i) => (
                <tr key={i}>
                  <td><img src={p.img} alt={p.nombre} className="comparativa-img" /><br/>{p.nombre}</td>
                  <td><b>{p.tipo}</b></td>
                  <td>{p.duracion}</td>
                  <td>{p.reduccion}</td>
                  <td>{p.precio}</td>
                  <td>{p.mercado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ComparativaTabla;
