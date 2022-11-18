// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@huntersofbook/naive-ui-nuxt'
  ],
  naiveUI: {
    themeOverrides: {
      common: {
        primaryColor: '#d06516',
        primaryColorHover: '#f2a36f'
      }
    }
  },
  typescript: {
    shim: false
  },
})
