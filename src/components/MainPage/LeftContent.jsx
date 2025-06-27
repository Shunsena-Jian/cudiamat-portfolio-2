import { logoItems } from '../../constants/MainContent/leftMainContent.js';
import styles from '../../styles/main.module.css';

const LeftContent = ({ handleMouseHover, handleMouseLeave, handleAnimationEnd }) => {
    return (
        <div className={`${styles.logoContainer} d-flex flex-wrap gap-3`}>
            {
                logoItems.map((item, index) => {
                    const {id, ElementType, src, className} = item;

                    return (
                        <ElementType
                            key={id}
                            src={src}
                            onMouseEnter={() => handleMouseHover(item)}
                            onMouseLeave={handleMouseLeave}
                            className={className}
                            onAnimationEnd={handleAnimationEnd}
                            style={{ '--n': index + 1 }}
                        />
                    );
                })
            }
        </div>
    );
};

export default LeftContent;

