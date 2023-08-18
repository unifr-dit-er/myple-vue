import { storeToRefs } from 'pinia'

export const useActivityStore = defineStore('activity', () => {
  const currentId = ref()
  const activity: Ref<Activity|undefined> = ref()
  const settings = useSettingsStore()

  const { dLang } = storeToRefs(settings)

  watch(
    [() => dLang.value],
    () => { fetch(currentId.value) }
  )

  async function fetch(id: number) {
    currentId.value = id
    activity.value = undefined
    const { data } = await useAsyncGql('GetActivity', { id: String(id), lang: dLang })

    const activityData: any = data?.value?.activity

    if (activityData) {
      activity.value = {
        id: Number(id),
        title: dTranslate(activityData, 'title'),
        content: dTranslate(activityData, 'content'),
        steps: activityData.steps.map((stepData: any) => {
          return {
            id: stepData.id,
            title: dTranslate(stepData, 'title'),
            content: dTranslate(stepData, 'content'),
            families: stepData.toolfamilies.map((toolFamilyData: any) => {
              return {
                id: Number(toolFamilyData.categories_id.id),
                title: dTranslate(toolFamilyData.categories_id, 'title')
              }
            }).sort((a: Family, b: Family) => a.title.localeCompare(b.title)),
            annexes: stepData.annexes.map((annexData: any) => {
              return {
                id: annexData.id,
                title: dTranslate(annexData, 'title'),
                content: dTranslate(annexData, 'content')
              }
            }),
            resources: stepData.resources.map((resourceData: any) => {
              return {
                id: resourceData.id,
                title: resourceData.resources_id.title,
                date: resourceData.resources_id.date,
                author: resourceData.resources_id.author,
                type: resourceData.resources_id.type,
                tutorial: resourceData.resources_id.tutorial,
                url: resourceData.resources_id.url
              }
            }),
            isActive: false
          }
        })
      }
    }
  }

  return { activity, fetch }
})