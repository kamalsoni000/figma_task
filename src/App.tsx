import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { StoriesSection } from './components/StoriesSection';
import { Footer } from './components/Footer';
import styles from './styles/FlyFishingPage.module.css';
import {  HERO_CONTENT, LOGO_ALT, LOGO_URL, NAV_LINKS, SOCIAL_LINKS } from './constants';
import { MainHeader } from './components/Navigation/Header';

const App: React.FC = () => {
  return (
    <div className={styles.page}>
     <MainHeader/>
      <main className={styles.main}>
        <Hero {...HERO_CONTENT}/>
        <section id='about' className={`${styles.section} ${styles.featuredSection}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured options</h2>
            <div className={styles.featuresContainer}>
              <FeaturedSection />
            </div>
          </div>
        </section>
        <section id='services' className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Member stories</h2>
            <StoriesSection />
          </div>
        </section>
      </main>
      <Footer
        logoUrl={LOGO_URL}
        logoAlt={LOGO_ALT}
        socialLinks={SOCIAL_LINKS}
        navLinks={NAV_LINKS}
      />
    </div>
  );
};
export default App;