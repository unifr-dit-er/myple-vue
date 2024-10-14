import { readItem } from "@directus/sdk"
import type { Activity, ActivityStep } from "@/types/activity"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || '1'
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'

  const res = await useDirectus().request(
    readItem("activities", id, {
      fields: [
        "*", "translations.*",
        "steps.*", "steps.translations.title", "steps.translations.content", "steps.translations.annexes",
        "steps.tool_families.tool_families_id.id", "steps.tool_families.tool_families_id.slug", "steps.tool_families.tool_families_id.translations.title",
        "steps.resources.resources_id.*"
      ],
      deep: { 
        translations: { _filter: { languages_code: { _eq: lang } } },
        steps: {
          translations: { _filter: { languages_code: { _eq: lang } } },
          _sort: "sort",
          tool_families: {
            tool_families_id: {
              translations: { _filter: { languages_code: { _eq: lang } } }
            }
          }
        }
      }
    })
  )

  return transform(res) as Activity
})

const transform = (response: any): Activity => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "",
    description: response.translations[0]?.content || "",
    steps: response.steps.map((s: any) => {
      return { 
        id: s.id, 
        title: s.translations[0]?.title, 
        content: s.translations[0]?.content,
        annexes: s.translations[0]?.annexes?.map((a: any) => {
          return {
            title: a.title,
            content: a.content
          }
        }),
        toolFamilies: s.tool_families.map((tf: any) => {
          return {
            id: tf.tool_families_id.id,
            slug: tf.tool_families_id.slug,
            title: tf.tool_families_id.translations[0]?.title
          }
        }).sort((a: any, b: any) => a.title.localeCompare(b.title)),
        resources: s.resources.map((r: any) => {
          return {
            id: r.resources_id.id,
            title: r.resources_id.title,
            url: r.resources_id.url,
            type: r.resources_id.type,
            date: r.resources_id.date,
            author: r.resources_id.author,
            tutorial: r.resources_id.tutorial,
            languages: r.resources_id.languages
          }
        })
      } as ActivityStep
    })
  }
}