// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/icon',
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
    locales: [
      { code: "fr", name: "Français", file: "fr.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
      { code: "it", name: "Italiano", file: "it.json" }
    ],
    defaultLocale: "fr",
  },
  vue: {
    propsDestructure: true
  },
})