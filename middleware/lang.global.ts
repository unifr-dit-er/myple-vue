export default defineNuxtRouteMiddleware((to, from) => {
  const regex = /(\/fr|\/de|\/it)/g

  const cleanedTo = to.path.replace(regex, '')
  const cleanedFrom = from.path.replace(regex, '')

  if (cleanedTo === cleanedFrom) {
    to.meta.pageTransition = false
  }
})