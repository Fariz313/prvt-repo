// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
    ,'@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  }
})
