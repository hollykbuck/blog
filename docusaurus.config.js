// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');


async function createConfig() {
  const katex = (await import('rehype-katex')).default;
  /** @type {import('@docusaurus/types').Config} */
  const config = {
    title: 'Buck\'s blog',
    tagline: 'Thoughts from another side.',
    url: 'https://holykbuck.github.io/',
    baseUrl: '/blog/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/icon.ico',
    organizationName: 'holykbuck', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: false,
          blog: {
            routeBasePath: '/',
            showReadingTime: true,
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
          gtag: {
            trackingID: 'G-V34W0E06Q1',
            anonymizeIP: true,
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Codec View',
          logo: {
            alt: 'My handmade Logo',
            src: 'img/IMG_0253.png',
          },
          items: [
            { to: '/', label: 'Blog', position: 'left' },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/pdeantihuman',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Winston Defazio All rights reserved.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  };
  return config;

}

module.exports = createConfig;
