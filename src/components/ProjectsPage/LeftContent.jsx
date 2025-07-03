import React, {useContext, useEffect, useState} from "react";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";
import styles from "../../styles/projects.module.css";
import { ProjectsContext } from "../../pages/Projects/ProjectsContextProvider.jsx";

const LeftContent = () => {
    const { middleContent, handleMouseOnClick } = useContext(ProjectsContext);

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

    return(
        <ul className={'m-0 ps-0 list-unstyled'}>
            {
                projects.map((project, index) => {
                    const { title } = project;

                    return (
                        <li key={index} className={'mb-2'}>
                            <UnderLineGrow isActive={middleContent.title === title}>
                                <h5
                                    className={`m-0 ${styles.projectTitle}`}
                                    onClick={() => handleMouseOnClick(project)}
                                    style={{ '--project': index }}
                                >
                                    {title}
                                </h5>
                            </UnderLineGrow>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default LeftContent;