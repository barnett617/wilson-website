import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wilson-website/',
  title: "Wilson Website",
  description: "A static website based on vitepress",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Wilson Website',
    outline: 'deep',
    editLink: {
      pattern: 'https://github.com/barnett617/wilson-website/edit/main/docs/:path'
    },
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
      },
      {
        text: 'Frontend',
        items: [
          {
            text: 'CSS',
            link: '/pages/frontend/css/tiktok_logo/',
          },
          {
            text: 'JavaScript',
            link: '/pages/frontend/js/array/reduce/',
          },
        ],
      },
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
      'pages/frontend/css/': [
        {
          text: 'CSS',
          items: [
            {
              text: '抖音LOGO实现',
              link: '/pages/frontend/css/tiktok_logo/',
            },
          ],
        },
      ],
      'pages/frontend/js/': [
        {
          text: 'JavaScript',
          items: [
            {
              text: '数组方法',
              items: [
                {
                  text: 'reduce',
                  link: '/pages/frontend/js/array/reduce/',
                },
              ],
            },
            {
              text: '字符串方法',
              items: [
                {
                  text: 'substring',
                  link: '/pages/frontend/js/string/substring/',
                },
                {
                  text: 'substr',
                  link: '/pages/frontend/js/string/substr/',
                },
              ]
            },
            {
              text: '类型判断',
              link: '/pages/frontend/js/type/',
            },
            {
              text: 'es6',
              items: [
                {
                  text: 'class',
                  link: '/pages/frontend/js/es6/class/',
                },
                {
                  text: 'Proxy',
                  link: '/pages/frontend/js/es6/proxy/',
                },
                {
                  text: 'Reflect',
                  link: '/pages/frontend/js/es6/reflect/',
                },
                {
                  text: 'Map',
                  link: '/pages/frontend/js/es6/map/',
                },
                {
                  text: 'Set',
                  link: '/pages/frontend/js/es6/set/',
                },
                {
                  text: 'Map和Set实例',
                  link: '/pages/frontend/js/es6/map_set_demo/',
                },
                {
                  text: '装饰器',
                  link: '/pages/frontend/js/es6/decorator/',
                },
              ],
            },
            {
              text: 'es7',
              link: '/pages/frontend/js/es7/',
            },
            {
              text: 'es2020',
              items: [
                {
                  text: '可选链',
                  link: '/pages/frontend/js/es2020/optional/',
                },
              ],
            },
            {
              text: '设计模式',
              items: [
                {
                  text: '单例模式',
                  link: '/pages/frontend/js/pattern/single/',
                },
                {
                  text: '观察者模式',
                  link: '/pages/frontend/js/pattern/observer/',
                },
              ],
            },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/barnett617/wilson-website' }
    ]
  }
})
