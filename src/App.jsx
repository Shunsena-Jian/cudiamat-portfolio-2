import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import './animations.css';
import AppLayout from './layouts/AppLayout.jsx';
import Header from "./components/Header/Header.jsx";

const Main = lazy(() => import("./pages/Main/Main.jsx"));
const Projects = lazy(() => import("./pages/Projects/Projects.jsx"));
const Experience = lazy(() => import("./pages/Experience/Experience.jsx"));

function App() {
    return (
        <>
            <Suspense fallback={<div className={'d-flex justify-content-center'}>Loading...</div>}>
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
            </Suspense>
        </>
    );
}

export default App;