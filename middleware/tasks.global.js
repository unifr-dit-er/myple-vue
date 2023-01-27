export default defineNuxtRouteMiddleware((to, from) => {
  // setting the redirect code to '301 Moved Permanently'
  if (from.path.includes('/tasks/')) {
    return navigateTo('/activities/' +  from.path[7], { redirectCode: 301 })
  }
})