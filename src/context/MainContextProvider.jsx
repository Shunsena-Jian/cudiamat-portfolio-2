import React, { useState, useRef } from 'react';
import { MainContext } from './MainContext';

export const MainProvider = ({ children }) => {
    const [activeContent, setActiveContent] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const hoverTimeOut = useRef(null);
    const leaveTimeOut = useRef(null);

    const handleMouseHover = (item) => {
        if (hoverTimeOut.current) {
            clearTimeout(hoverTimeOut.current);
        }
        if (leaveTimeOut.current) {
            clearTimeout(leaveTimeOut.current);
        }

        setIsVisible(true);
        setActiveContent(`<strong>${item.boldedWord}</strong> ${item.description}`);
    };

    const handleMouseLeave = () => {
        if (hoverTimeOut.current) {
            clearTimeout(hoverTimeOut.current);
            hoverTimeOut.current = null;
        }

        setIsVisible(false);

        leaveTimeOut.current = setTimeout(() => {
            setActiveContent('');
        }, 500);
    };

    const handleAnimationEnd = (event) => {
        if (event.animationName && event.animationName.includes('enterFadeFromBottom')) {
            event.target.style.opacity = 1;
        }
    }

    return (
        <MainContext.Provider value={{
            activeContent,
            isVisible,
            handleMouseHover,
            handleMouseLeave,
            handleAnimationEnd
        }}>
            {children}
        </MainContext.Provider>
    );
};
