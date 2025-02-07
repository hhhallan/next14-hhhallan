import axios from "axios";
import { ProjectsResponse, Project, ProjectResponse } from "@/types/projects";
import { ProjectSectionResponse } from "@/types/project-section";
import { HeroSectionResponse } from "@/types/hero-section";
import { ContactSectionResponse } from "@/types/contact-section";

const API_URL =
  process.env.NEXT_PUBLIC_PROD_STRAPI_URL ||
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337/api"; // URL de l'API Strapi

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});

// Récupérer tous les projets
export const getProjects = async (): Promise<ProjectsResponse> => {
  try {
    const response = await axios.get<ProjectsResponse>(
      `${API_URL}/api/projects`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    throw error;
  }
};

// Récupérer un projet par son ID
export const getProjectById = async (id: number): Promise<ProjectResponse> => {
  try {
    const response = await axios.get<ProjectResponse>(
      `${API_URL}/api/projects/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du projet:", error);
    throw error;
  }
};

export const getProjectSection = async (): Promise<ProjectSectionResponse> => {
  try {
    const response = await api.get<ProjectSectionResponse>(
      "/api/project-section"
    );
    return response.data;
  } catch (error) {
    console.log(`Erreur lors de la récupération de la section projet:`, error);
    throw error;
  }
};

export const getHeroSection = async (): Promise<HeroSectionResponse> => {
  try {
    const response = await api.get<HeroSectionResponse>(
      "/api/hero-section?populate=*"
    );
    return response.data;
  } catch (error) {
    console.log(`Erreur lors de la récupération de la section projet:`, error);
    throw error;
  }
};

export const getContactSection = async (): Promise<ContactSectionResponse> => {
  try {
    const response = await api.get<ContactSectionResponse>(
      "/api/contact-section"
    );
    return response.data;
  } catch (error) {
    console.log(`Erreur lors de la récupération de la section projet:`, error);
    throw error;
  }
};
