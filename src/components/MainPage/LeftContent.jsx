import { useContext } from 'react';
import { MainContext } from '../../pages/Main/MainContext.jsx';
import styles from '../../styles/main.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const renderTooltip = (props, alt) => (
    <Tooltip id="button-tooltip" {...props}>
        {alt}
    </Tooltip>
);

const LogoSection = ({ technologies, handleAnimationEnd }) => (
    <div className={`${styles.logoContainer} d-flex flex-wrap gap-2 mt-2`}>
        {technologies.map((tech, index) => {
            const { id, src, alt } = tech;
            const imageUrl = new URL(`../../assets/images/technologies/${src}`, import.meta.url).href;

            return (
                <OverlayTrigger
                    key={id}
                    placement="top"
                    delay={{ show: 0, hide: 250 }}
                    overlay={(props) => renderTooltip(props, alt)}
                >
                    <img src={imageUrl} alt={alt} onAnimationEnd={handleAnimationEnd} className={styles.logo} style={{ '--n': index + 1 }} />
                </OverlayTrigger>
            );
        })}
    </div>
);

export const UpperRow = () => {
    const { beTech, handleAnimationEnd } = useContext(MainContext);
    return (
        <div>
            <h5>Server Side</h5>
            <LogoSection technologies={beTech} handleAnimationEnd={handleAnimationEnd} />
        </div>
    );
};

export const MiddleRow = () => {
    const { feTech, handleAnimationEnd } = useContext(MainContext);
    return (
        <div>
            <h5>Frontend</h5>
            <LogoSection technologies={feTech} handleAnimationEnd={handleAnimationEnd} />
        </div>
    );
};

export const LowerRow = () => {
    const { dbTech, handleAnimationEnd } = useContext(MainContext);
    return (
        <div>
            <h5>Database</h5>
            <LogoSection technologies={dbTech} handleAnimationEnd={handleAnimationEnd} />
        </div>
    );
};
