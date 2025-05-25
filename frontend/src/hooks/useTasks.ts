
import { useQuery } from "@tanstack/react-query";
import apiClient from '../api/apiClient';
import { Task } from '../api/tasks/types';

export const useTasks = (projectId: number) => {
    const fetchTasks = async (projectId: number): Promise<Task[]> => {
        const response = await apiClient.get<Task[]>(`/projects/${projectId}/tasks`);
        return response.data;
    };

    return useQuery<Task[], Error>({
        queryKey: ['tasks', projectId],
        queryFn: () => fetchTasks(projectId),
        enabled: !!projectId,
    });
};