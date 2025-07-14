import {ExperienceContext} from "./ExperienceContext.jsx";

export const ExperienceProvider = ({ children }) => {


    return (
        <ExperienceContext.Provider value={{

        }}>
            { children }
        </ExperienceContext.Provider>
    )
};