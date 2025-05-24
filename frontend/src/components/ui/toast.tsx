import React from 'react';
import {toast, ToastContainer, ToastContainer as ReactToastContainer, ToastOptions} from 'react-toastify';

const MyToastContainer: React.FC = () => {
    return <ToastContainer />;
};

export default MyToastContainer;

const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
};

export const toastService = {
    success: (message: string, options?: ToastOptions) =>
        toast.success(message, { ...toastConfig, ...options }),

    error: (message: string, options?: ToastOptions) =>
        toast.error(message, { ...toastConfig, ...options }),

    warning: (message: string, options?: ToastOptions) =>
        toast.warning(message, { ...toastConfig, ...options }),

    info: (message: string, options?: ToastOptions) =>
        toast.info(message, { ...toastConfig, ...options }),

    custom: (content: React.ReactNode, options?: ToastOptions) =>
        toast(content, { ...toastConfig, ...options })
};

export const AppToastContainer = () => (
    <ReactToastContainer {...toastConfig} />
);

export class showErrorToast {
    get param(): never {
        return this._param;
    }

    set param(value: never) {
        this._param = value;
    }
    private _param: never;
    constructor(param: never) {
        this._param = param;

    }

}