import laravelLogo from '/src/assets/images/laravel-logo.png';
import bootstrapLogo from '/src/assets/images/bootstrap.png';
import javaLogo from '/src/assets/images/java.png';
import jQueryLogo from '/src/assets/images/jQuery.png';
import mySqlLogo from '/src/assets/images/mySQL.png';
import nodeJSLogo from '/src/assets/images/nodeJS.png';
import reactLogo from '/src/assets/images/react.png';

import styles from '/src/styles/main.module.css';

import MainLayout from './MainLayout.jsx';

const stylesLogo = `${styles.logo}`;

const imageElement = 'img';
const pElement = 'p';

const logoItems = [
    {
        id: 'laravel_logo',
        ElementType: imageElement,
        src: laravelLogo,
        className: stylesLogo
    },
    {
        id: 'bootstrap_logo',
        ElementType: imageElement,
        src: bootstrapLogo,
        className: stylesLogo
    },
    {
        id: 'java_logo',
        ElementType: imageElement,
        src: javaLogo,
        className: stylesLogo
    },
    {
        id: 'jQuery_logo',
        ElementType: imageElement,
        src: jQueryLogo,
        className: stylesLogo
    },
    {
        id: 'mySQL_logo',
        ElementType: imageElement,
        src: mySqlLogo,
        className: stylesLogo
    },
    {
        id: 'nodeJS_logo',
        ElementType: imageElement,
        src: nodeJSLogo,
        className: stylesLogo
    },
    {
        id: 'react_logo',
        ElementType: imageElement,
        src: reactLogo,
        className: stylesLogo
    }
];

const paragraphs = [
    {
        key: 1,
        ElementType: pElement,
        content: 'Based in the Philippines'
    },
    {
        key: 2,
        ElementType: pElement,
        content: 'I am a dedicated'
    },
    {
        key: 3,
        ElementType: pElement,
        content: 'Full Time Backend Developer'
    },
    {
        key: 4,
        ElementType: pElement,
        content: 'with expertise in the Laravel framework'
    },
    {
        key: 5,
        ElementType: pElement,
        content: 'passionate about building robust'
    },
    {
        key: 6,
        ElementType: pElement,
        content: 'and efficient server-side applications.'
    },
    {
        key: 7,
        ElementType: pElement,
        content: 'Driven by a desire to'
    },
    {
        key: 8,
        ElementType: pElement,
        content: 'broaden my technical horizons,'
    },
    {
        key: 9,
        ElementType: pElement,
        content: 'I am actively pursuing growth to evolve'
    },
    {
        key: 10,
        ElementType: pElement,
        content: 'into a versatile Full Stack Developer.'
    },
];

function Main() {
    const leftContent = (
        <div className={`${styles.logoContainer} d-flex flex-wrap`}>
            {
                logoItems.map(item => {
                    const {id, ElementType, src, className} = item;

                    return (
                        <ElementType key={id} src={src} className={className}/>
                    );
                })
            }
        </div>
    );

    const rightContent = (
        <div className={`${styles.tenPx} ${styles.animateFromRight} text-center text-sm-end`}>
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

    return (
        <MainLayout
            leftColumn={ leftContent }
            rightColumn={ rightContent }
        />
    );
}

export default Main;