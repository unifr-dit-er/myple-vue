import { storeToRefs } from 'pinia'

export const useMiscStore = defineStore('misc', () => {
  const activities: Ref<Link[]> = ref([])
  const settings = useSettingsStore()

  const { dLang } = storeToRefs(settings)

  watch(
    [() => dLang.value],
    () => { fetch() }
  )

  async function fetch() {
    const { data } = await useAsyncGql('GetActivities', { lang: dLang })

    if (data?.value?.activities) {
      activities.value = data.value.activities.map((activityData: any) => {
        return {
          id: activityData.id,
          title: dTranslate(activityData, 'title')
        }
      })
      .filter((activity: any) => activity.title.trim() !== '')
      .sort((a: Link, b: Link) => a.title.localeCompare(b.title))
    }
  }

  fetch()

  return { activities }
})