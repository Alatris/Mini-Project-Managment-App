import { useQuery } from '@tanstack/react-query';
import { getProjects, getProject } from '@/api/projects/projectsApi';
import { Project } from '@/api/projects/types';

export const useProjects = () => {
    return useQuery<Project[], Error>({
        queryKey: ['projects'],
        queryFn: getProjects,
    });
};


export const useProject = (projectId?: number) => {
    return useQuery<Project, Error>({
        queryKey: ['project', projectId],
        queryFn: () => {
            if (!projectId) {
                throw new Error('Project ID is required to fetch a project.');
            }
            return getProject(projectId);
        },
        enabled: !!projectId,
    });
};