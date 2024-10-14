import { readItems } from "@directus/sdk"
import type { ToolFamily } from "@/types/tool"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'
  const family = query.family as string

  const filters = family ? { slug: { _eq: family } } : {}

  const res = await useDirectus().request(
    readItems("tool_families", {
      limit: -1,
      fields: ["*", "translations.*"],
      deep: { 
        translations: { _filter: { languages_code: { _eq: lang } } },
      },
      filter: filters,
      sort: ["id"]
    })
  )

  const families = res.map(e => transform(e))
  families.sort((a: ToolFamily, b: ToolFamily) => a.title.localeCompare(b.title))
  return families as ToolFamily[]
})

const transform = (response: any): ToolFamily => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "Missing title",
    slug: response.slug,
  }
}