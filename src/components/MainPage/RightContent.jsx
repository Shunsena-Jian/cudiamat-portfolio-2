import {useContext} from "react";
import styles from '../../styles/main.module.css';
import {MainContext} from "../../pages/Main/MainContext.jsx";

const RightContent = () => {
    const { paragraphs } = useContext(MainContext);

    return (
        <div className={`${styles.paragraph}`}>
            {paragraphs.map((paragraph, index) => {
                if (index === 0) {
                    return <h4 key={index} className={'mb-4'}><strong>{paragraph}</strong></h4>;
                } else {
                    return <h6 key={index}>{paragraph}</h6>;
                }
            })}
        </div>
    );
};

export default RightContent;
