import React from 'react';
import Nav from './Nav';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/logo.svg" alt="Little Lemon Logo" className="logo" />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
