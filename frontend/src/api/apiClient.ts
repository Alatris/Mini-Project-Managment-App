import axios, {AxiosError, AxiosResponse} from 'axios';
import {toastService} from '@/components/ui/toast/toast.tsx';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError<{ message?: string }>): Promise<never> => {
        if (error.response?.status === 401) {
            localStorage.removeItem('access_token');
            window.location.href = '/login';
        }

        const errorMessage = error.response?.data?.message
            || error.message
            || 'Request failed';

        toastService.error(errorMessage);

        return Promise.reject(error);
    }
);

export default apiClient;
