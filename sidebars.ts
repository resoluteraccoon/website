import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'about',
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/overview',
        'features/curated-learning',
        'features/locked-progression',
        'features/refinery-ai',
        'features/thumbnail-cards',
        'features/progress-tracker',
      ],
    },
    {
      type: 'category',
      label: 'Learnings',
      items: [
        'learnings/overview',
        'learnings/mathematics-for-programmers',
        'learnings/clean-code',
        'learnings/java-for-beginners',
        'learnings/readers-club',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      items: [
        'community/overview',
        'community/public-speaking',
        'community/real-life-conversations',
        'community/mens-health',
      ],
    },
    {
      type: 'category',
      label: 'Hacker Club',
      items: [
        'hacker-club/overview',
        'hacker-club/movie-nights',
        'hacker-club/hackathons',
        'hacker-club/newsletter',
      ],
    },
  ],
};

export default sidebars;