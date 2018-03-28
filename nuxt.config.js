module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'rascal-north',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Connection settings for web api
  */
  env: {
    webApiUrl: process.env.RASCALOID_URL || 'http://localhost',
    webApiPort: process.env.RASCALOID_PORT || '3000',
    enableBouncr: process.env.RASCALOID_ENABLE_BOUNCR || true,
  },

  plugins: ['~/plugins/router']
}
