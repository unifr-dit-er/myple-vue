export const useStatsStore = defineStore('stats', () => {
  const stats = ref<Stats>({
    activities: 0,
    tools: 0,
    trainings: 0
  })

  async function fetch() {
    const { data } = await useAsyncGql('GetStats')

    stats.value.activities = data.value.activities.length
    stats.value.tools = data.value.tools.length
    stats.value.trainings = data.value.trainings.length
  }

  fetch()

  return { stats }
})