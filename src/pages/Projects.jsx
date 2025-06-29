import {useEffect, useState} from "react";

import ProjectLayout from "../layouts/ProjectLayout.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = 'Projects - Cudiamat';
        fetch('/src/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const listProjects = () => {
        return(
            <ul>
                {
                    projects.map((project, index) => {
                        return (
                            <li key={index}>
                                {project}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    return (
        <ProjectLayout
            content={ listProjects() }
        />
    );
}