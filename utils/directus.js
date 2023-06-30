export const dTranslate = (object, key) => {
  return object?.translations?.[0]?.[key] || ''
}

export const dThumbnail = (id, preset) => {
  return `https://eddb9.unifr.ch/myple/assets/${id}/?key=${preset}`
}