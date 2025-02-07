export interface ContactSection {
  id: number;
  documentId: string;
  text: string;
  title: string;
  email: string;
  tel: string;
  github_url: string;
  linkedin_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactSectionResponse {
  data: ContactSection;
  meta: Record<string, unknown>;
}
