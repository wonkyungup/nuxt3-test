export default defineNuxtConfig({
  modules: [
      '@nuxtjs/color-mode'
  ],
  css: [
    'vuetify/dist/vuetify.min.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  build: {
    transpile: [
        'vuetify'
    ],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/variables.scss" as *;'
        }
      }
    }
  },
})
