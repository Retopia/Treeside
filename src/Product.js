// Product.js
import React from 'react';
import styles from './Product.module.css';

export default function Product() {
  return (
    <div className={styles.container}>
      {/* Large empty section */}
      <div className={styles.heroSection}></div>

      {/* More of Product Section */}
      <section className={styles.productSection}>
        <h2 className={styles.sectionTitle}>More of Product</h2>
        <div className={styles.textBlock}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </section>

      {/* See it in Action Section */}
      <section className={styles.actionSection}>
        <h2 className={styles.sectionTitle}>See it in Action</h2>
      </section>
    </div>
  );
}