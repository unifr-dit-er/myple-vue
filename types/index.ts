export { }

declare global {

  interface Link {
    id: number;
    title: string;
    step?: number;
  }

  interface Step {
    id: number;
    title: string;
    content: string;
    toolFamilies: ToolFamily[];
    annexes: Annex[];
    resources: Resource[];
    isActive: boolean;
  }

  interface ToolFamily {
    id: number;
    title: string;
  }

  interface Annex {
    id: number;
    title: string;
    content: string;
  }

  interface Resource {
    id: number;
    title: string;
    date: string;
    author: string;
    type: string;
    tutorial: boolean;
    url: string;
  }

  interface Tool {
    id: number;
    title: string;
    image: string;
    description: string;
    url: string;
    urlAlternativeto: string;
    urlUnifr: string;
    urlUsi: string;
    families: ToolFamily[];
    steps: Link[];
    tags: Tag[];
  }

  interface Tag {
    id: number;
    title: string;
  }

  interface Stats {
    activities: number;
    tools: number;
    trainings: number;
  }

}