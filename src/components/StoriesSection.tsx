import React from 'react';
import { StoryCard } from './StoryCard';
import { STORIES } from '../constants';
import styles from '../styles/StoriesSection.module.css';

export const StoriesSection: React.FC = () => {
  return (
    <div className={styles.storiesGrid}>
      {STORIES.map((story, index) => (
        <StoryCard key={index} {...story} />
      ))}
    </div>
  );
};