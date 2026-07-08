import type {ReactNode} from 'react';
import {useState, useEffect, useCallback} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const slides = [
  {
    bg: '#0a0a0a',
    heading: 'TRAIN. BREAK. BUILD.',
    subtitle: 'A blackhat-grade cybersecurity club',
  },
  {
    bg: '#111827',
    heading: 'CURATED PATHS',
    subtitle: 'No scattered tutorials. Clear progression.',
  },
  {
    bg: '#0f172a',
    heading: 'HYBRID BY DESIGN',
    subtitle: 'Technical skill + character growth',
  },
  {
    bg: '#1e1b4b',
    heading: 'LOCKED PROGRESSION',
    subtitle: 'Prove it before you advance',
  },
  {
    bg: '#0c4a6e',
    heading: 'FORGED TOGETHER',
    subtitle: 'No one trains alone here',
  },
];

const cards = [
  {
    header: 'TRAIN',
    label: 'resolute raccoon',
    description: 'We curate the best free platforms in the world — pwn.college, TryHackMe, PortSwigger — and turn them into structured, locked learning paths. Each unit demands proof before you advance.',
    link: '/docs/features/curated-learning',
  },
  {
    header: 'MEET',
    label: 'resolute raccoon',
    description: 'Movie nights dissecting real breaches. Hackathons where we break things and fix them. Conferences and webinars we attend as a crew. We present, we compete, we learn from each other.',
    link: '/docs/hacker-club/overview',
  },
  {
    header: 'GROW',
    label: 'resolute raccoon',
    description: "Readers Club. Public Speaking. Real conversations about life outside the screen. Men's Health for the brothers who need space to be real. Technical skill and character growth. Both matter.",
    link: '/docs/community/overview',
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
    <section className="hero-slideshow" aria-label="Hero slideshow">
      <div className="hero-slideshow-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
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
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          aria-hidden={index !== currentSlide}
          style={{ backgroundColor: slide.bg }}
        >
          <div className="hero-slide-content">
            <h1 className="hero-slide-heading">{slide.heading}</h1>
            <p className="hero-slide-subtitle">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

function FeatureCards() {
  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        {cards.map((card, index) => (
          <article key={index} className={`feature-card ${index === cards.length - 1 ? 'last' : ''}`}>
            <h3 className="feature-card-header">{card.header}</h3>
            <div className="feature-card-accent" />
            <p className="feature-card-sub">{card.label}</p>
            <p className="feature-card-desc">{card.description}</p>
            <Link to={card.link} className="feature-card-link">
              Find out more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
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