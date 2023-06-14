import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wilson-website/',
  title: "Wilson Website",
  description: "A static website based on vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/pages/markdown-examples/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/pages/markdown-examples/' },
          { text: 'Runtime API Examples', link: '/pages/api-examples/' },
          { text: 'Vue SFC Examples', link: '/pages/vue-sfc-examples/' },
          { text: 'Data Examples', link: '/pages/data-examples/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/barnett617/wilson-website' }
    ]
  }
})
