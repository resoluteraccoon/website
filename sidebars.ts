import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Events',
      link: { type: 'doc', id: 'events' },
      items: [
        { type: 'doc', id: 'events/movie-nights', label: 'Movie Nights' },
      ],
    },
    {
      type: 'category',
      label: 'Blog',
      link: { type: 'doc', id: 'blog' },
      items: [
        { type: 'doc', id: 'blog/technical-articles', label: 'Technical Articles' },
        { type: 'doc', id: 'blog/research', label: 'Research' },
        { type: 'doc', id: 'blog/ctf-writeups', label: 'CTF Write-ups' },
        { type: 'doc', id: 'blog/movie-night-writeups', label: 'Movie Night Write-Ups' },
        { type: 'doc', id: 'blog/tool-reviews', label: 'Tool Reviews' },
      ],
    },
    {
      type: 'category',
      label: 'Spaces',
      link: { type: 'doc', id: 'spaces' },
      items: [
        {
          type: 'category',
          label: 'Learning Hub',
          link: { type: 'doc', id: 'spaces/learning-hub' },
          items: [
            { type: 'doc', id: 'spaces/learning-hub/features', label: 'Features' },
          ],
        },

        {
          type: 'category',
          label: 'Skills Development',
          link: { type: 'doc', id: 'spaces/skills-development' },
          items: [],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rooms',
      link: { type: 'doc', id: 'rooms' },
      items: [
        {
          type: 'category',
          label: 'Readers Club',
          link: { type: 'doc', id: 'rooms/readers-club' },
          items: [
            { type: 'doc', id: 'rooms/readers-club/hacker-books', label: 'Hacker Books' },
            { type: 'doc', id: 'rooms/readers-club/non-fiction', label: 'Non-fiction' },
            { type: 'doc', id: 'rooms/readers-club/biographies', label: 'Biographies' },
            { type: 'doc', id: 'rooms/readers-club/classics', label: 'Classics' },
          ],
        },
      ],
    },
    { type: 'doc', id: 'about', label: 'About Us' },
  ],
};

export default sidebars;