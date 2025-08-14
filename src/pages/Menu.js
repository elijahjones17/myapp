import React from 'react';
import './Menu.css';
import greekSalad from '../assets/greek-salad.jpg';
import lemonCake from '../assets/lemon-cake.jpg';
import bruschetta from '../assets/bruschetta.jpg';

const menuItems = [
  {
    name: "Greek Salad",
    image: greekSalad,
    description: "Crispy lettuce, peppers, olives, and feta cheese topped with our signature dressing.",
    price: "$12.99"
  },
  {
    name: "Lemon Dessert",
    image: lemonCake,
    description: "A tangy and sweet layered lemon cake made in-house daily.",
    price: "$6.50"
  },
  {
    name: "Bruschetta",
    image: bruschetta,
    description: "Grilled bread garlic-rubbed, topped with tomato, prosciutto, and cheese.",
    price: "$8.50"
  }
];

function Menu() {
  return (
    <section className="menu">
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.name} />
            <div className="menu-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span className="price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
