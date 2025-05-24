import apiClient from '../apiClient';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, UserProfile } from './types';

const AUTH_BASE_URL = '/auth';

export const authApi = {
    login: async (credentials: LoginRequest): Promise<LoginResponse> => {
        const response = await apiClient.post<LoginResponse>(`${AUTH_BASE_URL}/login`, credentials);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    register: async (userData: RegisterRequest): Promise<RegisterResponse> => {
        const response = await apiClient.post<RegisterResponse>(`${AUTH_BASE_URL}/register`, userData);
        localStorage.setItem('accessToken', response.data.accessToken);
        return response.data;
    },

    getProfile: async (): Promise<UserProfile> => {
        const response = await apiClient.get<UserProfile>(`${AUTH_BASE_URL}/profile`);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('accessToken');
    },
};