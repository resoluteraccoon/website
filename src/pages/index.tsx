import type {ReactNode} from 'react';
import {useState, useEffect, useCallback} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import styles from './index.module.css';

const slides = [
  {
    headline: 'TRAIN. BREAK. BUILD.',
    subtext: 'A blackhat-grade cybersecurity club',
  },
  {
    headline: 'CURATED PATHS',
    subtext: 'No scattered tutorials. Clear progression.',
  },
  {
    headline: 'HYBRID BY DESIGN',
    subtext: 'Technical skill + character growth',
  },
];

function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className={styles.heroSlideshow} aria-label="Hero slideshow">
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <div className={styles.slideContent}>
              <h1 className={styles.slideHeadline}>{slide.headline}</h1>
              <p className={styles.slideSubtext}>{slide.subtext}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dotIndicators} role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function FeatureCards() {
  const cards = [
    {
      title: 'TRAIN',
      description: 'Locked learning paths from pwn.college, TryHackMe, PortSwigger',
      link: '/docs/features/overview',
    },
    {
      title: 'MEET',
      description: 'Hackathons, movie nights, conferences, webinars',
      link: '/docs/hacker-club/overview',
    },
    {
      title: 'GROW',
      description: 'Readers Club, Public Speaking, Real Conversations',
      link: '/docs/community/overview',
    },
  ];

  return (
    <section className={styles.featureCardsSection} aria-labelledby="feature-cards-heading">
      <h2 id="feature-cards-heading" className={styles.visuallyHidden}>
        What We Do
      </h2>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <article key={index} className={styles.featureCard}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <Link to={card.link} className={styles.cardCTA}>
              Find out more
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Resolute Raccoon"
      description="Blackhat-grade cybersecurity club"
    >
      <Head>
        <meta property="og:title" content="Resolute Raccoon" />
        <meta property="og:description" content="Blackhat-grade cybersecurity club" />
      </Head>
      <HeroSlideshow />
      <FeatureCards />
    </Layout>
  );
}