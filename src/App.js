import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import Product from './Product';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Menu */}
        <nav style={{ padding: '1rem', background: '#eee' }}>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
