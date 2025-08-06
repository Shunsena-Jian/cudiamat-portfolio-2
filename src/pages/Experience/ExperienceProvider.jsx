import { ExperienceContext } from "./ExperienceContext.jsx";
import { useEffect, useState } from "react";
import { getCompanyImageUrl } from "../../utils/assetHelper.js";

export const ExperienceProvider = ({ children }) => {
    const [experiences, setExperiences] = useState([]);
    const [activeExperience, setActiveExperience] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [companyLogoUrl, setCompanyLogoUrl] = useState(null);
    const [activeAnimation, setActiveAnimation] = useState('');

    useEffect(() => {
        fetch('/data/experiences.json')
            .then(response => response.json())
            .then(data => {
                setExperiences(data);
            })
            .catch(error => {
                console.error('Error fetching experiences:', error);
            });
    }, []);

    const handleOnClickExperience = (experience) => {
        const processedExperience = {
            id: experience.id,
            position: experience.position,
            duration: experience.duration,
            responsibilities: experience.responsibilities,
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

    return (
        <ExperienceContext.Provider value={{
            experiences,
            isActive,
            activeExperience,
            handleOnClickExperience,
            companyLogoUrl,
            activeAnimation
        }}>
            {children}
        </ExperienceContext.Provider>
    );
};
