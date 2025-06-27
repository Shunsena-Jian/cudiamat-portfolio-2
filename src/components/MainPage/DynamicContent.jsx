import styles from '../../styles/main.module.css';

const DynamicContent = ({ activeContent, isVisible }) => {
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

