import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const taskSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    status: z.enum(['todo', 'in_progress', 'done']),
    assignedUserId: z.number(),
});

export function TaskForm({ projectId }: { projectId: number }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(taskSchema),
    });

    const onSubmit = (data) => {
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title')} />
            {errors.title && <p>{errors.title.message}</p>}
            <button type="submit">Create Task</button>
        </form>
    );
}