import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

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
    link: '/docs/rooms',
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

export default function HeroSlideshow(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div id="homepage-slider" className="carousel homepage-hero">
      <div className="carousel-inner" role="listbox">
        {slides.map((slide, index) => (
          <Link
            key={index}
            to={slide.link}
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
          </Link>
        ))}
      </div>

      {/* Single right-side next arrow only */}
      <div className="carousel-controls-right">
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
  );
}