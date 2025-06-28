// 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`nav-container ${menuOpen ? 'active' : ''}`}>
      <div className="nav-logo">We are Coders</div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        {/* <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li> */}
        <li><Link to="/quiz" onClick={toggleMenu}>Quiz</Link></li>
        {/* <li><Link to="/signin" onClick={toggleMenu}>SignIn</Link></li>
        <li><Link to="/signup" onClick={toggleMenu}>Signup</Link></li> */}
        <li><Link to="/python" onClick={toggleMenu}>Python</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;