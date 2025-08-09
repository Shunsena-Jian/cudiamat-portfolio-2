import React, {useContext} from "react";
import styles from "../../styles/experiences.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";

const AchievementContent = () => {
    const { isActive, activeExperience } = useContext(ExperienceContext);

    if (!activeExperience) {
        return (
            <p>Click on an experience to see the details.</p>
        );
    }

    return (
        <div className={`d-flex flex-column justify-content-center gap-2 ${isActive ? styles.showContent : styles.hideContent}`}>
            <h1 className={'m-0 text-center'}>Achievements</h1>
            <hr/>
            <ul>
                {
                    activeExperience.achievements.map((achievement, id) => {
                        return(
                            <li key={id}>
                                <p>{achievement}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default AchievementContent;