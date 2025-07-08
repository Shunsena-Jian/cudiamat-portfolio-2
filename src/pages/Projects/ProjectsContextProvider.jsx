import React, {createContext, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [middleContent, setMiddleContent] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleMouseOnClick = (item) => {
        const isSameItem = middleContent === item;

        if (middleContent) {
            setIsActive(false);
            setTimeout(() => {
                if (isSameItem) {
                    setMiddleContent('');
                } else {
                    setMiddleContent(item);
                    setIsActive(true);
                }
            }, 500);
        } else {
            setMiddleContent(item);
            setIsActive(true);
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