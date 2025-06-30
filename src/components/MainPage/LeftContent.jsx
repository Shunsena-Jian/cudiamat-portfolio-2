import javaLogo from "../../assets/images/java.png";
import pythonLogo from "../../assets/images/python.png";
import nodeJSLogo from "../../assets/images/nodeJS.png";
import laravelLogo from "../../assets/images/laravel-logo.png";
import mySqlLogo from "../../assets/images/mySQL.png";
import mongoDBLogo from "../../assets/images/mongoDB.png";
import dynamoDB from "../../assets/images/dynamoDB.svg";
import opensearch from "../../assets/images/opensearch.svg";
import reactLogo from "../../assets/images/react.png";
import bootstrapLogo from "../../assets/images/bootstrap.png";
import jQueryLogo from "../../assets/images/jQuery.png";

const defaultLogoProps = {
    ElementType: 'img',
    className: styles.logo,
};

const logoItems = [
    {
        id: 'java_logo',
        src: javaLogo,
        boldedWord: 'Java',
        description: 'was more than my first programming language; it was the bedrock of my coding journey, sparking a passion for software development that began in college.',
        ...defaultLogoProps
    },
    {
        id: 'python_logo',
        src: pythonLogo,
        boldedWord: 'Python',
        description: 'became my next major focus in college. This versatile language quickly became my go-to for everything from web scraping and data analysis to exploring machine learning.',
        ...defaultLogoProps
    },
    {
        id: 'nodeJS_logo',
        src: nodeJSLogo,
        boldedWord: 'Node.js with Express',
        description: 'became the backbone of our project, "Intellijent", allowing me to build robust applications and bring our vision to life, igniting my passion for web development.',
        ...defaultLogoProps
    },
    {
        id: 'laravel_logo',
        src: laravelLogo,
        boldedWord: 'PHP with Laravel',
        description: 'is my primary tool for building robust and efficient server-side applications. I leverage its powerful features for impactful projects, such as the Cadet Information System.',
        ...defaultLogoProps
    },
    {
        id: 'mySQL_logo',
        src: mySqlLogo,
        boldedWord: 'MySQL',
        description: 'was my introduction to database management. Since college, it has been an essential stepping stone in solidifying my understanding of how to efficiently organize and manage data.',
        ...defaultLogoProps
    },
    {
        id: 'mongoDB_logo',
        src: mongoDBLogo,
        boldedWord: 'MongoDB',
        description: 'was crucial for my college thesis, \'Intellijent,\' and remains a key tool in my current role. It was here I truly grasped the power of NoSQL for handling diverse, unstructured data.',
        ...defaultLogoProps
    },
    {
        id: 'dynamoDB_logo',
        src: dynamoDB,
        boldedWord: 'DynamoDB',
        description: 'is a critical part of my toolkit. I proficiently manage vital project information—from cache to TTLs—and confidently handle data retrieval, additions, and modifications to ensure seamless operations.',
        ...defaultLogoProps
    },
    {
        id: 'opensearch_logo',
        src: opensearch,
        boldedWord: 'OpenSearch',
        description: 'is a vital tool for monitoring projects and sifting through vast amounts of data. It has taught me to effectively log events and pinpoint errors in testing and live environments, making data retrieval for pagination seamless.',
        ...defaultLogoProps
    },
    {
        id: 'react_logo',
        src: reactLogo,
        boldedWord: 'React',
        description: 'is the library I use in my personal projects to hone my front-end skills, allowing me to craft dynamic and interactive user interfaces.',
        ...defaultLogoProps
    },
    {
        id: 'bootstrap_logo',
        src: bootstrapLogo,
        boldedWord: 'Bootstrap',
        description: 'is a framework I use in my personal projects to enhance my front-end skills, allowing me to quickly create responsive and visually appealing web applications.',
        ...defaultLogoProps
    },
    {
        id: 'jQuery_logo',
        src: jQueryLogo,
        boldedWord: 'jQuery',
        description: 'was instrumental in the Cadet Information System project, where I used it to enhance the user interface and significantly improve the overall user experience.',
        ...defaultLogoProps
    },
];
import styles from '../../styles/main.module.css';

import { useContext } from 'react';
import { MainContext } from '../../context/MainContext.jsx';

const LeftContent = () => {
    const { handleMouseHover, handleMouseLeave, handleAnimationEnd } = useContext(MainContext);
    return (
        <div className={`${styles.logoContainer} d-flex flex-wrap gap-3`}>
            {
                logoItems.map((item, index) => {
                    const {id, ElementType, src, className} = item;

                    return (
                        <ElementType
                            key={id}
                            src={src}
                            alt={item.boldedWord}
                            onMouseEnter={() => handleMouseHover(item)}
                            onMouseLeave={handleMouseLeave}
                            className={className}
                            onAnimationEnd={handleAnimationEnd}
                            style={{ '--n': index + 1 }}
                        />
                    );
                })
            }
        </div>
    );
};

export default LeftContent;