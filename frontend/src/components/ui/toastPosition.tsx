import { ReactNode } from 'react';

type ToastPositionProps = {
    position?: 'top' | 'bottom';
    children: ReactNode;
};

export const ToastPosition = ({ position = 'top', children }: ToastPositionProps) => (
    <div className={`toast-position-${position}`}>
        {children}
    </div>
);