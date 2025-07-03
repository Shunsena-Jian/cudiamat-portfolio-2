import React, {useContext} from "react";
import {ProjectsContext} from "../../context/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css"

const MiddleContent = () => {
    const { isActive, middleContent } = useContext(ProjectsContext);

    return (
        <div className={`d-flex flex-column gap-1 ${styles.middleContent} ${isActive ? styles.middleContentActive : ''}`}>
            <h6 style={{ visibility: middleContent ? 'hidden' : 'visible' }}>Select a project.</h6>
            {middleContent && (
                <>
                    <a href={middleContent.link} target={'_blank'} rel={'noopener noreferrer'}>
                        <h4>{middleContent.title}</h4>
                    </a>
                    <h6>{middleContent.company}</h6>
                    <h6>{middleContent.position}</h6>
                    <p>{middleContent.description}</p>
                    {middleContent.github_link &&
                        <a className={'mt-2'} href={middleContent.github_link} target={"_blank"} rel={"noopener noreferrer"}>
                            Github Link
                        </a>
                    }
                </>
            )}
        </div>
    );
}

export default MiddleContent;