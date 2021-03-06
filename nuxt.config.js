export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'em-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href:
          process.env.NODE_ENV === 'development'
            ? '/favicon.ico'
            : './assets/favicon.ico',
      },
    ],
  },

  router: {
    base: process.env.NODE_ENV === 'development' ? '/' : '/em-nuxt/',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content', '@nuxtjs/style-resources', '@nuxtjs/robots'],

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  content: {
    // Options
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
