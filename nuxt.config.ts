import vuetify from 'vuetify';

export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
  },
  css: [
    'vuetify/styles', // Vuetify styles should be imported here
  ],
  build: {
    transpile: ['vuetify'], // Ensure Vuetify is transpiled correctly
    rollupOptions: {
      external: ['vuetify/styles'], // Ensure Vuetify styles are externalized
    },
  },
});
