// @ts-check
const { github: lightCodeTheme, dracula: darkCodeTheme } = require('prism-react-renderer');

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
            { label: 'Getting Started', to: '/docs/getting-started/quickstart' },
            { label: 'User Guide', to: '/docs/user-guide/cli' },
            { label: 'Developer Guide', to: '/docs/developer-guide/architecture' },
            { label: 'Reference', to: '/docs/reference/cli-commands' }
          ]
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/NousResearch' },
            { label: 'GitHub Issues', href: 'https://github.com/NousResearch/hermes-agent/issues' },
            { label: 'Skills Hub', href: 'https://agentskills.io' }
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'Desktop Download', href: 'https://hermes-agent.nousresearch.com/' },
            { label: 'GitHub', href: 'https://github.com/NousResearch/hermes-agent' },
            { label: 'Nous Research', href: 'https://nousresearch.com' }
          ]
        }
      ],
      copyright: `Built by <a href="https://nousresearch.com">Nous Research</a> · MIT License · ${new Date().getFullYear()}`
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  },
};

module.exports = config;