import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationProps {
    id: string;
    message: string;
    type?: NotificationType;
    duration?: number;
    onClose: (id: string) => void;
}

export const Notification: React.FC<NotificationProps> = ({
                                                              id,
                                                              message,
                                                              type = 'info',
                                                              duration = 5000,
                                                              onClose,
                                                          }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => onClose(id), 300);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, id, onClose]);

    const handleCloseClick = () => {
        setIsVisible(false);
        setTimeout(() => onClose(id), 300);
    };

    let bgColorClass = '';
    switch (type) {
        case 'success':
            bgColorClass = 'bg-green-500';
            break;
        case 'error':
            bgColorClass = 'bg-red-500';
            break;
        case 'warning':
            bgColorClass = 'bg-yellow-500';
            break;
        case 'info':
        default:
            bgColorClass = 'bg-blue-500';
            break;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    className={`relative p-4 rounded-md shadow-lg text-white ${bgColorClass} mb-3 flex items-center justify-between`}
                >
                    <span className="text-sm font-medium">{message}</span>
                    <button
                        onClick={handleCloseClick}
                        className="ml-4 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                        aria-label="Close notification"
                    >
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};