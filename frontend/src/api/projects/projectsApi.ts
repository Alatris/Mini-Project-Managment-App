import apiClient from '../apiClient';
import { Project, CreateProjectDto, UpdateProjectDto } from '@/api/projects/types';
import { AxiosResponse } from 'axios';

export const getProjects = (): Promise<AxiosResponse<Project[]>> => {
    return apiClient.get('/projects');
};

export const getProject = (id: number): Promise<AxiosResponse<Project>> => {
    return apiClient.get(`/projects/${id}`);
};

export const createProject = (data: CreateProjectDto): Promise<AxiosResponse<Project>> => {
    return apiClient.post('/projects', data);
};

export const updateProject = (id: number, data: UpdateProjectDto): Promise<AxiosResponse<Project>> => {
    return apiClient.put(`/projects/${id}`, data);
};

export const deleteProject = (id: number): Promise<AxiosResponse<void>> => {
    return apiClient.delete(`/projects/${id}`);
};
