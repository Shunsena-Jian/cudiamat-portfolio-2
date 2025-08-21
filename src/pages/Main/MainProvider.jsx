import React from 'react';
import { MainContext } from "./MainContext.jsx";
import { useMainContent } from "../../hooks/useMainContent.js";
import { useLogoAnimation } from "../../hooks/useLogoAnimation.js";

export const MainProvider = ({ children }) => {
    const { beTech, feTech, dbTech, paragraphs, resume, github, linkedin } = useMainContent();
    const { activeLogo, animation, hoveredLogo, handleLogoHover } = useLogoAnimation();

    const handleAnimationEnd = (event) => {
        if (event.animationName && event.animationName.includes('enterFadeFromBottom')) {
            event.target.style.opacity = 1;
        }
    };

    return (
        <MainContext.Provider value={{
            beTech,
            feTech,
            dbTech,
            paragraphs,
            activeLogo,
            animation,
            resume,
            github,
            linkedin,
            handleAnimationEnd,
            hoveredLogo,
            handleLogoHover
        }}>
            {children}
        </MainContext.Provider>
    );
};
