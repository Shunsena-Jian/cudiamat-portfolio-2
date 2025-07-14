import React, {createContext, useEffect, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
    const [rightContent, setRightContent] = useState ('');
    const [activeContent, setActiveContent] = useState('');
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
        const isSameItem = activeContent && activeContent.title === item.title;

        if (isActiveMiddle) {
            setIsActiveRight(false);
            setIsActiveMiddle(false);
            setTimeout(() => {
                if (isSameItem) {
                    setActiveContent('');
                    setRightContent('');
                } else {
                    setActiveContent(item);
                    setRightContent('');
                    setIsActiveMiddle(true);
                }
            }, 500);
        } else {
            setActiveContent(item);
            setRightContent('');
            setIsActiveMiddle(true);
        }
    }

    const handleMouseOnClickRight = (content) => {
        const rightContentDetails = {
            role: content.roleDescription,
            technology: content.technology,
            src: content.src,
            alt: content.alt
        };

        const isSameContent = rightContent.alt === rightContentDetails.alt;

        if (isActiveRight) {
            setIsActiveRight(false);
            setTimeout(() => {
                if (isSameContent) {
                    setRightContent('');
                } else {
                    setRightContent(rightContentDetails);
                    setIsActiveRight(true);
                }
            }, 500);
        } else {
            setRightContent(rightContentDetails);
            setIsActiveRight(true);
        }
    }

    return (
        <ProjectsContext.Provider value={{
            projects,
            isActiveMiddle,
            activeContent,
            rightContent,
            isActiveRight,
            handleMouseOnClickMiddle,
            handleMouseOnClickRight
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}