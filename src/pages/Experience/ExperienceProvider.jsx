import {ExperienceContext} from "./ExperienceContext.jsx";
import {useEffect, useState} from "react";

export const ExperienceProvider = ({ children }) => {
    const [experiences, setExperiences] = useState([]);
    const [activeExperience, setActiveExperience] = useState(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        fetch('/data/experiences.json')
            .then(response => response.json())
            .then(data => {
                setExperiences(data);
            })
            .catch(error => {
                console.error('Error fetching experiences:', error);
            })
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
            setTimeout(() => {
                if (isSameItem) {
                    setActiveExperience('');
                } else {
                    setIsActive(true);
                    setActiveExperience(processedExperience);
                }
            }, 500)
        } else {
            setIsActive(true);
            setActiveExperience(processedExperience);
        }
    }

    return (
        <ExperienceContext.Provider value={{
            experiences,
            isActive,
            activeExperience,
            handleOnClickExperience
        }}>
            { children }
        </ExperienceContext.Provider>
    )
};