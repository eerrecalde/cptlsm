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
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  // Shared Styles
  css: [
    'assets/main.css'
  ],

  router: {
    linkExactActiveClass: 'md-toggle'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vue-material', 'vue-highcharts'],
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
    { src: '~plugins/vue-material.js', ssr: false },
    { src: '~plugins/vue-highcharts.js', ssr: true }
  ]
}
