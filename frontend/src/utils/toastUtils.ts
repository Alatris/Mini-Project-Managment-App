import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const showErrorToast = (message: string) => {
    toast.error(message, defaultOptions);
};

export const showSuccessToast = (message: string) => {
    toast.success(message, defaultOptions);
};
