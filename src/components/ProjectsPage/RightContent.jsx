import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css";
import pmaLogo from "/src/assets/images/companies/pma_logo.png";
import iThinkWebLogo from "/src/assets/images/companies/ithinkweb_corporation_logo.png";
import sluLogo from "/src/assets/images/companies/slu_logo.png";

const companyLogos = {
    'slu_logo.png': sluLogo,
    'pma_logo.png': pmaLogo,
    'ithinkweb_logo.png': iThinkWebLogo
};

const RightContent = () => {
    const { isActiveRight, rightContent } = useContext(ProjectsContext);

    const company = rightContent.src ? companyLogos[rightContent.src] : null;

    return(
        <div className={`d-flex flex-column gap-2 ${isActiveRight ? styles.middleContentActive : styles.middleContentHide}`}>
            <div className={styles.companyLogoContainer}>
                <img className={styles.companyLogo} src={company} alt={rightContent.alt}/>
            </div>
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