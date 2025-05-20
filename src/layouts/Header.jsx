import githubLogo from '/src/assets/images/github-logo-white.png';
import linkedInLogo from '/src/assets/images/InBug-White.png';

import styles from '/src/styles/header.module.css';

export default function Header() {
    return (
        <section className={'main-section p-5 container-fluid between'}>
            <div className={'row mb-3'}>
                <div className={`${styles.textContainer} col-12 col-md-6`}>
                    <div className={`d-inline-block ${styles.textItem} ${styles.underlineGrow} mb-3`}>
                        <h3 className={'m-0'}>Jian Raphael R. Cudiamat</h3>
                    </div>
                    <br/>
                    <div className={`d-inline-block ${styles.textItem} ${styles.underlineGrow} mb-3`}>
                        <p>Experience</p>
                    </div>
                    <br/>
                    <div className={`d-inline-block ${styles.textItem} ${styles.underlineGrow} mb-3`}>
                        <p>Projects</p>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className={`${styles.logoContainer} col d-flex flex-wrap gap-4`}>
                    <a href={'https://github.com/Shunsena-Jian'} target={'_blank'} className={`${styles.logoItem}`}>
                        <img src={githubLogo} className={`${styles.logo}`}/>
                    </a>
                    <a href={'https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/'} target={'_blank'} className={`${styles.logoItem}`}>
                        <img src={linkedInLogo} className={`${styles.logo}`}/>
                    </a>
                    {/*<a href={'https://github.com/Shunsena-Jian'} target={'_blank'} className={`${styles.logoItem}`}>*/}
                    {/*    <img src={githubLogo} className={`${styles.logo}`}/>*/}
                    {/*</a>*/}
                </div>
            </div>
        </section>
    )
}