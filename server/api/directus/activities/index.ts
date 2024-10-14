import { readItems } from "@directus/sdk"
import type { Activity } from "@/types/activity"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'

  const res = await useDirectus().request(
    readItems("activities", {
      limit: -1,
      fields: ["*", "translations.*"],
      deep: { translations: { _filter: { languages_code: { _eq: lang } } } },
      sort: ["sort"]
    })
  )

  let activities = res.map(e => transform(e))
  activities = activities.filter(e => e.title.trim() !== "")
  return activities as Activity[]
})

const transform = (response: any): Activity => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "",
    steps: response.steps
  }
}