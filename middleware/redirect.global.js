export default defineNuxtRouteMiddleware((to, from) => {
  // Detect lang based on original path
  const langMatch = to.path.match(/^\/(fr|it|de)\//);
  const lang = langMatch ? langMatch[1] : 'fr';

  if (to.path.includes('/tasks/')) {
      const taskId = to.path.split('/tasks/')[1];
      return navigateTo(`/${lang}/activities/` + taskId, { redirectCode: 301 });
  }

  if (to.path.includes('/formations')) {
      return navigateTo(`/${lang}/training`, { redirectCode: 301 });
  }
});
