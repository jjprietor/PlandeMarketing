import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo Coolshield" style={{height: '56px', verticalAlign: 'middle', marginRight: '12px', transition: 'height 0.3s'}} />
        Coolshield
      </div>
      <nav className="nav">
        <a href="#features">Características</a>
        <a href="#visual3d">Vista 3D</a>
        <a href="#buy">Comprar</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  );
}

export default Header;
