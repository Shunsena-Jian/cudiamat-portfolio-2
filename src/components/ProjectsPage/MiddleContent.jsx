import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css"
import GithubLogo from "../../assets/images/github-logo-white.png";

const MiddleContent = () => {
    const { isActiveMiddle, activeContent, handleMouseOnClickRight } = useContext(ProjectsContext);

    return (
        <>
            <h6 style={{ display: activeContent ? 'none' : 'block' }}>Select a project.</h6>
            <div className={`d-flex flex-column gap-2 ${isActiveMiddle ? styles.middleContentActive : styles.middleContentHide}`}>
                {activeContent && (
                    <>
                        <a href={activeContent.link} target={'_blank'} rel={'noopener noreferrer'}>
                            <h4 className={'m-0'}>{activeContent.title}</h4>
                        </a>
                        <h6 className={'m-0'}>{activeContent.company}</h6>
                        <h6 className={'m-0'}>{activeContent.position}</h6>
                        <p>{activeContent.description}</p>
                        <p className={styles.showMore} onClick={() => handleMouseOnClickRight(activeContent)}>
                            Show More Details
                        </p>
                        {activeContent.github_link &&
                            <a href={activeContent.github_link} target={"_blank"} rel={"noopener noreferrer"}>
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