import React, {useContext} from "react";
import {ProjectsContext} from "../../context/ProjectsContextProvider.jsx";

const MiddleContent = () => {
    const { middleContent } = useContext(ProjectsContext);

    if (! middleContent) {
        return (
            <p>No details or confidential</p>
        );
    }

    return (
        <p>{ middleContent.title }</p>
    );
}

export default MiddleContent;