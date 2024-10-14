import { aggregate } from "@directus/sdk"

export default defineEventHandler(async (event) => {

  const activities = await useDirectus().request(
    aggregate('activities', {
      aggregate: { count: '*' },
    })
  )

  const tools = await useDirectus().request(
    aggregate('tools', {
      aggregate: { count: '*' },
    })
  )

  const trainings = await useDirectus().request(
    aggregate('trainings', {
      aggregate: { count: '*' },
    })
  )

  return {
    activities: activities[0].count,
    tools: tools[0].count,
    trainings: trainings[0].count
  }
})