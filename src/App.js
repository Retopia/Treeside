// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import styles from './App.module.css';
import Home from './Home';
import Product from './Product';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Menu */}
        <nav className={styles.nav}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandLink}>
              Treeside
            </Link>
          </div>

          <ul className={styles.navList}>
            <li><Link to="/product" className={styles.navLink}>Product</Link></li>
            <li><Link to="/about" className={styles.navLink}>About Us</Link></li>
            <li><Link to="/contact" className={styles.navLink}>Contact Us</Link></li>
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