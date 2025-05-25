import { StatusBadge } from '@/components/ui/StatusBadge/StatusBadge.tsx';
import type { Task } from '@/api/tasks/types';

interface TaskItemProps {
    task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg">{task.title}</h3>
                <StatusBadge status={task.status} />
            </div>

            {task.description && (
                <p className="mt-2 text-gray-600">{task.description}</p>
            )}

            <div className="mt-3 text-sm text-gray-500">
                <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    );
}