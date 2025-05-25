import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createProject, updateProject } from '@/api/projects/projectsApi';
import { Project } from '@/api/projects/types';
import { toastService } from '@/components/ui/toast/toast.tsx';

const projectSchema = z.object({
    name: z.string().min(1, 'Project name is required'),
    description: z.string().optional(),
    status: z.enum(['todo', 'in_progress', 'done']),
    assignedUserId: z.string().optional(),
    projectId: z.number().int().positive()
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
    initialData?: Project;
    onSuccess?: () => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ initialData, onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ProjectFormData>({
        resolver: zodResolver(projectSchema),
        defaultValues: initialData || { name: '', description: '' }, // Установка начальных значений
    });

    React.useEffect(() => {
        reset(initialData || { name: '', description: '' });
    }, [initialData, reset]);

    const onSubmit = async (data: ProjectFormData) => {
        try {
            if (initialData?.id) {
                await updateProject(initialData.id, data);
                toastService.success('Project updated successfully!');
            } else {
                await createProject(data);
                toastService.success('Project created successfully!');
            }
            reset();
            onSuccess?.();
        } catch (error) {
            console.error('Failed to save project:', error);
            toastService.error('Failed to save project. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Project Name
                </label>
                <input
                    id="name"
                    {...register('name')}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    {...register('description')}
                    rows={3}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
                {isSubmitting ? 'Saving...' : initialData ? 'Update Project' : 'Create Project'}
            </button>
        </form>
    );
};