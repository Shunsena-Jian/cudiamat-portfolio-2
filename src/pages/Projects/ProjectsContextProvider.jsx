import React, {createContext, useEffect, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsContextProvider = ({ children }) => {
    const [rightContent, setRightContent] = useState ('');
    const [activeContent, setActiveContent] = useState('');
    const [isActiveMiddle, setIsActiveMiddle] = useState(false);
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

    const handleMouseOnClick = (item) => {
        const isSameItem = activeContent && activeContent.title === item.title;

        if (isActiveMiddle) {
            setIsActiveMiddle(false);
            setTimeout(() => {
                if (isSameItem) {
                    setActiveContent('');
                } else {
                    setActiveContent(item);
                    setIsActiveMiddle(true);
                }
            }, 500);
        } else {
            setActiveContent(item);
            setIsActiveMiddle(true);
        }
    }

    const handleHoverItem = (content) => {
        setRightContent(content);
    }

    return (
        <ProjectsContext.Provider value={{
            projects,
            isActiveMiddle,
            activeContent,
            rightContent,
            handleMouseOnClick,
            handleHoverItem
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}