import { projectsApi } from '@/api/projects/projectsApi';
import { Project } from '@/api/projects/types';
import { useApiQuery } from './useApiQuery';

export function useProjects() {
    const { data: projects, isLoading, error, refetch } = useApiQuery<Project[]>(
        projectsApi.getAllProjects
    );

    return { projects, isLoading, error, refetch };
}