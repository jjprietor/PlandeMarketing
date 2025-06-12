import './ImpactoPanel.css';
import { useEffect, useRef, useState } from 'react';

const impacto = [
  {
    value: 21,
    suffix: '%',
    desc: 'Aumento potencial de la productividad laboral.'
  },
  {
    value: 40,
    suffix: '%',
    desc: 'Reducción estimada de incidentes por golpes de calor.'
  },
  {
    value: 5,
    suffix: '%',
    desc: 'Reducción mínima de la temperatura corporal.'
  }
];

function ImpactoPanel() {
  const [display, setDisplay] = useState([0, 0, 0]);
  const ref = useRef();
  const [animated, setAnimated] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
        setExpanded(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    impacto.forEach((item, idx) => {
      let current = 0;
      const increment = Math.ceil(item.value / 40);
      const interval = setInterval(() => {
        current += increment;
        if (current >= item.value) {
          current = item.value;
          clearInterval(interval);
        }
        setDisplay(prev => {
          const arr = [...prev];
          arr[idx] = current;
          return arr;
        });
      }, 30 + idx * 20);
    });
  }, [animated]);

  return (
    <section className={`impacto-panel${expanded ? ' expand' : ''}`} id="impacto" ref={ref}>
      <div className="impacto-container narrow">
        <h3>Impacto</h3>
        <div className="impacto-list">
          {impacto.map((item, idx) => (
            <div className="impacto-item" key={idx}>
              <span className="impacto-value">{display[idx]}{item.suffix}</span>
              <span className="impacto-desc">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="impacto-spacer"></div>
      </div>
    </section>
  );
}

export default ImpactoPanel;
