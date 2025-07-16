import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContext.jsx";
import styles from "../../styles/projects.module.css"
import GithubLogo from "../../assets/images/technologies/github-logo-white.png";

const MiddleContent = () => {
    const { isActiveMiddle, middleContent } = useContext(ProjectsContext);

    return (
        <>
            <h6 style={{ display: middleContent ? 'none' : 'block' }}>Select a project.</h6>
            <div className={`d-flex flex-column gap-2 ${isActiveMiddle ? styles.middleContentActive : styles.middleContentHide}`}>
                {middleContent && (
                    <>
                        <a href={middleContent.link} target={'_blank'} rel={'noopener noreferrer'}>
                            <h4 className={'m-0'}>{middleContent.title}</h4>
                        </a>
                        <h6 className={'m-0'}>{middleContent.company}</h6>
                        <p>{middleContent.description}</p>
                        {middleContent.github_link &&
                            <a href={middleContent.github_link} target={"_blank"} rel={"noopener noreferrer"}>
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