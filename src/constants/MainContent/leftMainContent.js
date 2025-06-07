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
    className: `logo ${styles.logo}`,
};

export const logoItems = [
    {
        id: 'java_logo',
        src: javaLogo,
        content: 'Java - My first programming language, which I learned during my college years. It laid the foundation for my programming journey and continues to influence my approach to software development.',
        ...defaultLogoProps
    },
    {
        id: 'python_logo',
        src: pythonLogo,
        content: 'Python - My second programming language, which I learned during my college years. We used this technology to use in our web scraping, data analysis, and machine learning tasks.',
        ...defaultLogoProps
    },
    {
        id: 'nodeJS_logo',
        src: nodeJSLogo,
        content: 'NodeJS w/ Express - My third programming language, which I learned during my college years as well to apply it in our thesis project, "Intellijent".',
        ...defaultLogoProps
    },
    {
        id: 'laravel_logo',
        src: laravelLogo,
        content: 'PHP Laravel - My current programming language, which I am actively using in my professional work as a Full Time Backend Developer. I have developed several projects using Laravel, including the Cadet Information System, where I utilized its powerful features to build robust and efficient server-side applications.',
        ...defaultLogoProps
    },
    {
        id: 'mySQL_logo',
        src: mySqlLogo,
        content: 'MySQL - I have been using this since my college years, where it served as my stepping stone in learning database management for the different tasks and projects I did.',
        ...defaultLogoProps
    },
    {
        id: 'mongoDB_logo',
        src: mongoDBLogo,
        content: 'MongoDB - I have used this in our thesis project and in my current role, which allowed me to work with NoSQL databases and understand their advantages in handling unstructured data.',
        ...defaultLogoProps
    },
    {
        id: 'dynamoDB_logo',
        src: dynamoDB,
        content: 'DynamoDB - I currently use this in my current role. My experience with DynamoDB allowed me to proficiently retrieve, add, modify, and delete data, thereby managing critical information within projects. I also gained practical experience utilizing NoSQL Workbenches for efficient data manipulation and exploration.',
        ...defaultLogoProps
    },
    {
        id: 'opensearch_logo',
        src: opensearch,
        content: 'OpenSearch - I am currently using this in my current role, which allowed me to monitor our projects and enabled me to search large amounts of data in our organization.',
        ...defaultLogoProps
    },
    {
        id: 'react_logo',
        src: reactLogo,
        content: 'React - This website was developed using React, a library I am actively using for my personal projects to enhance my front-end skills in building dynamic and interactive user interfaces.',
        ...defaultLogoProps
    },
    {
        id: 'bootstrap_logo',
        src: bootstrapLogo,
        content: 'Bootstrap - This portfolio website was developed using Bootstrap, a framework I am actively using for my personal projects to enhance my front-end skills in building responsive and visually appealing web applications.',
        ...defaultLogoProps
    },
    {
        id: 'jQuery_logo',
        src: jQueryLogo,
        content: 'JQuery - I have used this library in the Cadet Information System project, where I utilized it to enhance the user interface and improve the overall user experience.',
        ...defaultLogoProps
    },
];