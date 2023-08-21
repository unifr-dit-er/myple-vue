import { storeToRefs } from 'pinia'

export const useToolStore = defineStore('tool', () => {
  const currentId = ref()
  const tool: Ref<Tool|undefined> = ref()
  const settings = useSettingsStore()
  const drawer = ref(false)

  const { dLang } = storeToRefs(settings)

  watch(
    [() => dLang.value],
    () => { fetch(currentId.value) }
  )

  async function fetch(id: number) {
    currentId.value = id
    tool.value = undefined
    const { data } = await useAsyncGql('GetTool', { id: String(id), lang: dLang })

    const toolData: any = data?.value?.tool

    if (toolData) {
      tool.value = {
        id: Number(id),
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
        steps: getSteps(toolData),
        tags: toolData.tags.map((tagsData: any) => {
          return {
            id: Number(tagsData.tags_id.id),
            title: dTranslate(tagsData.tags_id, 'title')
          }
        })
      }
    }
  }

  function fetchAndOpen(id: number) {
    fetch(id)
    drawer.value = true
  }

  function closeDrawer() {
    drawer.value = false
  }

  return { tool, drawer, fetch, fetchAndOpen, closeDrawer }
})

function getSteps(toolData:any) {
  let steps = toolData.categories.flatMap((categoryData: any) => {
    return categoryData.categories_id.steps
    // Filter out null steps_id and null activity
    .filter((stepData: any) => stepData.steps_id !== null && stepData.steps_id.activity !== null)
      .map((stepData: any) => {
        return {
          id: Number(stepData.steps_id.id),
          title: dTranslate(stepData.steps_id, 'title'),
          activity: Number(stepData.steps_id.activity.id)
        }
      })
  }).sort((a: StepLink, b: StepLink) => a.title.localeCompare(b.title))

  // Remove duplicates based on step id
  const ids = new Set();
  steps = steps.filter((step: StepLink) => {
    if(ids.has(step.id)) {
      return false;
    } else {
      ids.add(step.id);
      return true;
    }
  })

  return steps
}