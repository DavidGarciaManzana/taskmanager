// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-free/css/all.css',
],
})
