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
        // ...
    };
}

export interface UserProfile {
    id: number;
    name: string;
    email: string;
}