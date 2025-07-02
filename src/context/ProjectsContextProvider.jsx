import React, {createContext, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [middleContent, setMiddleContent] = useState('');

    const handleMouseOnClick = (item) => {
        setMiddleContent(prevActiveContent => prevActiveContent === item ? '' : item);
    }

    return (
        <ProjectsContext.Provider value={{
            middleContent,
            handleMouseOnClick,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}