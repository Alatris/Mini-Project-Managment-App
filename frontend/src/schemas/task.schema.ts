import { z } from 'zod';

export const TaskSchema = z.object({
    title: z.string().min(1, 'name'),
    description: z.string().optional(),
    status: z.enum(['todo', 'in_progress', 'done']),
    assignedUserId: z.number(),
    projectId: z.number(),
});