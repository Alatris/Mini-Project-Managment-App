export interface Project {
    id: number;
    name: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    userId: number;
}

export type ProjectsResponse = Project[];

export type ProjectResponse = Project;

export interface CreateProjectRequest {
    name: string;
    description?: string;
    startDate?: string;
    endDate?: string;
}

export interface UpdateProjectRequest {
    name?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
}
