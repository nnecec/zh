import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Zh',
  description: 'Formatting Chinese with ease.',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // Site logo
    logo: '/logo.svg',

    // Navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
    ],

    // Sidebar - configured per path
    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'prettier-plugin-zh', link: '/guide/prettier-plugin-zh' },
          ],
        },
        {
          text: 'Rules',
          collapsed: false,
          items: [
            { text: 'space-around-alphabet', link: '/guide/space-around-alphabet' },
            { text: 'space-around-number', link: '/guide/space-around-number' },
            { text: 'space-around-code', link: '/guide/space-around-code' },
            { text: 'space-around-link', link: '/guide/space-around-link' },
            { text: 'no-duplicate-punctuation', link: '/guide/no-duplicate-punctuation' },
            { text: 'no-space-around-fullwidth', link: '/guide/no-space-around-fullwidth' },
            { text: 'no-space-between-number-unit', link: '/guide/no-space-between-number-unit' },
            { text: 'ignore-patterns', link: '/guide/ignore-patterns' },
          ],
        },
      ],
    },

    // Table of contents (outline)
    outline: { level: [2, 3], label: 'On this page' },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nnecec/zh' },
      { icon: 'twitter', link: 'https://x.com/nnecec_cn' },
    ],

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present nnecec',
    },

    // Search
    search: { provider: 'local' },

    // Edit link
    editLink: {
      pattern: 'https://github.com/nnecec/zh/edit/main/apps/website2/:path',
      text: 'Edit this page on GitHub',
    },

    // Last updated timestamp
    lastUpdated: true,
  },
})
