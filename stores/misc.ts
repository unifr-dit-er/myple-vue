export const useMiscStore = defineStore('misc', () => {
  const activities: Ref<Activity[]> = ref([])

  async function fetch() {
    const { data } = await useAsyncGql('GetActivities', {
      lang: 'fr-FR'
    })

    if (data?.value?.activities) {
      activities.value = data.value.activities.map((activityData: any) => {
        return {
          id: activityData.id,
          title: dTranslate(activityData, 'title')
        }
      })
    }
  }

  return { activities, fetch }
})