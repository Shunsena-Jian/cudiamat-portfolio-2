import { useContext } from 'react';
import { MainContext } from '../../pages/Main/MainContext.jsx';
import styles from '../../styles/main.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getImageUrl } from '../../utils/assetHelper.js';

const renderTooltip = (props, alt) => (
    <Tooltip id="button-tooltip" {...props}>
        {alt}
    </Tooltip>
);

const LogoSection = ({ technologies, handleAnimationEnd, handleLogoHover }) => (
    <div className={`${styles.logoContainer} d-flex flex-wrap gap-3 mt-2`}>
        {technologies.map((tech, index) => {
            const { id, src, alt } = tech;

            return (
                <OverlayTrigger
                    key={id}
                    placement="top"
                    overlay={(props) => renderTooltip(props, alt)}
                >
                    <img
                        src={getImageUrl(src)}
                        alt={alt}
                        onAnimationEnd={handleAnimationEnd}
                        className={styles.logo}
                        style={{ '--n': index + 1 }}
                        onMouseEnter={() => handleLogoHover(tech)}
                        onMouseLeave={() => handleLogoHover(null)}
                    />
                </OverlayTrigger>
            );
        })}
    </div>
);

const Row = ({ title, technologies }) => {
    const { handleAnimationEnd, handleLogoHover, activeLogo, animation } = useContext(MainContext);
    const isSectionActive = activeLogo && technologies.some(t => t.id === activeLogo.id);
    const imageUrl = activeLogo ? getImageUrl(activeLogo.src) : '';

    return (
        <>
            {isSectionActive && (
                <div
                    className={`${styles.backgroundLogo} ${styles[animation]}`}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            )}
            <div className={styles.rowContent}>
                <h5>{title}</h5>
                <LogoSection technologies={technologies} handleAnimationEnd={handleAnimationEnd} handleLogoHover={handleLogoHover} />
            </div>
        </>
    );
}

export const UpperRow = () => {
    const { beTech } = useContext(MainContext);
    return <Row title="Server Side" technologies={beTech} />;
};

export const MiddleRow = () => {
    const { feTech } = useContext(MainContext);
    return <Row title="Frontend" technologies={feTech} />;
};

export const LowerRow = () => {
    const { dbTech } = useContext(MainContext);
    return <Row title="Database" technologies={dbTech} />;
};
