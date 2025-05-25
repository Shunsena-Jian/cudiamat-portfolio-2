import laravelLogo from '/src/assets/images/laravel-logo.png';
import bootstrapLogo from '/src/assets/images/bootstrap.png';
import javaLogo from '/src/assets/images/java.png';
import jQyeryLogo from '/src/assets/images/jQuery.png';
import mySqlLogo from '/src/assets/images/mySQL.png';
import nodeJSLogo from '/src/assets/images/nodeJS.png';
import reactLogo from '/src/assets/images/react.png';

import styles from '/src/styles/main.module.css';

import MainLayout from './MainLayout.jsx';

function Main() {
    const leftContent = (
        <div className={`${styles.logoContainer} d-flex flex-wrap`}>
            <img src={laravelLogo} className={`${styles.logo}`}/>
            <img src={bootstrapLogo} className={`${styles.logo}`}/>
            <img src={javaLogo} className={`${styles.logo}`}/>
            <img src={jQyeryLogo} className={`${styles.logo}`}/>
            <img src={mySqlLogo} className={`${styles.logo}`}/>
            <img src={nodeJSLogo} className={`${styles.logo}`}/>
            <img src={reactLogo} className={`${styles.logo}`}/>
        </div>
    );

    const rightContent = (
        <div className={`${styles.tenPx} ${styles.animateFromRight} text-end`}>
            <p>Based in the Philippines</p>
            <p>I am a dedicated</p>
            <p>Full Time Backend Developer</p>
            <p>with expertise in the Laravel framework</p>
            <p>passionate about building robust</p>
            <p>and efficient server-side applications.</p>
            <p>Driven by a desire to</p>
            <p>broaden my technical horizons,</p>
            <p>I am actively pursuing growth to evolve</p>
            <p>into a versatile Full Stack Developer.</p>
        </div>
    );

    return (
        <MainLayout
            leftColumn={ leftContent }
            rightColumn={ rightContent }
        />
    );
}

export default Main;