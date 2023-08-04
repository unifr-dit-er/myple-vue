export const useTrainingsStore = defineStore('trainings', () => {
  const trainings: Ref<Training[]> = ref([])

  async function fetch() {
    const { data } = await useAsyncGql('GetTrainings', {
      lang: 'fr-FR'
    })

    if (data?.value?.trainings) {
      trainings.value = data.value.trainings.map((trainingData: any) => {
        return {
          id: trainingData.id,
          title: dTranslate(trainingData, 'title'),
          description: dTranslate(trainingData, 'description'),
          semester: dTranslate(trainingData.semester, 'title'),
          format: dTranslate(trainingData.course_format, 'title'),
          url: trainingData.url
        }
      }).sort((a: Training, b: Training) => a.title.localeCompare(b.title))
    }
  }

  fetch()

  return { trainings }
})