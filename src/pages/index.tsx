import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css';

const slides = [
  {
    heading: 'TRAIN.\nBREAK.\nBUILD.',
    subtitle: 'A blackhat-grade cybersecurity club',
    image: '/img/slides/slide1.jpg',
    link: '/docs/about',
    cta: 'FIND OUT MORE',
  },
  {
    heading: 'SPACES',
    subtitle: 'Take the best resources in the world and we bring them to you',
    image: '/img/slides/slide2.jpg',
    link: '/docs/spaces',
    cta: 'FIND OUT MORE',
  },
  {
    heading: 'MOVIE NIGHTS',
    subtitle: 'Hacking and life-themed films dissected as a crew',
    image: '/img/slides/slide3.jpg',
    link: '/docs/events/movie-nights',
    cta: 'FIND OUT MORE',
  },
  {
    heading: 'ROOMS',
    subtitle: "Men's health, discipline, finance, leadership — we talk about it all",
    image: '/img/slides/slide4.jpg',
    link: '/docs/rooms/real-life-conversations',
    cta: 'FIND OUT MORE',
  },
  {
    heading: 'BLOG',
    subtitle: 'Technical articles, research, CTF write-ups, and tool reviews',
    image: '/img/slides/slide5.jpg',
    link: '/docs/blog',
    cta: 'FIND OUT MORE',
  },
];

const cards = [
  {
    header: 'SPACES',
    sublabel: 'resolute raccoon',
    description: 'We curate the best free platforms in the world — pwn.college, TryHackMe, PortSwigger — and turn them into structured, locked learning paths. Each unit demands proof before you advance. Hand-picked resources. Locked progressive modules. Deep university integration. AI Refinery that continuously updates content.',
    link: '/docs/spaces',
  },
  {
    header: 'EVENTS',
    sublabel: 'resolute raccoon',
    description: 'Movie nights dissecting real breaches. Hackathons where we break things and fix them. Conferences and webinars we attend as a crew. We present, we compete, we learn from each other.',
    link: '/docs/events',
  },
  {
    header: 'ROOMS',
    sublabel: 'resolute raccoon',
    description: "Readers Club. Public Speaking. Real conversations about life outside the screen. Men's Health. Ladies Health. Discipline. Marriage. Business. Finance. Leadership. Investing. Technical skill and character growth. Both matter.",
    link: '/docs/rooms',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Layout title="Resolute Raccoon" description="Blackhat-grade cybersecurity club">
      {/* ============================================
          HERO CAROUSEL — Black Hat Bootstrap Exact
          ============================================ */}
      <div id="homepage-slider" className="carousel homepage-hero">
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className="carousel-caption">
                <h3>
                  {slide.heading.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < slide.heading.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                {slide.subtitle && <p>{slide.subtitle}</p>}
                {slide.cta && <span className="more">{slide.cta}</span>}
              </div>
            </a>
          ))}
        </div>

        {/* Right-side navigation controls */}
        <div className="carousel-controls-right">
          <button className="carousel-control-prev" onClick={goPrev} aria-label="Previous">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" onClick={goNext} aria-label="Next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Indicators */}
        <ol className="carousel-indicators">
          {slides.map((_, index) => (
            <li
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </ol>
      </div>

      {/* ============================================
          FEATURE CARDS — Black Hat "Sharpen Up" Exact
          ============================================ */}
      <section className="sharpen-up">
        <div className="container">
          {cards.map((card, index) => (
            <div key={index} className="featured-highlight">
              <div className="row">
                {/* LEFT: Lockup */}
                <div className="col-md-6">
                  <div className="lockup">
                    <h3>{card.header}</h3>
                    <p className="lockup-sublabel">{card.sublabel}</p>
                  </div>
                </div>
                {/* RIGHT: Description */}
                <div className="col-md-6">
                  <p>{card.description}</p>
                  <p>
                    <Link to={card.link} className="find-out-more">
                      Find out more →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
