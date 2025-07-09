import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";
import styles from "../../styles/projects.module.css";

const RightContent = () => {
    const { isActiveRight, isActiveMiddle, rightContent } = useContext(ProjectsContext)

    return(
        <div className={`d-flex flex-column gap-1 ${isActiveRight ? styles.middleContentActive : styles.middleContentHide}`}>
            {rightContent}
        </div>
    );
}

export default RightContent;