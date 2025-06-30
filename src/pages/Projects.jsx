import {useEffect, useState} from "react";

import UnderLineGrow from "../components/UnderlineGrow/UnderLineGrow.jsx";

import ProjectLayout from "../layouts/ProjectLayout.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = 'Projects - Cudiamat';
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const listProjects = () => {
        return(
            <ul className={'m-0 ps-0 list-unstyled'}>
                {
                    projects.map((project, index) => {
                        return (
                            <li key={index} className={'mb-2'}>
                                <UnderLineGrow>
                                    <h5 className={'m-0'}>
                                        {project}
                                    </h5>
                                </UnderLineGrow>
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