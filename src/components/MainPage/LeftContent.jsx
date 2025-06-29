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
        description: 'wasn\'t just my first programming language; it was the bedrock of my entire coding journey, igniting my passion for software development during my college years.',
        ...defaultLogoProps
    },
    {
        id: 'python_logo',
        src: pythonLogo,
        boldedWord: 'Python',
        description: 'became my next major focus in college. This incredibly versatile language quickly became my go-to for everything from web scraping and data analysis to diving into the world of machine learning.',
        ...defaultLogoProps
    },
    {
        id: 'nodeJS_logo',
        src: nodeJSLogo,
        boldedWord: 'Node.js with Express',
        description: 'This powerful combination became the backbone of our project, allowing me to build robust applications and bring our vision to life. Which also gave me my passion for web development.',
        ...defaultLogoProps
    },
    {
        id: 'laravel_logo',
        src: laravelLogo,
        boldedWord: 'PHP with Laravel',
        description: 'is my go-to. I\'m actively using its powerful features to build robust and efficient server-side applications, including impactful projects like the Cadet Information System.',
        ...defaultLogoProps
    },
    {
        id: 'mySQL_logo',
        src: mySqlLogo,
        boldedWord: 'MySQL',
        description: 'was my introduction to the world of database management. From my college years onward, it\'s been the essential stepping stone, solidifying my understanding of how to efficiently organize and manage data for countless projects.',
        ...defaultLogoProps
    },
    {
        id: 'mongoDB_logo',
        src: mongoDBLogo,
        boldedWord: 'MongoDB',
        description: 'was crucial for my college thesis, \'Intellijent,\' and continues to be a key tool in my current role. It\'s where I truly grasped the power of NoSQL databases and their advantages in handling diverse, unstructured data.',
        ...defaultLogoProps
    },
    {
        id: 'dynamoDB_logo',
        src: dynamoDB,
        boldedWord: 'DynamoDB',
        description: 'is a critical part of my toolkit. I proficiently manage vital project information—from cache to TTLs—confidently handling data retrieval, additions, modifications, and deletions to ensure seamless operations.',
        ...defaultLogoProps
    },
    {
        id: 'opensearch_logo',
        src: opensearch,
        boldedWord: 'OpenSearch',
        description: 'is a vital tool for monitoring our projects and efficiently sifting through vast amounts of organizational data. It\'s taught me how to effectively log events and pinpoint exception errors across both testing and live environments, making the retrieval of data for pagination incredibly seamless.',
        ...defaultLogoProps
    },
    {
        id: 'react_logo',
        src: reactLogo,
        boldedWord: 'React',
        description: 'a library I actively use in my personal projects. It\'s my go-to for honing my front-end skills, allowing me to craft dynamic and highly interactive user interfaces.',
        ...defaultLogoProps
    },
    {
        id: 'bootstrap_logo',
        src: bootstrapLogo,
        boldedWord: 'Bootstrap',
        description: 'a framework I frequently use in my personal projects. It\'s instrumental in enhancing my front-end skills, allowing me to quickly create responsive and visually appealing web applications.',
        ...defaultLogoProps
    },
    {
        id: 'jQuery_logo',
        src: jQueryLogo,
        boldedWord: 'jQuery',
        description: 'for the Cadet Information System project. It was instrumental in enhancing the user interface and significantly improving the overall user experience.',
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

