import React, { useState } from 'react';
import styles from '../../Styles/Navbar.module.css';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <nav>
      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${activeMenu === 'about' ? styles.active : ''}`}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('about');
            }}
          >
            About Us
          </a>
        </li>
        <li className={`${styles.menuItem} ${activeMenu === 'features' ? styles.active : ''}`}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('features');
            }}
          >
            Features
          </a>
        </li>
        <li className={`${styles.menuItem} ${activeMenu === 'pricing' ? styles.active : ''}`}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('pricing');
            }}
          >
            Pricing
          </a>
        </li>
        <li className={`${styles.menuItem} ${activeMenu === 'faq' ? styles.active : ''}`}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('faq');
            }}
          >
            FAQ
          </a>
        </li>
        <li className={`${styles.menuItem} ${activeMenu === 'contact' ? styles.active : ''}`}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick('contact');
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
