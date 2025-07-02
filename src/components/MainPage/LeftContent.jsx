import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContextProvider.jsx';
import styles from '../../styles/main.module.css';

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

const logoImages = {
    'java.png': javaLogo,
    'python.png': pythonLogo,
    'nodeJS.png': nodeJSLogo,
    'laravel-logo.png': laravelLogo,
    'mySQL.png': mySqlLogo,
    'mongoDB.png': mongoDBLogo,
    'dynamoDB.svg': dynamoDB,
    'opensearch.svg': opensearch,
    'react.png': reactLogo,
    'bootstrap.png': bootstrapLogo,
    'jQuery.png': jQueryLogo,
};

const LeftContent = () => {
    const { handleMouseHover, handleMouseLeave, handleAnimationEnd } = useContext(MainContext);
    const [logoItems, setLogoItems] = useState([]);

    useEffect(() => {
        fetch('/data/leftMainContent.json')
            .then(response => response.json())
            .then(data => {
                const items = data.map(item => ({
                    ...item,
                    src: logoImages[item.src],
                    ElementType: 'img',
                    className: styles.logo,
                }));
                setLogoItems(items);
            })
            .catch(error => console.error('Error fetching left content:', error));
    }, []);

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