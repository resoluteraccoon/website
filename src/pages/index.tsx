import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import HeroSlideshow from '../components/HeroSlideshow';
import './index.css';

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
  return (
    <Layout title="Resolute Raccoon" description="Blackhat-grade cybersecurity club">
      <HeroSlideshow />

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
