import React from 'react';
import styles from '../styles/StoryCard.module.css';
import { StoryCardProps } from '../types';

export const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt
}) => {
  return (
    <article className={styles.story}>
      <img src={imageUrl} alt={imageAlt} className={styles.storyImage} />
      <div className={styles.storyContent}>
        <div className={styles.storyText}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <button className={styles.readMore}>Read more</button>
      </div>
    </article>
  );
};

