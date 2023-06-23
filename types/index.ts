export { }

declare global {

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

}