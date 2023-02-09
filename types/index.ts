export { }

declare global {
  type ActivitiesResult = {
    activities: {
      id: string;
      translations: {
        title: string;
      }[];
    }[]
  }
}