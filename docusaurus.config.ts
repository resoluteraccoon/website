import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Resolute Raccoon',
  tagline: 'Blackhat-grade cybersecurity club',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://resoluteraccoon.github.io',
  baseUrl: '/website/',

  organizationName: 'resoluteraccoon',
  projectName: 'website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/resoluteraccoon/website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/resoluteraccoon/website/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/resoluteraccoon-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Resolute Raccoon',
      logo: {
         alt: 'Resolute Raccoon',
         src: 'img/logo.svg',  // ← change from logo.png to logo.svg
      },
      items: [
        { to: '/docs/about', label: 'About', position: 'left' },
        { to: '/docs/features/overview', label: 'Features', position: 'left' },
        { to: '/docs/learnings/overview', label: 'Learnings', position: 'left' },
        { to: '/docs/community/overview', label: 'Community', position: 'left' },
        { to: '/docs/hacker-club/overview', label: 'Hacker Club', position: 'left' },
        { href: 'https://github.com/resoluteraccoon', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      logo: {
        alt: 'Resolute Raccoon',
        src: 'img/logo.svg',  // ← change from logo.png to logo.svg
        height: 80,
        width: 80,
       },
      // ... rest of footer
    },
      favicon: 'img/logo.svg',  // ← change from favicon.ico to logo.svg
      links: [
        {
          title: 'Sitemap',
          items: [
            { label: 'About', to: '/docs/about' },
            { label: 'Features', to: '/docs/features/overview' },
            { label: 'Learnings', to: '/docs/learnings/overview' },
            { label: 'Community', to: '/docs/community/overview' },
            { label: 'Hacker Club', to: '/docs/hacker-club/overview' },
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
