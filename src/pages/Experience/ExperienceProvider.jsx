import { ExperienceContext } from "./ExperienceContext.jsx";
import { useExperiences } from "../../hooks/useExperiences.js";
import { useExperienceInteraction } from "../../hooks/useExperienceInteraction.js";

export const ExperienceProvider = ({ children }) => {
    const experiences = useExperiences();
    const interactionProps = useExperienceInteraction();

    return (
        <ExperienceContext.Provider value={{
            experiences,
            ...interactionProps
        }}>
            {children}
        </ExperienceContext.Provider>
    );
};
