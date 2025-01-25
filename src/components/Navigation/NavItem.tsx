import React from 'react';
import styles from '../../styles/Navigation.module.css';
import { NavItemProps } from '../../types';

export const NavItem: React.FC<NavItemProps> = ({ text, href, isActive, onClick }) => {
  return (
    <a href={href} className={styles.navAnchor} >
      <div 
        className={styles.navItem} 
        role="menuitem" 
        tabIndex={0}
        onClick={onClick}
        onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
      >
        <div className={styles.navText}>{text}</div>
        {isActive && <div className={styles.activeLine} />}
      </div>
    </a>
  );
};