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
        let steps = toolData.categories.flatMap((categoryData: any) => {
          return categoryData.categories_id.steps
            .filter((stepData: any) => stepData.steps_id !== null) // Filter out null steps_id
            .map((stepData: any) => {
              return {
                id: Number(stepData.steps_id.activity.id),
                title: dTranslate(stepData.steps_id, 'title'),
                step: Number(stepData.steps_id.id)
              }
            })
        }).sort((a: Link, b: Link) => a.title.localeCompare(b.title))

        // Remove duplicates based on step id
        const ids = new Set();
        steps = steps.filter((step: Link) => {
          if(ids.has(step.step)) {
            return false;
          } else {
            ids.add(step.step);
            return true;
          }
        })

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
          steps,
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

  return { tools, drawer, activeTool, fetch, setActive, openDrawer, closeDrawer }
})