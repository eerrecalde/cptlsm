module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic+Raleway:300,400,600,700%7COpen+Sans:300,400,600,700%7CHandlee' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  router: {
    base: '/cptlsm/',
    linkActiveClass: 'light-green--text',
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'resolutions',
          path: '/resolutions',
          component: resolve(__dirname, 'pages/resolutions.vue')
        },
        {
          name: 'signup',
          path: '/signup/:step',
          component: resolve(__dirname, 'pages/signup.vue')
        },
        {
          name: 'dashboard',
          path: '/ngo/dashboard/:ngo_name',
          component: resolve(__dirname, 'pages/dashboard.vue')
        }
      )
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify', 'vue-highcharts'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  plugins: [
    // ssr: false to only include it on client-side
    // { src: '~plugins/vue-material.js', ssr: false },
    { src: '~plugins/vuetify.js', ssr: true },
    { src: '~plugins/vue-highcharts.js', ssr: true }
  ],

  // Shared Styles
  css: [
    { src: 'assets/styles/app.styl', lang: 'styl' }
  ]
}
