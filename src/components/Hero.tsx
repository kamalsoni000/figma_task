import React from 'react';
import styles from '../styles/Hero.module.css';
import { HeroProps } from '../types';

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  imageUrl,
  imageAlt
}) => {
  return (
    <section id='home' className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            {title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className={styles.description}>{description}</p>
          <button className={styles.cta} aria-label={ctaText}>
            {ctaText}
          </button>
        </div>
        <img src={imageUrl} alt={imageAlt} className={styles.heroImage} />
      </div>
    </section>
  );
};