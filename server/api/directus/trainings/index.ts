import { readItems, readTranslations } from "@directus/sdk"
import type { Training } from "@/types/training"
import type { Translation } from "@/server/utils/directus"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const lang = query.lang as string || 'fr-FR'
  const translations = await useDirectus().request(readTranslations({ limit: -1 })) as Translation[]

  const res = await useDirectus().request(
    readItems("trainings", {
      limit: -1,
      fields: ["*", "translations.*"],
      deep: { translations: { _filter: { languages_code: { _eq: lang } } } }
    })
  )

  const trainings = res.map(e => transform(e, translations, lang))
  return trainings as Training[]
})

const transform = (response: any, translations: Translation[], lang: string): Training => {
  return {
    id: response.id,
    title: response.translations[0]?.title || "Missing title",
    description: response.translations[0]?.description || "",
    institution: response.institution,
    availability: response.availability.map((a: string) => dTranslate(translations, a, lang)),
    modality: dTranslate(translations, response.modality, lang),
    duration: dTranslate(translations, response.duration, lang),
    semester: dTranslate(translations, response.semester, lang),
    languages: response.language,
    ects: "",
    url: response.url
  }
}