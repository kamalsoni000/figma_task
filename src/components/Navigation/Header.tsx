import React, { useState } from 'react';
import styles from '../../styles/Navigation.module.css';
import { Navigation } from './Navigation';
import { useMediaQuery } from '../../hooks';
import { NAV_LINKS } from '../../constants';

export const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 991px)');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/76edf635401adf5fa864ad295fb77d9d0aad1913efdc47d1e9550622df235a7b?placeholderIfAbsent=true&apiKey=5df747e845434e1aa830882d83906baf"
            className={styles.logoImage}
            alt="Central Texas Fly Fishing Logo"
          />
          <div className={styles.brandName}>
            Central Texas Fly Fishing
          </div>
        </div>
        <div className={styles.navigationWrapper}>
          <Navigation 
            links={NAV_LINKS}
            isMobileMenuOpen={isMobileMenuOpen}
            onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
      {isMobile && isMobileMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
          role="presentation"
        />
      )}
    </header>
  );
};