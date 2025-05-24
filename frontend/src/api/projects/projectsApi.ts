import apiClient from '../apiClient';
import { Project, ProjectsResponse, ProjectResponse, CreateProjectRequest, UpdateProjectRequest } from './types';

const PROJECTS_BASE_URL = '/projects';

export const projectsApi = {
    getAllProjects: async (): Promise<ProjectsResponse> => {
        const response = await apiClient.get<ProjectsResponse>(PROJECTS_BASE_URL);
        return response.data;
    },

    getProjectById: async (id: number): Promise<ProjectResponse> => {
        const response = await apiClient.get<ProjectResponse>(`${PROJECTS_BASE_URL}/${id}`);
        return response.data;
    },

    createProject: async (projectData: CreateProjectRequest): Promise<ProjectResponse> => {
        const response = await apiClient.post<ProjectResponse>(PROJECTS_BASE_URL, projectData);
        return response.data;
    },

    updateProject: async (id: number, projectData: UpdateProjectRequest): Promise<ProjectResponse> => {
        const response = await apiClient.patch<ProjectResponse>(`${PROJECTS_BASE_URL}/${id}`, projectData);
        return response.data;
    },

    deleteProject: async (id: number): Promise<void> => {
        await apiClient.delete<void>(`${PROJECTS_BASE_URL}/${id}`);
    },
};