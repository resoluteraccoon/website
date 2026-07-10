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
              { to: '/docs/events', label: 'Events' },
              { to: '/docs/blog', label: 'Blog' },
              { to: '/docs/spaces', label: 'Spaces' },
              { to: '/docs/rooms', label: 'Rooms' },
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