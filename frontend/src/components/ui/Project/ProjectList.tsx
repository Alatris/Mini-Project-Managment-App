import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { deleteProject } from '@/api/projects/projectsApi';
import { Link } from 'react-router-dom';
import { toastService } from '@/components/ui/toast/toast.tsx';
import { Button } from '@/components/ui/Button/Button';

export const ProjectList: React.FC = () => {
    // @ts-ignore
    const { data: projects, isLoading, isError, error, refetch } = useProjects();

    const handleDelete = async (projectId: number) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteProject(projectId);
                toastService.success('Project deleted successfully!');
                refetch();
            } catch (err) {
                console.error('Failed to delete project:', err);
                toastService.error('Failed to delete project. Please try again.');
            }
        }
    };

    if (isLoading) {
        return <div className="text-center py-4">Loading projects...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center py-4">Error: {error?.message || 'Failed to load projects.'}</div>;
    }

    if (!projects || projects.length === 0) {
        return <div className="text-center py-4 text-gray-600">No projects found. Create a new one!</div>;
    }

    // @ts-ignore
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
                        <div>
                            <Link to={`/projects/${project.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                                {project.name}
                            </Link>
                            <p className="text-gray-600 mt-2 line-clamp-3">{project.description || 'No description provided.'}</p>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                            <Link to={`/projects/${project.id}/edit`}>
                                <Button className="bg-yellow-500 hover:bg-yellow-600">Edit</Button>
                            </Link>
                            <Button
                                onClick={() => handleDelete(project.id)}
                                className="bg-red-500 hover:bg-red-600"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};