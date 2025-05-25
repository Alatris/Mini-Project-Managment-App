import type { TaskStatus } from '@/api/tasks/types';

const statusClasses: Record<TaskStatus, string> = {
    todo: 'bg-gray-100 text-gray-800',
    in_progress: 'bg-blue-100 text-blue-800',
    done: 'bg-green-100 text-green-800',
};

const statusText: Record<TaskStatus, string> = {
    todo: 'To Do',
    in_progress: 'In Progress',
    done: 'Done',
};

interface StatusBadgeProps {
    status: TaskStatus;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
    return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[status]}`}>
      {statusText[status]}
    </span>
    );
};