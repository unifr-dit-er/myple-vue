export interface Tool {
  id: number;
  title: string;
  image: string;
  description: string;
  families: ToolFamily[];
  tags: String[];
  urlOfficial?: string;
  urlAlternativeto?: string;
  urlUnifr?: string;
  urlUsi?: string;
  activityStepsCount: number;
}

export interface ToolFamily {
  id: number;
  title: string;
  slug: string;
  tools?: Tool[];
}