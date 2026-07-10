import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

const movieSlides = [
  {
    heading: 'THE SOCIAL NETWORK',
    subtitle: 'The story of how a lonely genius built a billion-dollar empire — and burned every bridge along the way.',
    image: '/website/img/movie-slides/social-network.jpg',
    link: '/website/docs/events/movie-nights',
    cta: 'DISCUSS THIS FILM',
  },
  {
    heading: 'MR. ROBOT',
    subtitle: 'A vigilante hacker fights corporate greed while battling his own fractured mind. Who is real? Who is control?',
    image: '/website/img/movie-slides/mr-robot.jpg',
    link: '/website/docs/events/movie-nights',
    cta: 'DISCUSS THIS FILM',
  },
  {
    heading: 'THE MATRIX',
    subtitle: 'What if everything you know is a simulation? Red pill. Blue pill. The choice that changed cinema forever.',
    image: '/website/img/movie-slides/matrix.jpg',
    link: '/website/docs/events/movie-nights',
    cta: 'DISCUSS THIS FILM',
  },
  {
    heading: 'CITIZENFOUR',
    subtitle: 'The real-time documentary of Edward Snowden leaking NSA secrets. Truth, surveillance, and the cost of courage.',
    image: '/website/img/movie-slides/citizenfour.jpg',
    link: '/website/docs/events/movie-nights',
    cta: 'DISCUSS THIS FILM',
  },
  {
    heading: 'EX MACHINA',
    subtitle: 'A young programmer is invited to test an AI with consciousness. But who is really being tested?',
    image: '/website/img/movie-slides/ex-machina.jpg',
    link: '/website/docs/events/movie-nights',
    cta: 'DISCUSS THIS FILM',
  },
];

export default function MovieNightsSlideshow(): React.ReactElement {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movieSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % movieSlides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + movieSlides.length) % movieSlides.length);

  return (
    <div id="movie-nights-slider" className="carousel movie-nights-slideshow">
      <div className="carousel-inner" role="listbox">
        {movieSlides.map((slide, index) => (
          <Link
            key={index}
            to={slide.link}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className="d-block w-100"
            />
            <div className="carousel-caption">
              <h3>{slide.heading}</h3>
              {slide.subtitle && <p>{slide.subtitle}</p>}
              {slide.cta && <span className="more">{slide.cta}</span>}
            </div>
          </Link>
        ))}
      </div>

      <div className="carousel-controls-right">
        <button className="carousel-control-prev" onClick={goPrev} aria-label="Previous">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" onClick={goNext} aria-label="Next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <ol className="carousel-indicators">
        {movieSlides.map((_, index) => (
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