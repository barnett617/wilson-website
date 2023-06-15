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
      { text: 'Examples', link: '/pages/examples/markdown-examples/' },
      {
        text: 'Vue Learning',
        items: [
          {
            text: 'Vue3',
            link: '/pages/vue-learning/vue3/',
          },
          {
            text: 'Vue2',
            link: '/pages/vue-learning/vue2/lifecycle/parent_children/',
          },
        ]
      }
    ],

    sidebar: {
      '/pages/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/pages/examples/markdown-examples/' },
            { text: 'Runtime API Examples', link: '/pages/examples/api-examples/' },
            { text: 'Vue SFC Examples', link: '/pages/examples/vue-sfc-examples/' },
            { text: 'Data Examples', link: '/pages/examples/data-examples/' },
          ]
        }
      ],
      '/pages/vue-learning/vue2/': [
        {
          text: 'Vue2',
          items: [
            {
              text: 'lifecycle',
              items: [
                {
                  text: '父子组件声生命周期时序',
                  link: '/pages/vue-learning/vue2/lifecycle/parent_children/',
                }
              ]
            }
          ]
        }
      ],
      '/pages/vue-learning/vue3/': [
        {
          text: 'Vue3',
          items: [],
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/barnett617/wilson-website' }
    ]
  }
})
