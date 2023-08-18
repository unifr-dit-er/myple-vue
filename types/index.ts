export { }

declare global {

  interface Activity {
    id: number;
    title: string;
    content: string;
    steps: Step[];
  }

  interface Link {
    id: number;
    title: string;
    step?: number;
  }

  interface Step {
    id: number;
    title: string;
    content: string;
    families: Family[];
    annexes: Annex[];
    resources: Resource[];
    isActive: boolean;
  }

  interface Family {
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
    families: Family[];
    tags: Tag[];
    url?: string;
    urlAlternativeto?: string;
    urlUnifr?: string;
    urlUsi?: string;
    steps?: Link[];
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

  interface Training {
    id: number;
    title: string;
    description: string;
    semester: string;
    format: string;
    url: string;
  }

}