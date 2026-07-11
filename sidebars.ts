import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    { type: 'doc', id: 'about', label: 'About Us' },
    {
      type: 'category',
      label: 'Events',
      link: { type: 'doc', id: 'events' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'events/movie-nights', label: 'Movie Nights' },
        { type: 'doc', id: 'events/hackathons', label: 'Hackathons' },
        { type: 'doc', id: 'events/conferences', label: 'Conferences' },
        { type: 'doc', id: 'events/webinars', label: 'Webinars' },
      ],
    },
    {
      type: 'category',
      label: 'Blog',
      link: { type: 'doc', id: 'blog' },
      collapsed: true,
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
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Learning Hub',
          link: { type: 'doc', id: 'spaces/learning-hub' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'spaces/learning-hub/features', label: 'Features' },
          ],
        },

        {
          type: 'category',
          label: 'Skills Development',
          link: { type: 'doc', id: 'spaces/skills-development' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'spaces/skills-development/cooking', label: 'Cooking' },
            { type: 'doc', id: 'spaces/skills-development/videography', label: 'Videography' },
            { type: 'doc', id: 'spaces/skills-development/public-speaking', label: 'Public Speaking' },
            { type: 'doc', id: 'spaces/skills-development/deep-technical-communication', label: 'Deep Technical Communication' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Rooms',
      link: { type: 'doc', id: 'rooms' },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Readers',
          link: { type: 'doc', id: 'rooms/readers' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'rooms/readers/hacker-books', label: 'Hacker Books' },
            { type: 'doc', id: 'rooms/readers/non-fiction', label: 'Non-fiction' },
            { type: 'doc', id: 'rooms/readers/biographies', label: 'Biographies' },
            { type: 'doc', id: 'rooms/readers/classics', label: 'Classics' },
          ],
        },
        {
          type: 'category',
          label: 'Labour Market',
          link: { type: 'doc', id: 'rooms/labour-market' },
          collapsed: true,
          items: [
            { type: 'doc', id: 'rooms/labour-market/deep-conversations', label: 'Deep Conversations' },
            { type: 'doc', id: "rooms/labour-market/gentle-mens-health", label: "Gentle Men\u2019s Health Session" },
            { type: 'doc', id: 'rooms/labour-market/ladies-health', label: 'Ladies Health Session' },
            { type: 'doc', id: 'rooms/labour-market/discipline', label: 'Discipline' },
            { type: 'doc', id: 'rooms/labour-market/marriage', label: 'Marriage' },
            { type: 'doc', id: 'rooms/labour-market/business', label: 'Business' },
            { type: 'doc', id: 'rooms/labour-market/finance', label: 'Finance' },
            { type: 'doc', id: 'rooms/labour-market/leadership', label: 'Leadership' },
            { type: 'doc', id: 'rooms/labour-market/investing', label: 'Investing' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Hacker Club',
      link: { type: 'doc', id: 'hacker-club/overview' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'hacker-club/movie-nights', label: 'Movie Nights' },
        { type: 'doc', id: 'hacker-club/hackathons', label: 'Hackathons' },
        { type: 'doc', id: 'hacker-club/newsletter', label: 'Newsletter' },
      ],
    },
    {
      type: 'category',
      label: 'Learnings',
      link: { type: 'doc', id: 'learnings/overview' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'learnings/mathematics-for-programmers', label: 'Mathematics for Programmers' },
        { type: 'doc', id: 'learnings/clean-code', label: 'Clean Code' },
        { type: 'doc', id: 'learnings/java-for-beginners', label: 'Java for Beginners' },
        { type: 'doc', id: 'learnings/readers-club', label: 'Readers Club' },
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: { type: 'doc', id: 'features/overview' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'features/curated-learning', label: 'Curated Learning' },
        { type: 'doc', id: 'features/locked-progression', label: 'Locked Progression' },
        { type: 'doc', id: 'features/refinery-ai', label: 'Refinery AI' },
        { type: 'doc', id: 'features/thumbnail-cards', label: 'Thumbnail Cards' },
        { type: 'doc', id: 'features/progress-tracker', label: 'Progress Tracker' },
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: { type: 'doc', id: 'getting-started/quickstart' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'getting-started/quickstart', label: 'Quick Start' },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      link: { type: 'doc', id: 'user-guide/cli' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'user-guide/cli', label: 'CLI Reference' },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'doc', id: 'reference/cli-commands' },
      collapsed: true,
      items: [
        { type: 'doc', id: 'reference/cli-commands', label: 'CLI Commands' },
      ],
    },
  ],
};

export default sidebars;
