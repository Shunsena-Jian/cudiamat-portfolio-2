import { paragraphs } from '../../constants/MainContent/rightMainContent.js';
import styles from '../../styles/main.module.css';

const RightContent = () => {
    return (
        <div className={`${styles.paragraph} text-center text-md-end`}>
            {
                paragraphs.map(item => {
                    const {key, ElementType, content} = item;

                    return (
                        <ElementType key={key}>{content}</ElementType>
                    );
                })
            }
        </div>
    );
};

export default RightContent;

