import React, {createContext, useEffect, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [rightContent, setRightContent] = useState ('');
    const [activeContent, setActiveContent] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = 'Projects - Cudiamat';
        fetch('/data/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const handleMouseOnClick = (item) => {
        const isSameItem = activeContent && activeContent.title === item.title;

        if (isActive) {
            setIsActive(false);
            setTimeout(() => {
                if (isSameItem) {
                    setActiveContent('');
                } else {
                    setActiveContent(item);
                    setIsActive(true);
                }
            }, 500);
        } else {
            setActiveContent(item);
            setIsActive(true);
        }
    }

    const handleHoverItem = (content) => {
        console.log(content);
        setRightContent(content);
    }

    return (
        <ProjectsContext.Provider value={{
            projects,
            isActive,
            activeContent,
            rightContent,
            handleMouseOnClick,
            handleHoverItem
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}