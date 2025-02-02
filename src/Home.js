// Home.js
import React from 'react';
import { Link } from 'react-router';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.productBox}>
        <div className={styles.productTitle}>Product</div>
        <div className={styles.learnMore}>
          <Link to="/product" className={styles.learnMoreLink}>
            Learn More →
          </Link>
        </div>
      </div>

      <div className={styles.meetTeam}>
        <Link to="/about" className={styles.meetTeamLink}>
          Meet the Team →
        </Link>
      </div>
    </div>
  );
}