export interface ProjectSection {
  id: number;
  documentId: string;
  tag: string;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProjectSectionResponse {
  data: ProjectSection;
  meta: Record<string, unknown>;
}
