import React from 'react';
import './Card.css';

function Card({ name, description, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default Card;
