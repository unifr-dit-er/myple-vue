export const useFamiliesStore = defineStore('families', () => {
  const families: Ref<Family[]> = ref([])
  const active = ref(0)

  const filter = computed(() => {
    return active.value !== 0
      ? { categories: { categories_id: { id: { _eq: active.value } } } }
      : { id: { _nnull: true } }
  })

  async function fetch() {
    const { data } = await useAsyncGql('GetFamilies', {
      lang: dLang()
    })

    if (data?.value?.families) {
      families.value = data.value.families.map((familyData: any) => {
        return {
          id: familyData.id,
          title: dTranslate(familyData, 'title')
        }
      }).sort((a: Family, b: Family) => a.title.localeCompare(b.title))
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