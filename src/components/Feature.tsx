import React, { useState } from 'react';
import styles from '../styles/Feature.module.css';
import { FeatureProps } from '../types';

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  isOpen: initialIsOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <div>
      {/* dekstop view */}
      <div className={styles.dekstopFeature}>
        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span className={styles.toggleText}>{title}</span>
          <i className={`${styles.icon} ${isOpen ? styles.iconUp : styles.iconDown}`}
            aria-hidden="true" />
        </button>
        {isOpen && (
          <div
            id={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className={styles.content}
          >
            <img src={imageUrl} alt={imageAlt} className={styles.featureImage} />
            <div className={styles.contentText}>
              <h3 className={styles.contentTitle}>{title}</h3>
              <p className={styles.description}>{description}</p>
              <button className={styles.learnMore}>Learn more</button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.mobileFeature}>
        <div className={styles.cardContent}>
          <img
            loading="lazy"
            src={imageUrl}
            className={styles.mobileFeatureImage}
            alt={imageAlt}
          />
          <div className={styles.textContent}>
            <h2 className={styles.featureTitle}>{title}</h2>
            <p className={styles.featureDescription}>{description}</p>
            <button className={styles.actionButton}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};