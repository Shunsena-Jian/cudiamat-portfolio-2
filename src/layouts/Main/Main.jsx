import javaLogo from '/src/assets/images/java.png';
import pythonLogo from '/src/assets/images/python.png';
import nodeJSLogo from '/src/assets/images/nodeJS.png';
import laravelLogo from '/src/assets/images/laravel-logo.png';
import mySqlLogo from '/src/assets/images/mySQL.png';
import mongoDBLogo from '/src/assets/images/mongoDB.png';
import bootstrapLogo from '/src/assets/images/bootstrap.png';
import jQueryLogo from '/src/assets/images/jQuery.png';
import reactLogo from '/src/assets/images/react.png';

import styles from '/src/styles/main.module.css';

import MainLayout from './MainLayout.jsx';

const stylesLogo = `${styles.logo}`;

const imageElement = 'img';
const pElement = 'p';

const logoItems = [
    {
        id: 'java_logo',
        ElementType: imageElement,
        src: javaLogo,
        className: stylesLogo,
        content: 'Java - My first programming language, which I learned during my college years. It laid the foundation for my programming journey and continues to influence my approach to software development.'
    },
    {
        id: 'python_logo',
        ElementType: imageElement,
        src: pythonLogo,
        className: stylesLogo,
        content: 'Python - My second programming language, which I learned during my college years. We used this technology to use in our web scraping, data analysis, and machine learning tasks.'
    },
    {
        id: 'nodeJS_logo',
        ElementType: imageElement,
        src: nodeJSLogo,
        className: stylesLogo,
        content: 'NodeJS w/ Express - My third programming language, which I learned during my college years as well to apply it in our thesis project, "Intellijent".',
    },
    {
        id: 'laravel_logo',
        ElementType: imageElement,
        src: laravelLogo,
        className: stylesLogo,
        content: 'PHP Laravel - My current programming language, which I am actively using in my professional work as a Full Time Backend Developer. I have developed several projects using Laravel, including the Cadet Information System, where I utilized its powerful features to build robust and efficient server-side applications.'
    },
    {
        id: 'mySQL_logo',
        ElementType: imageElement,
        src: mySqlLogo,
        className: stylesLogo,
        content: 'MySQL - I have been using this since my college years, where it served as my stepping stone in learning database management for the different tasks and projects I did.',
    },
    {
        id: 'mongoDB_logo',
        ElementType: imageElement,
        src: mongoDBLogo,
        className: stylesLogo,
        content: 'MongoDB - I have used this in our thesis project and in my current role, which allowed me to work with NoSQL databases and understand their advantages in handling unstructured data.',
    },
    {
        id: 'dynamoDB_logo',
        ElementType: imageElement,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Amazon_DynamoDB_logo.svg/1200px-Amazon_DynamoDB_logo.svg.png',
        className: stylesLogo,
        content: 'DynamoDB - I am currently using this in my current role, which has allowed me to work with a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.',
    },
    {
        id: 'opensearch_logo',
        ElementType: imageElement,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/OpenSearch_logo.svg/1200px-OpenSearch_logo.svg.png',
        className: stylesLogo,
        content: 'OpenSearch - I am currently using this in my current role, which has allowed me to work with a open-source search and analytics suite derived from Elasticsearch.',
    },
    {
        id: 'react_logo',
        ElementType: imageElement,
        src: reactLogo,
        className: stylesLogo
    },
    {
        id: 'bootstrap_logo',
        ElementType: imageElement,
        src: bootstrapLogo,
        className: stylesLogo,
        content: 'Bootstrap - This portfolio website was developed using Bootstrap, a framework I am actively leveraging to enhance my front-end skills in building responsive and visually appealing web applications.'
    },
    {
        id: 'jQuery_logo',
        ElementType: imageElement,
        src: jQueryLogo,
        className: stylesLogo,
        content: 'JQuery - I have used this library in the Cadet Information System project, where I utilized it to enhance the user interface and improve the overall user experience.',
    },
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
        <div className={`${styles.tenPx} ${styles.animateFromRight} text-center text-md-end`}>
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
            upperContent={ null }
            leftColumn={ leftContent }
            rightColumn={ rightContent }
        />
    );
}

export default Main;