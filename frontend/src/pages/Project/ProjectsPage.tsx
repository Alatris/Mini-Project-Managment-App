import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useNavigate } from 'react-router-dom';


const ProjectsPage: React.FC = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

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
            </div>
        </div>
    );
};

export default ProjectsPage;