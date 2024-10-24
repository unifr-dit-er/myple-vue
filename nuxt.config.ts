// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  typescript: {
    shim: false
  },
  runtimeConfig: {
    public: {
      apiProvider: 'directus'
    }
  },
  i18n: {
    strategy: "prefix",
    locales: ['fr', 'de', 'it'],
    defaultLocale: "fr"
  },
  vue: {
    propsDestructure: true
  },
})
