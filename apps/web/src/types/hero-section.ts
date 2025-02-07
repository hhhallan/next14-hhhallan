interface HeroSectionButton {
  id: number;
  title: string;
  link: string;
  external: boolean;
  label: string;
}

export interface HeroSection {
  id: number;
  documentId: string;
  introduction: string;
  title: string;
  description: string;
  buttons: HeroSectionButton[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HeroSectionResponse {
  data: HeroSection;
  meta: Record<string, unknown>;
}
