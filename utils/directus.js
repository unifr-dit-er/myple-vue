export const dTranslate = (object, key) => {
  return object?.translations?.[0]?.[key] || ''
}

export const dThumbnail = (id, preset) => {
  return `https://eddb9.unifr.ch/myple/assets/${id}/?key=${preset}`
}

export const dLang = () => {
  const { locale } = useI18n()
  switch(locale.value) {
    case 'it':
      return 'it-IT'
    case 'de':
      return 'de-DE'
    default:
      return 'fr-FR'
  }
}