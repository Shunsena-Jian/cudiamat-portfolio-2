import React, {createContext, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [middleContent, setMiddleContent] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleMouseOnClick = (item) => {
        const isSameItem = middleContent === item;
        if (isSameItem) {
            setIsActive(false);
            setMiddleContent('');
        } else {
            setIsActive(true);
            setMiddleContent(item);
        }
    }

    return (
        <ProjectsContext.Provider value={{
            isActive,
            middleContent,
            handleMouseOnClick,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}