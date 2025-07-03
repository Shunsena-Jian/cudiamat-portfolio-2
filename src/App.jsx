import './animations.css';
import { Routes, Route, Outlet } from 'react-router-dom';

import AppLayout from './layouts/AppLayout.jsx';

import Header from "./pages/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
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
                <Route path="experiences" element={<Experience />} />
            </Route>
        </Routes>
    );
}

export default App;