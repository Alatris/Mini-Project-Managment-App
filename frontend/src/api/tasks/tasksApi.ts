import apiClient from '../apiClient';
import {CreateTaskDto} from "@/api/tasks/types.ts";

export const createTask = (data: CreateTaskDto) =>
    apiClient.post('/tasks', data);

