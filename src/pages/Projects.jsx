import {useEffect, useState} from "react";

import UnderLineGrow from "../components/UnderlineGrow/UnderLineGrow.jsx";
import styles from "../styles/projects.module.css"

import ProjectLayout from "../layouts/ProjectLayout.jsx";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Projects - Cudiamat';
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const listProjects = () => {
        return(
            <ul className={'m-0 ps-0 list-unstyled'}>
                {
                    projects.map((project, index) => {
                        return (
                            <li key={index} className={'mb-2'}>
                                <UnderLineGrow>
                                    <h5 className={`m-0 ${styles.projectTitle}`}>
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
            left={ listProjects() }
            middle={ null }
            right={ null }
        />
    );
}
