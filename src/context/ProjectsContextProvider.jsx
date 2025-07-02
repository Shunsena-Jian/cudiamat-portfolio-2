import React, {createContext, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [activeContent, setActiveContent] = useState('');

    const handleMouseOnClick = (item) => {
        if (activeContent) {
            setActiveContent('');
        }

        setActiveContent(item);
    }

    return (
        <ProjectsContext.Provider value={{
            activeContent,
            handleMouseOnClick,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}