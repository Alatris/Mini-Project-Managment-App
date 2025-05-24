import { create } from 'zustand';
import { authApi } from '@/api/auth/authApi';
import {LoginResponse, RegisterResponse, UserProfile} from '@/api/auth/types';

export interface AuthState {
    user: UserProfile | null;
    isAuthenticated: boolean;
    accessToken: string | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => {
    return {
        accessToken: null,
        checkAuth: async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                set({isAuthenticated: true, accessToken: token});
                try {
                    const userProfile = await authApi.getProfile();
                    set({user: userProfile, isAuthenticated: true, accessToken: token, loading: false});
                } catch (err: unknown) {
                    get().logout();
                }
            } else {
                set({isAuthenticated: false, accessToken: null});
            }
        },
        error: null,
        isAuthenticated: false,
        loading: false,

        login: async (email: string, password: string): Promise<boolean> => {
            set({ loading: true, error: null });
            try {
                const response: LoginResponse = await authApi.login({ email, password });
                set({
                    user: response.user,
                    isAuthenticated: true,
                    accessToken: response.accessToken,
                    loading: false,
                });
                return true;
            } catch (err: unknown) {
                let errorMessage = 'Login failed';

                if (typeof err === 'object' && err !== null) {
                    const axiosError = err as { response?: { data?: { message?: string } } };
                    const standardError = err as Error;

                    errorMessage = axiosError?.response?.data?.message || standardError.message || errorMessage;
                }

                set({
                    error: errorMessage,
                    loading: false,
                });
                return false;
            }
        },

        logout: () => {
            authApi.logout();
            set({user: null, isAuthenticated: false, accessToken: null, error: null});
        },

        register: async (name: string, email: string, password: string): Promise<boolean> => {
            set({ loading: true, error: null });
            try {
                const response: RegisterResponse = await authApi.register({ name, email, password });
                set({
                    user: response.user,
                    isAuthenticated: true,
                    accessToken: response.accessToken,
                    loading: false,
                });
                return true;
            } catch (err: unknown) {
                let errorMessage = 'Registration failed';

                if (typeof err === 'object' && err !== null) {
                    const axiosError = err as { response?: { data?: { message?: string } } };
                    const standardError = err as Error;

                    errorMessage = axiosError?.response?.data?.message || standardError.message || errorMessage;
                }

                set({
                    error: errorMessage,
                    loading: false,
                });
                return false;
            }
        },

        user: null,
    };
});