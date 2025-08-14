import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Little Lemon</h1>
        <p>Chicago’s beloved Mediterranean cuisine.</p>
        <button className="btn hero-btn" onClick={() => navigate('/booking')}>
          Reserve a Table
        </button>
      </div>
    </section>
  );
}
