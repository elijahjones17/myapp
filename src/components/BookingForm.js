// src/components/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Booking confirmed for ${form.name} (${form.guests} guest(s)) on ${form.date} at ${form.time} for a ${form.occasion || 'general'} occasion.`);
    // Submit data to backend here (if applicable)
  };

  return (
    <section className="booking-section">
      <h2 className="booking-title">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Lemon"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="res-date">Date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          <option value="17:00">5:00 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={form.guests}
          onChange={handleChange}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;



