// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://eddb9.unifr.ch/myple/graphql'
      }
    },
  }
})
