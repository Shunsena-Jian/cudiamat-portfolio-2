import { useContext } from 'react';
import { MainContext } from '../../context/MainContextProvider.jsx';
import styles from '../../styles/main.module.css';

const DynamicContent = () => {
    const { activeContent, isVisible } = useContext(MainContext);

    if (activeContent) {
        return (
            <div
                className={`${isVisible ? styles.showDynamicContent : styles.hideDynamicContent}`}
                dangerouslySetInnerHTML={{ __html: activeContent }}
            />
        );
    }

    return (
        <p className={`${styles.showDynamicContent}`}>
            Hover or Click a logo to see the details.
        </p>
    );
};
export default DynamicContent;

