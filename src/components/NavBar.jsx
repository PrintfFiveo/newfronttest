import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ( prop ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo" >{prop.name}</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
        <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
        <p className='pa'>Busca</p><li><a href="/search" className="bi bi-search"></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
