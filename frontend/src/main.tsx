import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/Auth/LoginPage.tsx';
import RegisterPage from './pages/Auth/RegisterPage.tsx';
import ProjectsPage from './pages/Project/ProjectsPage.tsx';
import { useAuthStore } from './stores/authStore.ts';
import { useEffect } from 'react';

function App() {
    const checkAuth = useAuthStore(state => state.checkAuth);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    interface PrivateRouteProps {
        children: React.ReactNode;
    }


    const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({children}) => {
        const {isAuthenticated, loading, checkAuth} = useAuthStore();

        useEffect(() => {
            checkAuth();
        }, [checkAuth]);

        if (loading) {
            return <div>Loading authentication...</div>;
        }

        return isAuthenticated ? <>{children}</> : <Navigate to="/login"/>;
    };

    const RootApp: React.FC = () => {
        const checkAuth = useAuthStore((state) => state.checkAuth);

        useEffect(() => {
            checkAuth();
        }, [checkAuth]);

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>

                    <Route
                        path="/projects"
                        element={
                            <PrivateRoute>
                                <ProjectsPage/>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<Navigate to="/projects"/>}/>
                    <Route path="*" element={<div>404 Not Found</div>}/>
                </Routes>
            </BrowserRouter>
        );
    };


    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <RootApp/>
        </React.StrictMode>,
    );
}