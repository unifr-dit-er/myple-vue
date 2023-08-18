export const useSettingsStore = defineStore('settings', () => {
  const { locale } = useI18n()
  const lang = ref(locale)

  const dLang = computed(() => {
    switch(lang.value) {
      case 'it':
        return 'it-IT'
      case 'de':
        return 'de-DE'
      default:
        return 'fr-FR'
    }
  })

  function switchLang(l:string) {
    const route = useRoute()
    const router = useRouter()

    lang.value = l
    locale.value = l
    const newPath = route.path.replace(/\/(de|fr|it)/, `/${l}`)
    router.push(newPath)
  }

  return { lang, dLang, switchLang }
})