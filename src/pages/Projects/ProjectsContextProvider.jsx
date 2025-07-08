import React, {createContext, useState} from 'react';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [rightContent, setRightContent] = useState ('');
    const [middleContent, setMiddleContent] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [hoveredItem, setHandleHoveredItem] = useState('');

    const handleMouseOnClick = (item) => {
        const isSameItem = middleContent === item;

        if (isActive) {
            setIsActive(false);
            setTimeout(() => {
                if (isSameItem) {
                    setMiddleContent('');
                    setRightContent('');
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

    const handleHoverItem = (content) => {
        console.log(content);
    }

    return (
        <ProjectsContext.Provider value={{
            isActive,
            middleContent,
            rightContent,
            hoveredItem,
            handleMouseOnClick,
            handleHoverItem
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}