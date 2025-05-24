export interface Project {
    id: string;
    title: string;
    description: string;
    ownerId: number;
    tasks?: Task[];
}

export interface Task {
    id: string;
    title: string;
    status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}