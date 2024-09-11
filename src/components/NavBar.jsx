
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Ver Turma</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#VerTurma">Turmas</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
