import React from 'react';
import styles from '../styles/Footer.module.css';
import { FooterProps } from '../types';
import { FOOTER_LINKS } from '../constants';

export const Footer: React.FC<FooterProps> = ({
  logoUrl,
  logoAlt,
  socialLinks,
  navLinks = FOOTER_LINKS
}) => {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.footerNav}>
        <div className={styles.leftSide}>
          <a href="/" className={styles.logo} aria-label="Home">
            <img src={logoUrl} alt={logoAlt} className={styles.logoImage} />
          </a>
          <nav className={styles.nav} aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navItem}>
                {link.text}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.socialLink}
              aria-label={link.ariaLabel}
            >
               <img src={link.iconUrl} alt={link.iconAlt} />
            </a>
          ))}
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Central Texas Fly Fishing All Rights Reserved.
      </p>
    </footer>
  );
};