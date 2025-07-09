import './animations.css';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

import AppLayout from './layouts/AppLayout.jsx';

import Header from "./pages/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import {useEffect} from "react";

function App() {
    const location = useLocation();

    useEffect(() => {
        const body = document.querySelector('body');
        switch (location.pathname) {
            case '/':
                body.style.background = 'linear-gradient(150deg, rgba(0, 59, 117, 1) 0%, rgba(0, 0, 0, 1) 30%)'
                break;
            case '/projects':
                body.style.background = 'linear-gradient(150deg, rgba(117, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%)'
                break;
            case '/experience':
                body.style.background = 'linear-gradient(150deg, rgba(0, 117, 0, 1) 0%, rgba(0, 0, 0, 1) 30%)'
                break;
            default:
                body.style.background = 'linear-gradient(150deg, rgba(0, 59, 117, 1) 0%, rgba(0, 0, 0, 1) 30%)'
                break;
        }
    }, [location]);

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AppLayout
                        header={<Header />}
                        content={<Outlet />}
                    />
                }
            >
                <Route index element={<Main />} />
                <Route path="projects" element={<Projects />} />
                <Route path="experience" element={<Experience />} />
            </Route>
        </Routes>
    );
}

export default App;