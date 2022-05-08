// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'gipfeli.io',
    tagline: 'This is the comprehensive documentation to developing gipfeli.io',
    url: 'https://www.gipfeli.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'gipfeli-io', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [require('mdx-mermaid')],
                },
                blog: {
                    path: 'meeting-notes',
                    routeBasePath: 'meeting-notes',
                    showReadingTime: true,
                    blogSidebarTitle: 'Recent Meetings'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                id: 'general',
                path: 'general',
                routeBasePath: 'general',
                sidebarPath: require.resolve('./sidebars.js'),
            }),
        ],
        require.resolve("@cmfcmf/docusaurus-search-local")
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'gipfeli.io',
                logo: {
                    alt: 'gipfeli.io Docs',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docsPluginId: 'general',
                        docId: 'index',
                        position: 'left',
                        label: 'General',
                    },
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: 'Technical Docs',
                    },
                    {
                        to: '/meeting-notes',
                        label: 'Recent Meeting Notes',
                        position: 'left'
                    },
                    {
                        to: '/meeting-notes/archive',
                        label: 'Meeting Notes Archive',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/gipfeli-io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `Copyright © ${new Date().getFullYear()} gipfeli.io<br />Built with <a href="https://docusaurus.io/" title="Docusaurus">Docusaurus</a> | Illustrations by <a href="https://undraw.co/" title="Undraw">unDraw</a>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
