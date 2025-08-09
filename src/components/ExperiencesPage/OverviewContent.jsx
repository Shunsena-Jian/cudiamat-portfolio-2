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
          <h1 className={'m-0 text-center'}><strong>{activeExperience.position}</strong></h1>
            <h5 className={'text-center'}>{activeExperience.duration}</h5>
            <hr></hr>
            <h5 className={'m-0 text-center'}><strong>Responsibilities</strong></h5>
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