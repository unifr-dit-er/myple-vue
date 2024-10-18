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
  activityStepsCount?: number;
  steps?: ToolStep[];
}

export interface ToolFamily {
  id: number;
  title: string;
  slug: string;
  tools?: Tool[];
}

export interface ToolStep {
  id: number;
  title: string;
  activity: { id: number, title: string };
  sort: number;
}