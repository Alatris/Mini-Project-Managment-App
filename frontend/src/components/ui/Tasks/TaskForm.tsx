import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createTask } from "@/api/tasks/tasksApi.ts";
import {CreateTaskDto} from "@/api/tasks/types.ts";

const taskSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    status: z.enum(['todo', 'in_progress', 'done']),
    assignedUserId: z.string().optional(),
    projectId: z.number().int().positive()
});

type TaskFormData = z.infer<typeof taskSchema>;

interface TaskFormProps {
    projectId: number;
    onSubmit: (data: TaskFormData) => Promise<void>;
}

export function TaskForm({ projectId, onSubmit }: TaskFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<TaskFormData>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            projectId,
            status: 'todo'
        }
    });

    const handleFormSubmit = async (data: TaskFormData) => {
        try {
            const taskToCreate: CreateTaskDto = {
                title: data.title,
                description: data.description,
                status: data.status,
                projectId: data.projectId,
                assignedUserId: data.assignedUserId,
            };
            await createTask(taskToCreate);
            await onSubmit(data);
            reset();
        } catch (error) {
            console.error('Failed to create task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            <div>
                <label htmlFor="title" className="block mb-1">
                    Title
                </label>
                <input
                    id="title"
                    {...register('title')}
                    className="w-full p-2 border rounded"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="description" className="block mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    {...register('description')}
                    className="w-full p-2 border rounded"
                    rows={3}
                />
            </div>

            <input type="hidden" {...register('projectId')} />

            <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
                {isSubmitting ? 'Creating...' : 'Create Task'}
            </button>
        </form>
    );
}