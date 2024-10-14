export default defineNuxtRouteMiddleware((to, from) => {
  // Detect lang based on original path
  const langMatch = to.path.match(/^\/(fr|it|de)\//);
  const lang = langMatch ? langMatch[1] : 'fr';
  const toolsId = [{"id":23,"slug":"agenda"},{"id":7,"slug":"annotation-fichiers"},{"id":15,"slug":"banques-images"},{"id":8,"slug":"bases-donnees-bibliographiques"},{"id":29,"slug":"bloc-notes"},{"id":21,"slug":"carte-conceptuelle"},{"id":13,"slug":"conversion-formats-fichiers"},{"id":2,"slug":"correction-texte"},{"id":1,"slug":"creation-graphiques"},{"id":6,"slug":"creation-presentations-visuelles"},{"id":3,"slug":"dictionnaires"},{"id":26,"slug":"e-portfolio"},{"id":30,"slug":"enquete-enligne"},{"id":20,"slug":"feuille-calcul"},{"id":5,"slug":"gestion-bibliographique"},{"id":28,"slug":"intelligence-artificielle"},{"id":11,"slug":"organiseur-taches"},{"id":19,"slug":"outils-video"},{"id":25,"slug":"plateforme-cours"},{"id":14,"slug":"protection-donnees"},{"id":24,"slug":"questions-idees-votes"},{"id":18,"slug":"recherche-informations"},{"id":9,"slug":"reseaux-sociaux"},{"id":22,"slug":"reunions-enligne"},{"id":10,"slug":"stockage-partage-fichiers-liens"},{"id":16,"slug":"tableau-blanc"},{"id":17,"slug":"traduction-texte"},{"id":4,"slug":"traitement-texte"},{"id":27,"slug":"utilitaire"}];

  // Redirect for tasks
  if (to.path.includes('/tasks/')) {
    const taskId = to.path.split('/tasks/')[1];
    return navigateTo(`/${lang}/activities/` + taskId, { redirectCode: 301 });
  }

  // Redirect for formations and training
  if (to.path.includes('/formations') || 
      (to.path.match(/^\/(fr|it|de)\/training/) && !to.path.match(/^\/(fr|it|de)\/trainings/))) {
    return navigateTo(`/${lang}/trainings`, { redirectCode: 301 });
  }

  // Check for a hash and redirect for tools
  if (to.hash && to.hash.startsWith('#family-')) {
    const toolId = parseInt(to.hash.replace('#family-', ''), 10);
    const tool = toolsId.find(item => item.id === toolId);
    if (tool) {
      return navigateTo(`/tools/${tool.slug}`, { redirectCode: 301 });
    }
  }
});
