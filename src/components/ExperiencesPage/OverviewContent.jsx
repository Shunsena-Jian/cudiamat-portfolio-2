import React, {useContext} from "react";
import styles from "../../styles/experiences.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";

const OverviewContent = () => {
    const { isActive, activeExperience } = useContext(ExperienceContext);

    if (!activeExperience) {
        return (
            <p>Click on an experience to see the details.</p>
        );
    }

    return (
        <div className={`d-flex flex-column justify-content-center gap-2 ${isActive ? styles.showContent : styles.hideContent}`}>
            <h2 className={'m-0 text-center'}>{activeExperience.position}</h2>
            <p className={'text-center'}>{activeExperience.duration}</p>
            <hr></hr>
            <h5 className={'m-0'}>Responsibilities:</h5>
            <ul>
                {
                    activeExperience.responsibilities.map(responsibility => {
                        return(
                            <li key={responsibility}>
                                <p>{responsibility}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default OverviewContent;