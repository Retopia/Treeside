// ContactUs.js
import React from 'react';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.title}>Contact Us</h1>
        
        {/* Email/Contact form placeholder */}
        <div className={styles.contactForm}>
          <div className={styles.line}></div>
        </div>

        {/* Q&A Section */}
        <div className={styles.qnaSection}>
          <h2 className={styles.qnaTitle}>Q n A</h2>
        </div>

        {/* Socials Section */}
        <div className={styles.socialsSection}>
          <h2 className={styles.socialsTitle}>Socials</h2>
          <div className={styles.socialLinks}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </section>
    </div>
  );
}