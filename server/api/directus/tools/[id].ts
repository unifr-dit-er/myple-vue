import { readItem, readTranslations } from "@directus/sdk"
import type { Tool, ToolStep } from "@/types/tool"
import type { Translation } from "@/server/utils/directus"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'
  const translations = await useDirectus().request(readTranslations({ limit: -1 })) as Translation[]
  
  const res = await useDirectus().request(
    readItem("tools", id, {
      fields: [
        "*", "translations.*", 
        "families.tool_families_id.*", "families.tool_families_id.translations.title",
        "families.tool_families_id.steps.steps_id.id", "families.tool_families_id.steps.steps_id.sort", "families.tool_families_id.steps.steps_id.translations.title",
        "families.tool_families_id.steps.steps_id.activity.id", "families.tool_families_id.steps.steps_id.activity.translations.title"
      ],
      deep: { 
        translations: { _filter: { languages_code: { _eq: lang } } },
        families: {
          tool_families_id: {
            translations: { _filter: { languages_code: { _eq: lang } } },
            steps: {
              steps_id: {
                translations: { _filter: { languages_code: { _eq: lang } } },
                activity: {
                  translations: { _filter: { languages_code: { _eq: lang } } }
                }
              }
            }
          }
        }
      }
    })
  )

  const tool = transform(res, translations, lang)
  return tool
})

const transform = (response: any, translations: Translation[], lang: string): Tool => {
  const stepsMap = new Map<number, ToolStep>()

  response.families.forEach((family: any) => {
    family.tool_families_id.steps.forEach((step: any) => {
      const activity = step.steps_id.activity
      const activityTitle = activity.translations[0]?.title
      
      const stepId = step.steps_id.id
      if (!stepsMap.has(stepId)) {
        stepsMap.set(stepId, {
          id: stepId,
          title: step.steps_id.translations[0]?.title,
          activity: {
            id: activity.id,
            title: activityTitle
          },
          sort: step.steps_id.sort
        })
      }
    })
  })

  // Convert the stepsMap to an array and sort it
  const steps: ToolStep[] = Array.from(stepsMap.values())
  steps.sort((a, b) => a.activity.id - b.activity.id || a.sort - b.sort)

  return {
    id: response.id,
    title: response.title || "Missing title",
    image: `https://eddb.unifr.ch/didanum-admin/assets/${response.image}/?width=160&height=160`,
    description: response.translations[0]?.description || "",
    families: response.families.map((family: any) => ({
      id: 1,
      title: family.tool_families_id.translations[0]?.title,
      slug: family.tool_families_id.slug
    })),
    tags: response.tags.map((tag: string) => dTranslate(translations, tag, lang)),
    urlOfficial: response.url_official,
    urlAlternativeto: response.url_alternativeto,
    urlUnifr: response.url_unifr,
    urlUsi: response.url_usi,
    steps
  }
}