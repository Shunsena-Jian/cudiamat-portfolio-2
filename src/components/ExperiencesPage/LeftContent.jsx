import React, {useContext} from "react";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";
import styles from "../../styles/experiences.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";

const LeftContent = () => {
    const { experiences, activeExperience, handleOnClickExperience } = useContext(ExperienceContext);

    return (
        <ul className={'m-0 ps-0 list-unstyled'}>
            {
                experiences.map(experience => {
                    const { id, company } = experience;

                    return (
                        <li key={id} className={'mb-2'}>
                            <UnderLineGrow isActive={activeExperience && activeExperience.id === id}>
                                <h4
                                    className={`m-0 ${styles.experienceTitle}`}
                                    onClick={() => handleOnClickExperience(experience)}
                                    style={{ '--experience': id }}
                                >
                                    {company}
                                </h4>
                            </UnderLineGrow>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default LeftContent;