import React, {useContext} from "react";
import styles from "../../styles/experiences.module.css";
import {ExperienceContext} from "../../pages/Experience/ExperienceContext.jsx";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {getTechImageUrl} from "../../utils/assetHelper.js";

const renderTooltip = (props, alt) => (
    <Tooltip id="button-tooltip" {...props}>
        {alt}
    </Tooltip>
);

const TechnologiesContent = () => {
    const { isActive, animation, activeExperience, activeTech, handleHoverTechStack } = useContext(ExperienceContext);

    if (!activeExperience) {
        return (
            <p>Click on an experience to see the details.</p>
        );
    }

    const imageUrl = activeTech ? getTechImageUrl(activeTech) : '';

    return (
        <div className={`d-flex flex-column gap-2 ${isActive ? styles.showContent : styles.hideContent}`}>
            <h2 className={'m-0 text-center'}>Tech Stack Used</h2>
            <hr/>
            {activeTech && (
                <div
                    className={`${styles.backgroundWordMark} ${styles[animation]}`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            )}
            <div className={`${styles.logoContainer} d-flex flex-wrap gap-3 mt-2`}>
                {activeExperience.technologies.map((tech) => {
                    const {id, src, wordmark, alt} = tech;

                    return (
                        <OverlayTrigger
                            key={id}
                            placement="top"
                            overlay={(props) => renderTooltip(props, tech.alt)}
                        >
                            <img
                              src={getTechImageUrl(src)}
                              alt={alt}
                              className={styles.logo}
                              onMouseEnter={() => handleHoverTechStack(wordmark)}
                              onMouseLeave={() => handleHoverTechStack(null)}
                            />
                        </OverlayTrigger>
                    );
                })}
            </div>
        </div>
    );
}

export default TechnologiesContent;
