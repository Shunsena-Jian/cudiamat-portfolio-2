import { useState, useRef } from 'react';
import { getCompanyImageUrl } from "../utils/assetHelper.js";

export const useExperienceInteraction = () => {
    const [activeExperience, setActiveExperience] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [companyLogoUrl, setCompanyLogoUrl] = useState(null);
    const [activeAnimation, setActiveAnimation] = useState('');
    const [activeTech, setActiveTech] = useState(null);
    const [animation, setAnimation] = useState('');
    const hoverTimeoutRef = useRef(null);

    const handleOnClickExperience = (experience) => {
        const processedExperience = {
            id: experience.id,
            position: experience.overview.position,
            duration: experience.overview.duration,
            responsibilities: experience.overview.responsibilities,
            achievements: experience.achievements,
            technologies: experience.technologies,
            company_logo: experience.company_logo,
            alt: experience.alt
        };

        const isSameItem = activeExperience && activeExperience.id === experience.id;

        if (isActive) {
            setIsActive(false);
            setActiveAnimation('fade-out');
            setTimeout(() => {
                if (isSameItem) {
                    setActiveExperience(null);
                    setCompanyLogoUrl(null);
                    setActiveAnimation(null);
                } else {
                    setIsActive(true);
                    setActiveExperience(processedExperience);
                    setActiveAnimation('fade-in');

                    const newLogoUrl = getCompanyImageUrl(processedExperience.company_logo);
                    setCompanyLogoUrl(newLogoUrl);
                }
            }, 500);
        } else {
            setIsActive(true);
            setActiveExperience(processedExperience);
            setActiveAnimation('fade-in');

            const newLogoUrl = getCompanyImageUrl(processedExperience.company_logo);
            setCompanyLogoUrl(newLogoUrl);
        }
    };

    const handleHoverTechStack = (wordmark) => {
        clearTimeout(hoverTimeoutRef.current);

        if (!wordmark) {
            setAnimation('fadeOut');
            hoverTimeoutRef.current = setTimeout(() => {
                setActiveTech(null);
            }, 250);
        } else {
            setActiveTech(wordmark);
            setAnimation('fadeIn');
        }
    };

    return {
        isActive,
        activeExperience,
        handleOnClickExperience,
        handleHoverTechStack,
        companyLogoUrl,
        activeAnimation,
        activeTech,
        animation
    };
};