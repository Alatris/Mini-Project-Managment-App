import { toastService } from '@/components/ui/toast';

export const useToast = () => {
    return {
        showSuccess: (message: string) => toastService.success(message),
        showError: (message: string) => toastService.error(message),
        showPromise: toastService.promise,
        showCustom: toastService.custom
    };
};