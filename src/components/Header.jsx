import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Inicio', href: '#visual3d', icon: '🏠' },
  { label: 'Características', href: '#features', icon: '✨' },
  { label: 'Desafío', href: '#desafio', icon: '⚡' },
  { label: 'Impacto', href: '#impacto', icon: '🌍' },
  { label: 'Comprar', href: '#buy', icon: '🛒' },
  { label: 'Contacto', href: '#footer', icon: '✉️' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  // Smooth scroll
  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <a href="#visual3d" className="logo-link">
          <img src={logo} alt="CoolShield Logo" className="logo-img" />
          CoolShield
        </a>
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={handleNavClick(link.href)}>{link.icon} {link.label}</a>
          ))}
        </nav>
        <button className="hamburger-btn" onClick={handleMenuToggle} aria-label="Abrir menú">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-backdrop${menuOpen ? ' open' : ''}`} onClick={handleClose}></div>
      <aside className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <button className="mobile-menu-close" onClick={handleClose} aria-label="Cerrar menú">×</button>
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${active === link.href ? ' active' : ''}`}
              onClick={handleNavClick(link.href)}
            >
              <span className="mobile-nav-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}

export default Header;
