import { storeToRefs } from 'pinia'

export const useToolsStore = defineStore('tools', () => {
  const tools: Ref<Tool[]> = ref([])
  const drawer = ref(false)
  const activeTool: Ref<Tool|undefined> = ref()
  const familiesStore = useFamiliesStore()
  const settings = useSettingsStore()

  const { dLang } = storeToRefs(settings)
  const { filter } = storeToRefs(familiesStore)

  watch(
    [() => filter.value, () => dLang.value],
    () => { fetch() }
  )

  async function fetch() {
    const { data } = await useAsyncGql('GetTools', {
      lang: settings.dLang,
      filter: familiesStore.filter
    })

    if (data?.value?.tools) {
      tools.value = data.value.tools.map((toolData: any) => {
        return {
          id: toolData.id,
          title: toolData.title,
          image: dThumbnail(toolData.image.id, 'tool-thumbnail'),
          description: dTranslate(toolData, 'description'),
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

  function closeDrawer() {
    drawer.value = false
  }

  function setActive(tool: Tool) {
    activeTool.value = tool
    drawer.value = true
  }

  fetch()

  return { tools, drawer, activeTool, setActive, openDrawer, closeDrawer }
})