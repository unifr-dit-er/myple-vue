export const useFamiliesStore = defineStore('families', () => {
  const families: Ref<ToolFamily[]> = ref([])
  const active = ref(0)

  const filter = computed(() => {
    if (active.value === 0) {
      return {
        status: { _eq: 'published' }
      }
    }
    else {
      return {
        _and: [
          { status: { _eq: 'published' } },
          { categories: { categories_id: { id: { _eq: active.value } } } }
        ]
      }
    }
  })

  async function fetch() {
    const { data } = await useAsyncGql('GetFamilies', {
      lang: 'fr-FR'
    })

    if (data?.value?.families) {
      families.value = data.value.families.map((familyData: any) => {
        return {
          id: familyData.id,
          title: dTranslate(familyData, 'title')
        }
      })
    }
  }

  function setActive(id: number) {
    active.value = id
  }

  function reset() {
    active.value = 0
  }

  return { families, active, filter, fetch, setActive, reset }
})