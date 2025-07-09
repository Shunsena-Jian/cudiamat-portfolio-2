import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css"
import GithubLogo from "../../assets/images/github-logo-white.png";

const MiddleContent = () => {
    const { isActiveMiddle, activeContent, handleHoverItem } = useContext(ProjectsContext);

    return (
        <>
            <h6 style={{ visibility: activeContent ? 'hidden' : 'visible' }}>Select a project.</h6>
            <div className={`d-flex flex-column gap-1 ${isActiveMiddle ? styles.middleContentActive : styles.middleContentHide}`}>
                {activeContent && (
                    <>
                        <a href={activeContent.link} target={'_blank'} rel={'noopener noreferrer'}>
                            <h4>{activeContent.title}</h4>
                        </a>
                        <h6
                            className={styles.h6}
                            onMouseEnter={() => handleHoverItem(activeContent.src)}
                        >
                            {activeContent.company}
                        </h6>
                        <h6
                            className={styles.h6}
                            onMouseEnter={() => handleHoverItem(activeContent.roleDescription)}
                        >
                            {activeContent.position}
                        </h6>
                        <p>{activeContent.description}</p>
                        {activeContent.github_link &&
                            <a className={'mt-3'} href={activeContent.github_link} target={"_blank"} rel={"noopener noreferrer"}>
                                <img
                                    src={GithubLogo}
                                    className={styles.logo}
                                    alt={'Github Logo'}
                                />
                            </a>
                        }
                    </>
                )}
            </div>
        </>
    );
}

export default MiddleContent;