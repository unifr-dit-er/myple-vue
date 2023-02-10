// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://eddb9.unifr.ch/myple/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
