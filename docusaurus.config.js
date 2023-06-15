// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Defifa Playbook',
    tagline: 'Money Games with Friends',
    favicon: 'img/defifa.svg',

    // Set the production url of your site here
    url: 'https://docs.defifa.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    routeBasePath: "/",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // TODO: Add edit URL
                    // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        // TODO: opengraph social card img
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
            logo: {
                alt: 'Defifa Logo',
                src: 'img/defifa.svg',
            },
            items: [{
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Playbook',
                },
                {
                    type: 'dropdown',
                    label: 'Links',
                    position: 'right',
                    items: [{
                            label: 'Defifa.net',
                            to: 'https://www.defifa.net',
                        },
                        {
                            label: 'Discord',
                            to: 'https://discord.gg/hrZnvs65Nh'
                        },
                        {
                            label: 'GitHub',
                            to: 'https://github.com/BallKidz',
                        },
                        {
                            label: 'Juicebox',
                            to: 'https://juicebox.money/@defifa',
                        },
                        {
                            label: 'OpenSea',
                            to: 'https://opensea.io/collection/defifa-american-football-playoffs-2023',
                        },
                        {
                            label: 'Twitter',
                            to: 'https://twitter.com/Defifa420',
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;