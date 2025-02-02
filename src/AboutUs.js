// AboutUs.js
import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <div className={styles.textBlock}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Future Goals</h2>
        <div className={styles.textBlock}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        
        {/* Founder */}
        <div className={styles.founder}>
          <div className={styles.founderPhoto}></div>
          <div className={styles.founderInfo}>
            <div className={styles.founderLine}></div>
            <div className={styles.founderLine}></div>
            <div className={styles.founderLine}></div>
            <div className={styles.founderLine}></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className={styles.teamGrid}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.memberPhoto}></div>
              <div className={styles.memberInfo}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}