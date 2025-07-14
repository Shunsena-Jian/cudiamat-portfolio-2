import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css";

import pmaLogo from "/public/images/pma_logo.png";

const companyLogos = {
    'pma_logo.png': pmaLogo
};

const RightContent = () => {
    const { isActiveRight, rightContent } = useContext(ProjectsContext);

    const company = rightContent.src ? companyLogos[rightContent.src] : null;

    return(
        <div className={`d-flex flex-column gap-2 ${isActiveRight ? styles.middleContentActive : styles.middleContentHide}`}>
            <img className={styles.companyLogo} src={company} alt={rightContent.alt}/>
            <p>{rightContent.role}</p>
            {
                rightContent.technology ? (
                    <div className={'d-flex'}>
                        <h5>Technologies Used:</h5>
                    </div>
                ) : ("")
            }
            <div className={'d-flex gap-1'}>
                {/*{*/}
                {/*    rightContent.technology.map((tech, index) => {*/}
                {/*        console.log(tech);*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </div>
    );
}

export default RightContent;