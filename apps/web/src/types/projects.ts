interface ProjectImage {
  data: {
    id: number;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
      width: number;
      height: number;
    };
  };
}

export interface Project {
  id: number;
  documentId: string;
  name: string;
  description: string;
  type: string;
  github: string | null;
  website: string | null;
  isActive: boolean;
  technos: string[];
  attributes: {
    image: ProjectImage;
  };
}

// Pour la route findAll
export interface ProjectsResponse {
  data: Project[];
  meta: Record<string, unknown>;
}

// Pour la route findOne
export interface ProjectResponse {
  data: Project;
  meta: Record<string, unknown>;
}
