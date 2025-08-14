import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Menu from './pages/Menu';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
