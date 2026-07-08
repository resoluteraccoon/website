import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css';

const slides = [
  {
    heading: 'TRAIN.\nBREAK.\nBUILD.',
    subtitle: 'A blackhat-grade cybersecurity club',
    image: '/img/slides/slide1.jpg',
    link: '/docs/train',
    cta: 'Find out more',
  },
  {
    heading: 'CURATED\nPATHS',
    subtitle: 'No scattered tutorials. Clear progression.',
    image: '/img/slides/slide2.jpg',
    link: '/docs/train',
    cta: 'Find out more',
  },
  {
    heading: 'HYBRID\nBY DESIGN',
    subtitle: 'Technical skill + character growth',
    image: '/img/slides/slide3.jpg',
    link: '/docs/grow',
    cta: 'Find out more',
  },
  {
    heading: 'LOCKED\nPROGRESSION',
    subtitle: 'Prove it before you advance',
    image: '/img/slides/slide4.jpg',
    link: '/docs/train',
    cta: 'Find out more',
  },
  {
    heading: 'FORGED\nTOGETHER',
    subtitle: 'No one trains alone here',
    image: '/img/slides/slide5.jpg',
    link: '/docs/grow',
    cta: 'Find out more',
  },
];

const cards = [
  {
    header: 'TRAIN',
    sublabel: 'resolute raccoon',
    description: 'We curate the best free platforms in the world — pwn.college, TryHackMe, PortSwigger — and turn them into structured, locked learning paths. Each unit demands proof before you advance.',
    link: '/docs/train',
  },
  {
    header: 'MEET',
    sublabel: 'resolute raccoon',
    description: 'Movie nights dissecting real breaches. Hackathons where we break things and fix them. Conferences and webinars we attend as a crew. We present, we compete, we learn from each other.',
    link: '/docs/meet',
  },
  {
    header: 'GROW',
    sublabel: 'resolute raccoon',
    description: "Readers Club. Public Speaking. Real conversations about life outside the screen. Men's Health for the brothers who need space to be real. Technical skill and character growth. Both matter.",
    link: '/docs/grow',
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

        {/* Prev/Next Controls */}
        <button className="carousel-control-prev" onClick={goPrev} aria-label="Previous">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={goNext} aria-label="Next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>

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
                    <h2>{card.header}</h2>
                    <p>{card.sublabel}</p>
                  </div>
                </div>
                {/* RIGHT: Description */}
                <div className="col-md-6">
                  <p>{card.description}</p>
                  <p>
                    <Link to={card.link} className="find-out-more">
                      Find out more
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