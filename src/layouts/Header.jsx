import githubLogo from '/src/assets/images/github-logo-white.png';
import linkedInLogo from '/src/assets/images/InBug-White.png';

import '/src/styles/header.css';

export default function Header() {
    return (
        <section className={'main-section between d-flex'}>
            <div className={'container-fluid m-0 p-5'}>
                <div className={'row mb-3'}>
                    <div className={'text-container col-12 col-md-6'}>
                        <span className={'text-item underline-grow mb-3'}>
                            <h3 className={'m-0'}>Jian Raphael R. Cudiamat</h3>
                        </span>
                        <br/>
                        <span className={'text-item underline-grow mb-3'}>
                            <p>Experience</p>
                        </span>
                        <br/>
                        <span className={'text-item underline-grow mb-3'}>
                            <p>Projects</p>
                        </span>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'logo-container col d-flex flex-wrap gap-4'}>
                        <a href={'https://github.com/Shunsena-Jian'} target={'_blank'} className={'logo-item'}>
                            <img src={githubLogo} className={'logo'}/>
                        </a>
                        <a href={'https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/'} target={'_blank'} className={'logo-item'}>
                            <img src={linkedInLogo} className={'logo'}/>
                        </a>
                        {/*<a href={'https://github.com/Shunsena-Jian'} target={'_blank'} className={'logo-item'}>*/}
                        {/*    <img src={githubLogo} className={'logo'}/>*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}