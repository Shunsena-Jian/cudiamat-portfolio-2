import React, {useEffect, useState} from 'react';
import {ProjectsContext} from "./ProjectsContext.jsx";

export const ProjectsProvider = ({ children }) => {
    const [rightContent, setRightContent] = useState (null);
    const [middleContent, setMiddleContent] = useState(null);
    const [isActiveMiddle, setIsActiveMiddle] = useState(false);
    const [isActiveRight, setIsActiveRight] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const handleMouseOnClickMiddle = (item) => {
        const middle = {
            id: item.id,
            title: item.title,
            company: item.company,
            description: item.description,
            link: item.link,
            github_link: item.github_link,
        };

        const right = {
            id: item.id,
            technology: item.technology,
            src: item.src,
            alt: item.alt,
            contributions: item.contributions
        };

        const isSameItem = middleContent && middleContent.title === item.title;
        console.log(isSameItem);

        if (isActiveMiddle) {
            setIsActiveRight(false);
            setIsActiveMiddle(false);
            setTimeout(() => {
                if (isSameItem) {
                    setMiddleContent('');
                    setRightContent('');
                } else {
                    setMiddleContent(middle);
                    setRightContent(right);
                    setIsActiveMiddle(true);
                    setIsActiveRight(true);
                }
            }, 500);
        } else {
            setMiddleContent(middle);
            setRightContent(right);
            setIsActiveMiddle(true);
            setIsActiveRight(true);
        }
    }

    return (
        <ProjectsContext.Provider value={{
            projects,
            isActiveMiddle,
            middleContent,
            rightContent,
            isActiveRight,
            handleMouseOnClickMiddle
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}