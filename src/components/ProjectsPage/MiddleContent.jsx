import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css"

const MiddleContent = () => {
    const { isActive, middleContent } = useContext(ProjectsContext);

    return (
        <>
            <h6 style={{ visibility: middleContent ? 'hidden' : 'visible' }}>Select a project.</h6>
            <div className={`d-flex flex-column gap-1 ${isActive ? styles.middleContentActive : styles.middleContentHide}`}>
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
        </>
    );
}

export default MiddleContent;