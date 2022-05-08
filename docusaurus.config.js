// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '灰皮书',
  tagline: 'vvvv gamma 中文文档',
  url: 'https://docs.nodenodenode.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vvvv community cn', // Usually your GitHub org/user name.
  projectName: 'the gray book', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/vvvv-happay-team/thegraybookcn/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],

        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'explanations',
        path: 'explanations',
        routeBasePath: 'explanations',
        sidebarPath: require.resolve('./sidebarsExplanations.js'),
        // ... other options
      },

    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changelog',
        path: 'changelog',
        routeBasePath: 'changelog',
        sidebarPath: require.resolve('./sidebarsChangelog.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'roadmap',
        path: 'roadmap',
        routeBasePath: 'roadmap',
        sidebarPath: require.resolve('./sidebarsRoadmap.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'translation',
        path: 'translation',
        routeBasePath: 'translation',
        sidebarPath: require.resolve('./sidebarsTranslation.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/index',
            position: 'left',
            label: '文档',
          },
          {
            to: "/explanations/the-language",
            label: "解释",
            position: "left",
            activeBaseRegex: `/explanations/`,
          },
          {
            to: "/changelog/2021-4",
            label: "更新日志",
            position: "left",
            activeBaseRegex: `/changelog/`,
          },
          {
            to: "/roadmap/planned-releases",
            label: "开发计划",
            position: "left",
            activeBaseRegex: `/roadmap/`,
          },
          // {
          //   to: "/translation/about-translation",
          //   label: "关于翻译",
          //   position: "left",
          //   activeBaseRegex: `/translation/`,
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'vvvv gamma 中文文档',
                to: '/docs/intro',
              },
              {
                label: 'VL语言解释',
                to: '/explanations/the-language',
              },
              {
                label: '更新日志',
                to: 'changelog/2021-4',
              },
              {
                label: '开发计划',
                to: '/roadmap/planned-releases',
              },
              {
                label: '关于翻译',
                to: '/translation/about-translation',
              },
            ],
          },
          {
            title: 'Community',
            items:[
              {
                label:"中文论坛",
                to:"https://nodenodenode.net/",
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vvvv-happay-team/thegraybookcn',
              },
              {
                label: '参与翻译',
                href: '/translation/how-to-join',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} vvvv community cn.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
