import {useEffect, useState} from "react";
import styles from '../../styles/main.module.css';

const RightContent = () => {
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        fetch('/data/rightMainContent.json')
            .then(response => response.json())
            .then(data => setParagraphs(data))
            .catch(error => console.error('Error fetching paragraphs:', error));
    }, []);

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
