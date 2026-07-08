// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Resolute Raccoon',
  tagline: 'A blackhat-grade cybersecurity club',
  favicon: 'img/logo.svg',
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
          sidebarPath: require.resolve('./sidebars.js'),
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
    navbar: {
      title: '',
      logo: { alt: 'Resolute Raccoon', src: 'img/logo.svg' },
      items: [
        { to: '/docs/about', label: 'About', position: 'left' },
        { to: '/docs/train', label: 'TRAIN', position: 'left' },
        { to: '/docs/meet', label: 'MEET', position: 'left' },
        { to: '/docs/grow', label: 'GROW', position: 'left' },
        { href: 'https://github.com/resoluteraccoon', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      logo: { alt: 'Resolute Raccoon', src: 'img/logo.svg', height: 80, width: 80 },
      links: [
        {
          title: 'Sitemap',
          items: [
            { label: 'About', to: '/docs/about' },
            { label: 'TRAIN', to: '/docs/train' },
            { label: 'MEET', to: '/docs/meet' },
            { label: 'GROW', to: '/docs/grow' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'GitHub', href: 'https://github.com/resoluteraccoon' },
            { label: 'Discord', href: '#' },
            { label: 'X / Twitter', href: '#' },
          ],
        },
      ],
      copyright: 'Copyright © 2026 Resolute Raccoon.',
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  },
};

module.exports = config;