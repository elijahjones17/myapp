import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo .svg';  // <-- Import Link
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="nav">
      <div className="nav-header">
         {/* LOGO */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="Little Lemon Logo" className="logo" />
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>               {/* Updated */}
        <li><Link to="/about">About</Link></li>         {/* Updated */}
        <li><Link to="/menu">Menu</Link></li>           {/* Updated */}
        <li><Link to="/booking">Booking</Link></li>     {/* Updated */}
        <li><Link to="/order">Order Online</Link></li>  {/* Updated */}
        <li><Link to="/login">Login</Link></li>         {/* Updated */}
      </ul>
    </nav>
  );
};

export default Nav;
