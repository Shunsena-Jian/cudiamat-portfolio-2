import {useEffect, useState} from "react";
import styles from '../../styles/main.module.css';

const RightContent = () => {
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        fetch('/src/data/rightMainContent.json')
            .then(response => response.json())
            .then(data => setParagraphs(data))
            .catch(error => console.error('Error fetching paragraphs:', error));
    }, []);

    return (
        <div className={`${styles.paragraph} text-center text-md-end`}>
            {
                paragraphs.map((paragraph, index) => {
                    return (
                        <p key={index}>{paragraph}</p>
                    );
                })
            }
        </div>
    );
};

export default RightContent;

