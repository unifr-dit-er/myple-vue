// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/apollo',
    'nuxt-graphql-client',
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
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://eddb9.unifr.ch/myple/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
