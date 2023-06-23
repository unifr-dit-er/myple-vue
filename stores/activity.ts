export const useActivityStore = defineStore('activity', () => {
  const title = ref('Activity loading')
  const content = ref('')
  const steps: Ref<Step[]> = ref([])

  async function fetch(id: string) {
    const { data } = await useAsyncGql('GetActivity', {
      id: id,
      lang: 'fr-FR'
    })
    const activity = data?.value?.activity
    title.value = dTranslate(activity, 'title')
    content.value = dTranslate(activity, 'content')

    if (activity?.steps) {
      steps.value = activity.steps.map((stepData: any) => {
        return {
          id: stepData.id,
          title: dTranslate(stepData, 'title'),
          content: dTranslate(stepData, 'content'),
          toolFamilies: stepData.toolfamilies.map((toolFamilyData: any) => {
            return {
              id: Number(toolFamilyData.categories_id.id),
              title: dTranslate(toolFamilyData.categories_id, 'title')
            }
          }).sort((a: ToolFamily, b: ToolFamily) => a.title.localeCompare(b.title)),
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

  return { title, content, steps, fetch }
})