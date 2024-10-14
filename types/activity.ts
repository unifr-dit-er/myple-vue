import type { ToolFamily } from "@/types/tool"
import type { Resource } from "~/types/resource"

export interface Activity {
  id: number;
  title: string;
  description?: string;
  steps?: ActivityStep[];
}

export interface ActivityStep {
  id: number;
  title?: string;
  content?: string;
  toolFamilies?: ToolFamily[];
  resources?: Resource[];
  annexes?: { title: string, content: string }[];
}