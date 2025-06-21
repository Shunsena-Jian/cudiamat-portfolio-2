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

import styles from '../../styles/main.module.css';

const defaultLogoProps = {
    ElementType: 'img',
    className: `${styles.logo}`,
};

export const logoItems = [
    {
        id: 'java_logo',
        src: javaLogo,
        content: 'Java wasn\'t just my first programming language; it was the bedrock of my entire coding journey, igniting my passion for software development during my college years.',
        ...defaultLogoProps
    },
    {
        id: 'python_logo',
        src: pythonLogo,
        content: 'After laying my foundation with Java, Python became my next major focus in college. This incredibly versatile language quickly became my go-to for everything from web scraping and data analysis to diving into the world of machine learning.',
        ...defaultLogoProps
    },
    {
        id: 'nodeJS_logo',
        src: nodeJSLogo,
        content: 'For my college thesis, \'Intellijent,\' I delved into Node.js with Express. This powerful combination became the backbone of our project, allowing me to build robust applications and bring our vision to life. Which also gave me my passion for web development.',
        ...defaultLogoProps
    },
    {
        id: 'laravel_logo',
        src: laravelLogo,
        content: 'As a professional Backend Developer, PHP with Laravel is my go-to. I\'m actively using its powerful features to build robust and efficient server-side applications, including impactful projects like the Cadet Information System.',
        ...defaultLogoProps
    },
    {
        id: 'mySQL_logo',
        src: mySqlLogo,
        content: 'MySQL was my introduction to the world of database management. From my college years onward, it\'s been the essential stepping stone, solidifying my understanding of how to efficiently organize and manage data for countless projects.',
        ...defaultLogoProps
    },
    {
        id: 'mongoDB_logo',
        src: mongoDBLogo,
        content: 'MongoDB was crucial for my college thesis, \'Intellijent,\' and continues to be a key tool in my current role. It\'s where I truly grasped the power of NoSQL databases and their advantages in handling diverse, unstructured data.',
        ...defaultLogoProps
    },
    {
        id: 'dynamoDB_logo',
        src: dynamoDB,
        content: 'In my current role, DynamoDB is a critical part of my toolkit. I proficiently manage vital project information—from cache to TTLs—confidently handling data retrieval, additions, modifications, and deletions to ensure seamless operations.',
        ...defaultLogoProps
    },
    {
        id: 'opensearch_logo',
        src: opensearch,
        content: 'In my current role, OpenSearch is a vital tool for monitoring our projects and efficiently sifting through vast amounts of organizational data. It\'s taught me how to effectively log events and pinpoint exception errors across both testing and live environments, making the retrieval of data for pagination incredibly seamless.',
        ...defaultLogoProps
    },
    {
        id: 'react_logo',
        src: reactLogo,
        content: 'This very website showcases my work with React, a library I actively use in my personal projects. It\'s my go-to for honing my front-end skills, allowing me to craft dynamic and highly interactive user interfaces.',
        ...defaultLogoProps
    },
    {
        id: 'bootstrap_logo',
        src: bootstrapLogo,
        content: 'This very portfolio was built with Bootstrap, a framework I frequently use in my personal projects. It\'s instrumental in enhancing my front-end skills, allowing me to quickly create responsive and visually appealing web applications.',
        ...defaultLogoProps
    },
    {
        id: 'jQuery_logo',
        src: jQueryLogo,
        content: 'During my internship, I leveraged jQuery for the Cadet Information System project. It was instrumental in enhancing the user interface and significantly improving the overall user experience.',
        ...defaultLogoProps
    },
];