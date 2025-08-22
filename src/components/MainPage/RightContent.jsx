import {useContext} from "react";
import styles from '../../styles/main.module.css';
import {MainContext} from "../../pages/Main/MainContext.jsx";

export const UpperRightRow = () => {
    const { paragraphs } = useContext(MainContext);
    return (
        <div className={`${styles.paragraph}`}>
            {paragraphs.map((paragraph, index) => {
                if (index === 0) {
                    return (
                        <>
                            <h1 key={index} className={'mb-4 text-center'}>
                                <strong>{paragraph}</strong>
                            </h1>
                            <hr />
                        </>
                    );
                } else {
                    return (
                        <h4 key={index}>
                            {paragraph}
                        </h4>
                    );
                }
            })}
        </div>
    )
}

export const LowerRightRow = () => {
    const { resume, github, linkedin } = useContext(MainContext);

    return (
        <div className={styles.links}>
            <h2><strong>More Details? Click the Links Below</strong></h2>
            {
                resume && (
                    <a href={resume.url} target={'_blank'}>
                        <button className={styles.linkButton}>
                            My Resume
                        </button>
                    </a>
                )
            }
            {
                github && (
                    <a href={github.url} target={'_blank'}>
                        <button className={styles.linkButton}>
                            {github.alt}
                        </button>
                    </a>
                )
            }
            {
                linkedin && (
                    <a href={linkedin.url} target={'_blank'}>
                        <button className={styles.linkButton}>
                            {linkedin.alt}
                        </button>
                    </a>
                )
            }
        </div>
    );
};
