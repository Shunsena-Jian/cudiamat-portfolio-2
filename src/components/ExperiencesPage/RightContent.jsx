import React, {useContext} from "react";
import styles from "../../styles/experiences.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";
import pmaLogo from "/src/assets/images/companies/pma_logo.png";
import iThinkWebLogo from "/src/assets/images/companies/ithinkweb_corporation_logo.png";

const RightContent = () => {
    const { isActive, activeExperience } = useContext(ExperienceContext);

    const companyLogos = {
        'pma_logo.png': pmaLogo,
        'ithinkweb_logo.png': iThinkWebLogo
    };

    if (!activeExperience) {
        return (
            <p>Click on an experience to see the details.</p>
        );
    }

    const company = activeExperience.company_logo ? companyLogos[activeExperience.company_logo] : null;

    return (
        <div className={`d-flex flex-column gap-2 ${isActive ? styles.showContent : styles.hideContent}`}>
            <div className={styles.companyLogoContainer}>
                <img className={styles.companyLogo} src={company} alt={activeExperience.alt}/>
            </div>
            <h5 className={'m-0'}>{activeExperience.position}</h5>
            <p>{activeExperience.duration}</p>
            <h5 className={'m-0'}>Responsibilities:</h5>
            <ul>
                {
                    activeExperience.responsibilities.map(responsibility => {
                        return(
                            <li>
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