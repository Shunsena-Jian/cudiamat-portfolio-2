import React, {useContext} from "react";
import {ProjectsContext} from "../../pages/Projects/ProjectsContextProvider.jsx";

const RightContent = () => {
    const { isActive, rightContent } = useContext(ProjectsContext)

    console.log(rightContent);
}

export default RightContent;