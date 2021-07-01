module.exports = {
  title: 'EpicQuestz Wiki',
  tagline: 'The official EpicQuestz wiki',
  url: 'https://epicquestz-wiki.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eq-favicon.png',
  organizationName: 'EpicQuestz', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'EpicQuestz Wiki',
      logo: {
        alt: 'EpicQuestz Logo',
        src: 'img/eq-logo-large.png',
      },
      items: []
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Website',
              to: 'https://www.epicquestz.com',
            },
            {
              label: 'Forums',
              to: 'https://forums.epicquestz.com',
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/user/EpicQuestz',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/fVYxD9Q',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/EpicQuestz',
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/EpicQuestz/Wiki',
            }
          ]
        },
      ],
      copyright: `Copyright © 2020 - ${new Date().getFullYear()} EpicQuestz`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
		  routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/EpicQuestz/Wiki',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/EpicQuestz/Wiki/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};
