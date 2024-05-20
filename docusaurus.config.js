// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  themes: ['docusaurus-theme-search-typesense'],
  title: 'Sellista Documentation',
  tagline: 'Your #1 Ecommerce alternative',
  favicon: 'img/Sellista.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'your-github-org', // Usually your GitHub org/user name.
  projectName: 'sellista-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        //title: 'Sellista Documentation',
        logo: {
          alt: 'Sellista Logo',
          src: 'img/Sellista.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Help Center',
          },
          {
            label: 'Topics', position: 'left', items: [
              {
                to: '/docs/introduction/getting-started',
                label: 'Getting Started'
              }
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://merchant.dukline.com',
            label: 'Go to Sellista',
            position: 'right',
          },
        ],
      },
      footer: {
        //logo: { src: 'img/sellista.svg', href: "/", alt: "Sellista logo image" },
        style: 'dark',
        links: [
          {
            items: [
              {
                html: `
<a href="/" ><img src="img/sellista-dark.svg"></a>`}
            ],

          },
          {
            title: 'Solutions',
            items: [
              {
                label: 'Online store',
                to: '#',
              },
              {
                label: 'Social Commerce',
                to: '#',
              },
              {
                label: 'Checkout and Payments',
                to: '#',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Help Center',
                href: '#',
              },
              {
                label: 'Blog',
                href: '#',
              },
              {
                label: 'API Documentation',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Sellista',
            items: [
              {
                label: 'About us',
                href: '#',
              },
              {
                label: 'Privacy policy',
                href: '#',
              },
              {
                label: 'Feedback & Complaint',
                href: '#',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sellista.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      typesense: {
        // Replace this with the name of your index/collection.
        // It should match the "index_name" entry in the scraper's "config.json" file.
        typesenseCollectionName: 'docusaurus-2',

        typesenseServerConfig: {
          nodes: [
            {
              host: 'xxx-1.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
            {
              host: 'xxx-2.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
            {
              host: 'xxx-3.a1.typesense.net',
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: 'xyz',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: true,
      },


    }),
};

export default config;