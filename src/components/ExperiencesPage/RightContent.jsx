import React, {useContext} from "react";
import styles from "../../styles/experiences.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";

const RightContent = () => {
    const { isActive, activeExperience } = useContext(ExperienceContext);

    if (!activeExperience) {
        return (
            <p>Click on an experience to see the details.</p>
        );
    }

    return (
        <div className={`d-flex flex-column gap-2 ${isActive ? styles.showContent : styles.hideContent}`}>
            <h5 className={'m-0'}>{activeExperience.position}</h5>
            <p>{activeExperience.duration}</p>
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

export default RightContent;