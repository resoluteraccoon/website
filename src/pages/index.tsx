import type {ReactNode} from 'react';
import {useState, useEffect, useCallback} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const slides = [
  {
    main: 'TRAIN. BREAK. BUILD.',
    sub: 'A blackhat-grade cybersecurity club',
  },
  {
    main: 'CURATED PATHS',
    sub: 'No scattered tutorials. Clear progression.',
  },
  {
    main: 'HYBRID BY DESIGN',
    sub: 'Technical skill + character growth',
  },
  {
    main: 'LOCKED PROGRESSION',
    sub: 'Prove it before you advance',
  },
  {
    main: 'FORGED TOGETHER',
    sub: 'No one trains alone here',
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
    <section className="homepage-slideshow" aria-label="Hero slideshow">
      <div className="homepage-slide-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`homepage-slide-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`homepage-slide ${index === currentSlide ? 'active' : ''}`}
          aria-hidden={index !== currentSlide}
        >
          <div className="homepage-slide-content">
            <h1 className="homepage-slide-main">{slide.main}</h1>
            <p className="homepage-slide-sub">{slide.sub}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

const cards = [
  {
    header: 'TRAIN',
    subLabel: 'resolute raccoon',
    description: 'We curate the best free platforms in the world — pwn.college, TryHackMe, PortSwigger — and turn them into structured, locked learning paths. Each unit demands proof before you advance.',
    link: '/docs/features/curated-learning',
  },
  {
    header: 'MEET',
    subLabel: 'resolute raccoon',
    description: 'Movie nights dissecting real breaches. Hackathons where we break things and fix them. Conferences and webinars we attend as a crew. We present, we compete, we learn from each other.',
    link: '/docs/hacker-club/overview',
  },
  {
    header: 'GROW',
    subLabel: 'resolute raccoon',
    description: "Readers Club. Public Speaking. Real conversations about life outside the screen. Men's Health for the brothers who need space to be real. Technical skill and character growth. Both matter.",
    link: '/docs/community/overview',
  },
];

function FeatureCards() {
  return (
    <section className="homepage-cards-section">
      <div className="homepage-cards-container">
        {cards.map((card, index) => (
          <article key={index} className={`homepage-card ${index === cards.length - 1 ? 'last' : ''}`}>
            <h3 className="homepage-card-header">{card.header}</h3>
            <div className="homepage-card-accent" />
            <p className="homepage-card-sub">{card.subLabel}</p>
            <p className="homepage-card-desc">{card.description}</p>
            <Link to={card.link} className="homepage-card-link">
              Find out more →
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