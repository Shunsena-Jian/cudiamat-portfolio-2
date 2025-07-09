import React, {useContext} from "react";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";
import styles from "../../styles/projects.module.css";
import { ProjectsContext } from "../../pages/Projects/ProjectsContextProvider.jsx";

const LeftContent = () => {
    const { projects, activeContent, handleMouseOnClick } = useContext(ProjectsContext);

    return(
        <ul className={'m-0 ps-0 list-unstyled'}>
            {
                projects.map((project, index) => {

                    const { title } = project;

                    return (
                        <li key={index} className={'mb-2'}>
                            <UnderLineGrow isActive={activeContent.title === title}>
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