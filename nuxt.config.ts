// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://eddb9.unifr.ch/myple/graphql' // overwritten by process.env.GQL_HOST
    }
  },
  i18n: {
    locales: ['fr', 'de', 'it']
  }
})
