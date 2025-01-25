import React from 'react';
import styles from '../../styles/Navigation.module.css';
import { HamburgerIconProps } from '../../types';

export const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, onClick }) => {
  return (
    <button 
      className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle navigation menu"
    >
      <span className={`${styles.hamburgerLine} ${isOpen ? styles.lineOne : ''}`} />
      <span className={`${styles.hamburgerLine} ${isOpen ? styles.lineTwo : ''}`} />
      <span className={`${styles.hamburgerLine} ${isOpen ? styles.lineThree : ''}`} />
    </button>
  );
};