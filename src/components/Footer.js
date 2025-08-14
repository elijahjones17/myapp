import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/small_logo.png';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
  <img src={logo} alt="Little Lemon Logo" /></div>
        <div className="footer-nav">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/booking">Book a Table</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="footer-contact">
          <p>1234 Lemon St, Wichita, KS</p>
          <p>Email: info@littlelemon.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
