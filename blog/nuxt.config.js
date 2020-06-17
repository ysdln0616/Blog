
// const { resolve } = require('path');
// const jsconfig = require('@/jsconfig.json');

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: "twitter:card" ,content:"summary"},
      { name: "twitter:site" ,content: "@ysdln0616sec"},
      { property: "og:url",content: "https://ysdln0616-blog.netlify.app"},
      { property: "og:title", content: "BLOG"},
      { property: "og:description", content: "Mysite"},
      { property: "og:image",content: "https://ysdln0616.github.io/mysite/favicon/faviconM.png"},
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', size:"180×180", href: '/apple-touch-icon.png' },
      { rel: 'shortcut icon', type: 'image/png', size:"1024×1024", href: '/favicon.png' }
    ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/profile.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'profile',
        path: '/profile',
        component: 'pages/profile.vue'
      },
      {
        name: 'mBlog',
        path: '/mBlog',
        component: 'pages/mBlog.vue'
      },
      {
        name: 'June20',
        path: '/June20',
        component: 'pages/June20.vue'
      }
    ]
  
  }
}

