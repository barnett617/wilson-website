import { defineConfig } from 'vitepress'

const vue2Learning = {
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
}

const vue3Learning = {
  '/pages/vue-learning/vue3/': [
    {
      text: 'Vue3',
      items: [],
    }
  ],
}

const frontendCSS = {
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
}

const frontendJs = {
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
        {
          text: 'IIFE',
          link: 'pages/frontend/js/iife/',
        },
      ],
    },
  ]
}

const viteIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="410" height="404" viewBox="0 0 410 404" fill="none">
<path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
<path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
<stop stop-color="#41D1FF"/>
<stop offset="1" stop-color="#BD34FE"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEA83"/>
<stop offset="0.0833333" stop-color="#FFDD35"/>
<stop offset="1" stop-color="#FFA800"/>
</linearGradient>
</defs>
</svg>`

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
      {
        text: 'Frontend',
        items: [
          {
            text: 'JavaScript',
            link: '/pages/frontend/js/array/reduce/',
          },
          {
            text: 'CSS',
            link: '/pages/frontend/css/tiktok_logo/',
          },
        ],
      },
      {
        text: 'Vue Learning',
        items: [
          {
            text: 'Vue2',
            link: '/pages/vue-learning/vue2/lifecycle/parent_children/',
          },
          {
            text: 'Vue3',
            link: '/pages/vue-learning/vue3/',
          },
        ]
      },
      { text: 'Examples', link: '/pages/examples/markdown-examples/' },
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
      ...vue2Learning,
      ...vue3Learning,
      ...frontendCSS,
      ...frontendJs,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/barnett617/wilson-website' },
      { icon: { svg: viteIconSvg }, link: 'https://vitepress.dev/guide/what-is-vitepress' },
    ]
  }
})
