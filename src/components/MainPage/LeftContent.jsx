import { useContext } from 'react';
import { MainContext } from '../../pages/Main/MainContext.jsx';
import styles from '../../styles/main.module.css';

import javaLogo from "../../assets/images/technologies/java.png";
import pythonLogo from "../../assets/images/technologies/python.png";
import nodeJSLogo from "../../assets/images/technologies/nodeJS.png";
import laravelLogo from "../../assets/images/technologies/laravel-logo.png";
import mySqlLogo from "../../assets/images/technologies/mySQL.png";
import mongoDBLogo from "../../assets/images/technologies/mongoDB.png";
import dynamoDB from "../../assets/images/technologies/dynamoDB.svg";
import opensearch from "../../assets/images/technologies/opensearch.svg";
import reactLogo from "../../assets/images/technologies/react.png";
import bootstrapLogo from "../../assets/images/technologies/bootstrap.png";
import jQueryLogo from "../../assets/images/technologies/jQuery.png";

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
    const { beTech, feTech, dbTech, handleAnimationEnd } = useContext(MainContext);

    return (
        <div className={'d-flex flex-column gap-2'}>
            <div>
                <h5>Server Side</h5>
                <div className={`${styles.logoContainer} d-flex flex-wrap gap-2 mt-2`}>
                    {
                        beTech.map((backend, index) => {
                            const { id, src, alt } = backend;

                            return (
                                <img key={id} src={logoImages[src]} alt={alt} onAnimationEnd={handleAnimationEnd} className={styles.logo} style={{'--n': index + 1}} />
                            );
                        })
                    }
                </div>
            </div>
            <div>
                <h5>Frontend</h5>
                <div className={`${styles.logoContainer} d-flex flex-wrap gap-2 mt-2`}>
                    {
                        feTech.map((frontend, index) => {
                            const { id, src, alt } = frontend;

                            return (
                                <img key={id} src={logoImages[src]} alt={alt} onAnimationEnd={handleAnimationEnd} className={styles.logo} style={{'--n': index + 1}} />
                            );
                        })
                    }
                </div>
            </div>
            <div>
                <h5>Database</h5>
                <div className={`${styles.logoContainer} d-flex flex-wrap gap-2 mt-2`}>
                    {
                        dbTech.map((database, index) => {
                            const { id, src, alt } = database;

                            return (
                                <img key={id} src={logoImages[src]} alt={alt} onAnimationEnd={handleAnimationEnd} className={styles.logo} style={{'--n': index + 1}} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftContent;