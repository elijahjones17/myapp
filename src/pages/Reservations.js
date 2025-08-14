import React, { useState, useEffect } from 'react'; 
import './Reservations.css';

function Reservations() {
  // Background images array to cycle through
  const backgrounds = [
    'https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg', 
    'https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg',
    'https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg',
    'https://www.littlelemon.ie/wp-content/uploads/IMG_2588-1600x1196.jpg',
  ];

  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1
  });

  // State to store the current background index
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Handle background change every minute (60000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 60000); // Background change every 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${form.name} on ${form.date} at ${form.time} for ${form.guests} guest(s).`);
  };

  return (
    <section
      className="reservations"
      style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }} // Set dynamic background
    >
      <div className="overlay"></div> {/* Overlay to darken background */}

      <div className="form-container">
        <h1>Book a Table</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
            />
          </label>
          <label>
            Guests:
            <input
              type="number"
              name="guests"
              min="1"
              max="10"
              value={form.guests}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Reserve</button>
        </form>
      </div>
    </section>
  );
}

export default Reservations;
