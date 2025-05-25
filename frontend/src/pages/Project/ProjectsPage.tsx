import React, {useEffect, useState} from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';
import { TaskItem } from '@/components/ui/Tasks/TaskItem.tsx';
import type { Task } from '@/api/tasks/types';
import apiClient from "@/api/apiClient.ts";
import axios from "axios";

const ProjectsPage: React.FC = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const [tasks, setTasks] = useState<Task[]>([]);
    const [loadingTasks, setLoadingTasks] = useState<boolean>(true);
    const [errorTasks, setErrorTasks] = useState<string | null>(null);

    const fetchTasks = async () => {
        setLoadingTasks(true);
        setErrorTasks(null);
        try {
            const response = await apiClient.get<Task[]>('/tasks');
            setTasks(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || error.message;
                console.error("Failed to fetch tasks (Axios error):", errorMessage);
                setErrorTasks(errorMessage);
            } else if (error instanceof Error) {
                console.error("Failed to fetch tasks (Generic error):", error.message);
                setErrorTasks(error.message);
            } else {
                console.error("Failed to fetch tasks (Unknown error):", error);
                setErrorTasks("An unknown error occurred.");
            }
        } finally {
            setLoadingTasks(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Welcome, {user?.name || 'User'}!</h2>
            <p>This is your Projects Page. You are logged in.</p>
            <button onClick={handleLogout} style={{
                padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'
            }}>
                Logout
            </button>

            <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <h3>Your Projects:</h3>
                <p> (Project list will go here) </p>

                <h4>Tasks related to this project:</h4>
                {loadingTasks ? (
                    <p>Loading tasks...</p>
                ) : errorTasks ? (
                    <p style={{ color: 'red' }}>Error: {errorTasks}</p>
                ) : tasks.length > 0 ? (
                    tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))
                ) : (
                    <p>No tasks available for this project.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;