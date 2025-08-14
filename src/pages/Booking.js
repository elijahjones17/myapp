import React from 'react';
import BookingForm from '../components/BookingForm';
import './Booking.css';

export default function Booking() {
  return (
    <div className="booking-page">
      <div className="booking-container">
        <h2>🍋 Book With Us Today!</h2>
        <BookingForm />
      </div>
    </div>
  );
}
