import React from 'react';
import { useTasks } from '@/hooks/useTasks';
import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm';

interface TaskListProps {
    projectId: number;
}

export const TaskList: React.FC<TaskListProps> = ({ projectId }) => {
    const { data: tasks, isLoading, isError, error, refetch } = useTasks(projectId);

    const handleTaskSubmitSuccess = () => {
        refetch();
    };

    if (isLoading) {
        return <div className="text-center py-2">Loading tasks...</div>;
    }

    if (isError) {
        return <div className="text-red-500 text-center py-2">Error loading tasks: {error?.message}</div>;
    }

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Add New Task</h3>
            <TaskForm projectId={projectId} onSubmit={handleTaskSubmitSuccess} />

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Current Tasks</h3>
            {tasks && tasks.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} onTaskChange={refetch} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No tasks for this project yet.</p>
            )}
        </div>
    );
};