import { useContext } from 'react';
import { MainContext } from '../../pages/Main/MainContext.jsx';
import styles from '../../styles/main.module.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const LeftContent = () => {
    const { beTech, feTech, dbTech, handleAnimationEnd } = useContext(MainContext);

    const renderTooltip = (props, alt) => (
        <Tooltip id="button-tooltip" {...props}>
            {alt}
        </Tooltip>
    );

    const renderLogoSection = (title, technologies) => (
        <div>
            <h5>{title}</h5>
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
                            <img src={imageUrl} alt={alt} onAnimationEnd={handleAnimationEnd} className={styles.logo} style={{'--n': index + 1}} />
                        </OverlayTrigger>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className={'d-flex flex-column gap-2'}>
            {renderLogoSection('Server Side', beTech)}
            {renderLogoSection('Frontend', feTech)}
            {renderLogoSection('Database', dbTech)}
        </div>
    );
};

export default LeftContent;
