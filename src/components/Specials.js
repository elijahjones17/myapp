import React from 'react';
import './Specials.css';
import Card from './Card';
import saladImg from '../assets/greek-salad.jpg';
import cakeImg from '../assets/lemon-cake.jpg';
import bruschettaImg from '../assets/bruschetta.jpg';

const specials = [
  {
    title: "Greek Salad",
    image: saladImg,
    description: "Crispy lettuce, peppers, olives, and feta cheese topped with our signature dressing.",
    price: "$12.99"
  },
  {
    title: "Lemon Dessert",
    image: cakeImg,
    description: "A tangy and sweet layered lemon cake made in-house daily.",
    price: "$6.50"
  },
  {
    title: "Bruschetta",
    image: bruschettaImg,
    description: "Grilled bread topped with tomato, prosciutto, and cheese.",
    price: "$8.50"
  }
];

function Specials() {
  return (
    <section className="specials">
      <h2>This Week's Specials!</h2>
      <div className="specials-grid">
        {specials.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;
