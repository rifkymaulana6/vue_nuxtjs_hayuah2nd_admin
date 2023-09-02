import colors from "vuetify/es5/util/colors";

export default {
  server: {
    port: 3002, // default: 3000
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "hayuah2nd-admin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "eCommerce Website" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css", `@sweetalert2/theme-material-ui`],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/cart.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    `vue-sweetalert2/nuxt/no-css`,
    `nuxt-webfontloader`,
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],

  webfontloader: {
    google: {
      families: [`DM+Sans:wght@400;500;700&display=swap`],
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeshake: true,
    defaultAssets: {
      font: {
        family: "DM Sans",
        size: 15,
      },
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.deepPurple.darken1,
          bg: `#ffffff`,
          surface: `#ffffff`,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: colors.deepPurple.darken1,
          bg: `#0a0514`,
          surface: `#130a24`,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL,
  },

  auth: {
    strategies: {
      local: {
        // scheme: "refresh",
        // localStorage: {
        //   prefix: "auth.",
        // },
        // token: {
        //   prefix: "access_token.",
        //   property: "access_token",
        //   maxAge: 86400,
        //   type: "Bearer",
        // },
        // refreshToken: {
        //   prefix: "refresh_token.",
        //   property: "refresh_token",
        //   data: "refresh_token",
        //   maxAge: 60 * 60 * 24 * 15,
        // },
        // user: {
        //   property: "user",
        //   autoFetch: true,
        // },
        endpoints: {
          login: {
            url: "/customers/login",
            method: "post",
            propertyName: "data.accessToken",
          },
          // refresh: { url: "/customers/token", method: "post" },
          // user: { url: "/customers/:id", method: "get", propertyName: "data" },
          // logout: { url: "/logout", method: "delete" },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
