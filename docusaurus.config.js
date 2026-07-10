// @ts-check
const { github: lightCodeTheme, dracula: darkCodeTheme } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resolute Raccoon',
  tagline: 'A blackhat-grade cybersecurity club',
  favicon: 'img/favicon.ico',
  url: 'https://resoluteraccoon.github.io',
  baseUrl: '/website/',
  organizationName: 'resoluteraccoon',
  projectName: 'website',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/resoluteraccoon/website/tree/main/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      { name: 'og:title', content: 'Resolute Raccoon' },
      { name: 'og:description', content: 'A blackhat-grade cybersecurity club. Train. Break. Build.' },
      { name: 'og:image', content: 'https://resoluteraccoon.github.io/website/img/og-logo.png' },
      { name: 'og:image:width', content: '1200' },
      { name: 'og:image:height', content: '630' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://resoluteraccoon.github.io/website/' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Resolute Raccoon' },
      { name: 'twitter:description', content: 'A blackhat-grade cybersecurity club. Train. Break. Build.' },
      { name: 'twitter:image', content: 'https://resoluteraccoon.github.io/website/img/og-logo.png' },
    ],
    navbar: {
          title: 'RESOLUTE RACCOON',
          logo: { alt: 'Resolute Raccoon', src: 'img/logo.svg' },
          items: [
            {
              type: 'dropdown',
              label: 'Home',
              position: 'left',
              items: [
                // Events section
                { type: 'html', value: '<div style="font-weight:600;color:#888;padding:4px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">Events</div>' },
                { to: '/docs/events/movie-nights', label: 'Movie Nights' },
                { to: '/docs/events/hackathons', label: 'Hackathons' },
                { to: '/docs/events/conferences', label: 'Conferences' },
                { to: '/docs/events/webinars', label: 'Webinars' },
            
                // Blog section
                { type: 'html', value: '<div style="font-weight:600;color:#888;padding:4px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin-top:8px;">Blog</div>' },
                { to: '/docs/blog/technical-articles', label: 'Technical Articles' },
                { to: '/docs/blog/research', label: 'Research' },
                { to: '/docs/blog/ctf-writeups', label: 'CTF Write-ups' },
                { to: '/docs/blog/movie-night-writeups', label: 'Movie Night Write-ups' },
                { to: '/docs/blog/tool-reviews', label: 'Tool Reviews' },
            
                // Spaces section
                { type: 'html', value: '<div style="font-weight:600;color:#888;padding:4px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin-top:8px;">Spaces</div>' },
                { to: '/docs/spaces/learning-hub', label: 'Learning Hub' },
                { to: '/docs/spaces/learning-hub/features', label: 'Features' },
                { to: '/docs/spaces/skills-development', label: 'Skills Development' },
            
                // Rooms section
                { type: 'html', value: '<div style="font-weight:600;color:#888;padding:4px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin-top:8px;">Rooms</div>' },
                { to: '/docs/rooms/readers-club', label: 'Readers Club' },
                { to: '/docs/rooms/readers-club/hacker-books', label: 'Hacker Books' },
                { to: '/docs/rooms/readers-club/non-fiction', label: 'Non-fiction' },
                { to: '/docs/rooms/readers-club/biographies', label: 'Biographies' },
                { to: '/docs/rooms/readers-club/classics', label: 'Classics' },
                { to: '/docs/rooms/real-life-conversations', label: 'Real-Life Conversations' },
            
                // About Us
                { type: 'html', value: '<div style="font-weight:600;color:#888;padding:4px 16px;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;margin-top:8px;">More</div>' },
                { to: '/docs/about', label: 'About Us' },
              ],
            },
            {
              to: '/',
              label: 'Home',
              position: 'left',
            },
            {
              href: 'https://github.com/resoluteraccoon',
              label: 'GitHub',
              position: 'left',
            },
            {
              href: 'https://discord.gg/resoluteraccoon',
              label: 'Discord',
              position: 'left',
            },
          ],
        },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'About Us', to: '/docs/about' },
            { label: 'Events', to: '/docs/events' },
            { label: 'Blog', to: '/docs/blog' },
            { label: 'Spaces', to: '/docs/spaces' },
            { label: 'Rooms', to: '/docs/rooms' }
          ]
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/resoluteraccoon' }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Resolute Raccoon.`
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  },
};

module.exports = config;