import { toastService } from '@/components/ui/toast/toast.tsx';

export const useToast = () => {
    return {
        showSuccess: (message: string) => toastService.success(message),
        showError: (message: string) => toastService.error(message),
        showPromise: toastService.promise,
        showCustom: toastService.custom
    };
};