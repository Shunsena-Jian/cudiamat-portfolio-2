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
        console.log(experience);
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