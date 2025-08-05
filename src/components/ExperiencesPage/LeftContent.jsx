import React, {useContext} from "react";
import styles from "../../styles/experiences.module.css";
import headerStyles from "../../styles/header.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";

const LeftContent = () => {
    const { experiences, activeExperience, handleOnClickExperience } = useContext(ExperienceContext);

    return (
        <ul className={'m-0 ps-0 list-unstyled'}>
            {
                experiences.map(experience => {
                    const { id, company } = experience;
                    const isActive = activeExperience && activeExperience.id === id;

                    return (
                        <li key={id} className={'mb-2'}>
                            <button
                                className={`${headerStyles.ctaButton} ${styles.experienceTitle} ${isActive ? headerStyles.activeCtaButton : ''}`}
                                onClick={() => handleOnClickExperience(experience)}
                                style={{ '--experience': id }}
                            >
                                {company}
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default LeftContent;