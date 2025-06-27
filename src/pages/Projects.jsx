import {useEffect} from "react";

import ProjectLayout from "../layouts/ProjectLayout.jsx";
import { list } from "../constants/Projects/list.js"

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects - Cudiamat';
    }, []);

    const listProjects = () => {
        return(
            <ul>
                {
                    list.map((project) => {
                        const {key, content, ElementType} = project;

                        return (
                            <ElementType key={key}>
                                {content}
                            </ElementType>
                        );
                    })
                }
            </ul>
        );
    }

    return (
        <ProjectLayout
            content={ listProjects() }
        />
    );
}