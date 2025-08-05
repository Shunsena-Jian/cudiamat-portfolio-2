import React, {useContext} from "react";
import { ProjectsContext } from "../../pages/Projects/ProjectsContext.jsx";
import styles from "../../styles/projects.module.css";
import headerStyles from "../../styles/header.module.css";

const LeftContent = () => {
    const { projects, middleContent, handleMouseOnClickMiddle } = useContext(ProjectsContext);

    return(
        <ul className={'m-0 ps-0 list-unstyled'}>
            {
                projects.map((project, index) => {
                    const { title } = project;
                    const isActive = middleContent && middleContent.title === title;

                    return (
                        <li key={index} className={'mb-2'}>
                            <button
                                className={`${headerStyles.ctaButton} ${styles.projectTitle} ${isActive ? headerStyles.activeCtaButton : ''}`}
                                onClick={() => handleMouseOnClickMiddle(project)}
                                style={{ '--project': index }}
                            >
                                {title}
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default LeftContent;