import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContext.jsx";
import styles from "../../styles/projects.module.css";
import pmaLogo from "/src/assets/images/companies/pma_logo.png";
import iThinkWebLogo from "/src/assets/images/companies/ithinkweb_corporation_logo.png";
import sluLogo from "/src/assets/images/companies/slu_logo.png";
import laravelLogo from "/src/assets/images/technologies/laravel-logo.png";
import mySqlLogo from "/src/assets/images/technologies/mySQL.png";
import mongoDBLogo from "/src/assets/images/technologies/mongoDB.png";
import dynamoDBLogo from "/src/assets/images/technologies/dynamoDB.png";
import opensearchLogo from "/src/assets/images/technologies/opensearch.png";
import javascriptLogo from "/src/assets/images/technologies/javascript_logo.png";
import htmlLogo from "/src/assets/images/technologies/html_logo.png";
import nodeJSLogo from "/src/assets/images/technologies/nodeJS.png";
import pugLogo from "/src/assets/images/technologies/pug_logo.png";
import cssLogo from "/src/assets/images/technologies/css_logo.png";
import tailWindLogo from "/src/assets/images/technologies/tailwind_logo.png";

const techStackLogos = {
    'laravel-logo.png': laravelLogo,
    'mySQL.png': mySqlLogo,
    'mongoDB.png': mongoDBLogo,
    'dynamoDB.svg': dynamoDBLogo,
    'opensearch.svg': opensearchLogo,
    'javascript_logo.png': javascriptLogo,
    'html_logo.png': htmlLogo,
    'nodeJS.png': nodeJSLogo,
    'pug_logo.png': pugLogo,
    'css_logo.png': cssLogo,
    'tailwind_logo.png': tailWindLogo
};

const RightContent = () => {
    const { isActiveRight, rightContent } = useContext(ProjectsContext);

    if (!rightContent) {
        return null;
    }

    return(
        <div className={`d-flex flex-column gap-2 ${isActiveRight ? styles.middleContentActive : styles.middleContentHide}`}>
            <p>{rightContent.role}</p>
            {
                rightContent.technology ? (
                    <div className={'d-flex'}>
                        <h5>Technologies Used:</h5>
                    </div>
                ) : ("")
            }
            <div className={'d-flex gap-1 justify-content-center'}>
                {
                    rightContent.technology && rightContent.technology.map((tech, index) => {
                        const techLogo = techStackLogos[tech];
                        return techLogo ? <img key={index} src={techLogo} alt={tech} className={styles.techLogo}/> : null;
                    })
                }
            </div>
        </div>
    );
}

export default RightContent;