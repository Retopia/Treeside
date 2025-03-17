// App.js
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
        <nav className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="font-bold text-xl">
            <Link to="/" className="no-underline text-black">
              Treeside
            </Link>
          </div>

          <ul className="flex gap-6 list-none m-0 p-0">
            <li><Link to="/product" className="no-underline text-black">Product</Link></li>
            <li><Link to="/about" className="no-underline text-black">About Us</Link></li>
            <li><Link to="/contact" className="no-underline text-black">Contact Us</Link></li>
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