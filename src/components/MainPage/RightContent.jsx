import {useContext} from "react";
import styles from '../../styles/main.module.css';
import {MainContext} from "../../pages/Main/MainContext.jsx";

const RightContent = () => {
    const { paragraphs } = useContext(MainContext);

    return (
        <div className={`${styles.paragraph}`}>
            {paragraphs.map((paragraph, index) => {
                if (index === 0) {
                    return (
                      <>
                        <h1 key={index} className={'mb-4 text-center'}><strong>{paragraph}</strong></h1>
                        <hr />
                      </>
                    );
                } else {
                    return <h4 key={index} className={'mb-4'}>{paragraph}</h4>;
                }
            })}
        </div>
    );
};

export default RightContent;
