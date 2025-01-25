import React from 'react';
import { Feature } from './Feature';
import { FEATURES } from '../constants';

export const FeaturedSection: React.FC = () => {
  return (
    <>
      {FEATURES.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </>
  );
};