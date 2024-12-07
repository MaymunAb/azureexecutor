// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
  },
  css: [
    'vuetify/styles', // Adding Vuetify CSS for styling
  ],
  build: {
    transpile: ['vuetify'], // Ensures Vuetify is transpiled for compatibility
  },
})
