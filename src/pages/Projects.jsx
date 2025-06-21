import {useEffect} from "react";

import ProjectLayout from "../layouts/ProjectLayout.jsx";

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects Cudiamat';
    }, []);

    // TODO: Create content, current planning and designing phase

    return (
        <ProjectLayout
            content={null}
        />
    );
}