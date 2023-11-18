import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Global Help Care Solutions Co., Ltd.',
    title: 'HOST-Health',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', 
      name: 'description', 
      content: 'HOST-Health | We offer health solutions for your stay in Thailand' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/google-fonts'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: 'HOST-Health/static/icon.png',
      fileName: 'icon.png',
      targetDir: 'icons',
      purpose: 'maskable'
    },
    meta: {
      title: 'Global Help Care Solutions Co., Ltd.',
      description: 'HOST-Health | We offer health solutions for your stay in Thailand',
      author: 'Kriangkrai Intarangsri & Suravit Chatapat',
      theme_color: '#f3f4f4'
    },
    manifest: {
      name: 'Global Help Care Solutions Co., Ltd.',
      short_name: 'HOST-Health',
      lang: 'en',
      display: 'fullscreen'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Prompt'
      }
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#1daaa2',
          accent: '#ffffff',
          secondary: '#91dfb1',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: '#f3f4f4'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleFonts: {
    families: {
      Prompt: true,
      Poppins: true,
      Roboto: true,
      Mitr: true
    }
  }
}
