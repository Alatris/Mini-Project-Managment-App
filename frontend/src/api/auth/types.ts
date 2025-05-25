export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}


export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    accessToken: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export interface UserProfile {
    id: number;
    name: string;
    email: string;
}

export interface Project {
    id: string;
    name: string;
    description?: string;
}

export interface CreateTaskDto {
    title: string;
    description?: string;
    status: 'todo' | 'in_progress' | 'done';
    projectId: number;
    assignedUserId?: string | null;
}

    export interface UpdateProjectDto {
    title: string;
    description?: string;
    status: 'todo' | 'in_progress' | 'done';
    projectId: number;
    assignedUserId?: string | null;
}

