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
    navbar: {
      title: 'RESOLUTE RACCOON',
      logo: { alt: 'Resolute Raccoon', src: 'img/logo.svg' },
      items: [
        { to: '/docs/about', label: 'About Us', position: 'left' },
        { to: '/docs/events', label: 'Events', position: 'left' },
        { to: '/docs/blog', label: 'Blog', position: 'left' },
        { to: '/docs/spaces', label: 'Spaces', position: 'left' },
        { to: '/docs/rooms', label: 'Rooms', position: 'left' },
        { href: 'https://github.com/resoluteraccoon', label: 'GitHub', position: 'right' },
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