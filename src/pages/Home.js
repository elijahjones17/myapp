import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import greekSaladImg from '../assets/greek-salad.jpg';
import bruschettaImg from '../assets/bruschetta.jpg';
import lemonCakeImg from '../assets/lemon-cake.jpg';
import heroImage from '../assets/hero-image.jpg';
import Card from '../components/Card';

function Home() {
 const specials = [
  {
    name: 'Greek Salad',
    description: 'Fresh vegetables, feta cheese, olives, and a tangy lemon dressing.',
    price: '$12.99',
    image: greekSaladImg,
  },
  {
    name: 'Lemon Cake',
    description: 'A tangy and sweet dessert made fresh every day.',
    price: '$6.50',
    image: lemonCakeImg,
  },
  {
    name: 'Bruschetta',
    description: 'Grilled bread topped with tomato, garlic, and fresh basil.',
    price: '$8.50',
    image: bruschettaImg,
  },
];


  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family-owned Mediterranean restaurant focused on traditional recipes with a modern twist.</p>
          <Link to="/booking">
  <button>Reserve a Table</button>
</Link>
        </div>
        <div className="hero-image">
        <img src={heroImage} alt="Delicious food" />
        </div>
      </section>

      <section className="specials">
        <h2>This Week's Specials</h2>
        <div className="specials-grid">
          {specials.map((dish, index) => (
            <Card key={index} {...dish} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
