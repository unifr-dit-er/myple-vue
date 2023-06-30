import { storeToRefs } from 'pinia'

export const useToolsStore = defineStore('tools', () => {
  const tools: Ref<Tool[]> = ref([])
  const drawer = ref(false)
  const activeTool: Ref<Tool|undefined> = ref()
  const familiesStore = useFamiliesStore()

  const { filter } = storeToRefs(familiesStore)

  watch(
    [() => filter.value],
    () => {
      fetch()
    }
  )

  async function fetch() {
    const { data } = await useAsyncGql('GetTools', {
      lang: 'fr-FR',
      filter: familiesStore.filter
    })

    if (data?.value?.tools) {
      tools.value = data.value.tools.map((toolData: any) => {
        return {
          id: toolData.id,
          title: toolData.title,
          image: dThumbnail(toolData.image.id, 'tool-thumbnail'),
          description: dTranslate(toolData, 'description'),
          url: toolData.url,
          urlAlternativeto: toolData.url_alternativeto,
          urlUnifr: toolData.url_unifr,
          urlUsi: toolData.url_usi,
          families: toolData.categories.map((familyData: any) => {
            return {
              id: Number(familyData.categories_id.id),
              title: dTranslate(familyData.categories_id, 'title')
            }
          }),
          tags: toolData.tags.map((tagsData: any) => {
            return {
              id: Number(tagsData.tags_id.id),
              title: dTranslate(tagsData.tags_id, 'title')
            }
          })
        }
      })
    }
  }

  function openDrawer() {
    drawer.value = true
  }

  function setActive(tool: Tool) {
    activeTool.value = tool
    drawer.value = true
  }

  return { tools, drawer, activeTool, fetch, setActive, openDrawer }
})