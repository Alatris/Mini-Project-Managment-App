import React from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from '@/hooks/useProjects';
import { TaskList } from '@/components/Tasks/TaskList';

export const ProjectDetails: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();

    const parsedProjectId = projectId ? parseInt(projectId, 10) : undefined;

    const { data: project, isLoading, isError, error } = useProject(parsedProjectId);

    if (isLoading) {
        return <div className="text-center py-4">Loading project details...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center py-4">Error: {error?.message || 'Failed to load project.'}</div>;
    }

    if (!project) {
        return <div className="text-center py-4">Project not found.</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.name}</h1>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">Tasks</h2>
                {parsedProjectId && <TaskList projectId={parsedProjectId} />}
                {!parsedProjectId && <p className="text-gray-500">Cannot load tasks without a project ID.</p>}
            </div>
        </div>
    );
};