import React, {createContext} from "react";

export const ExperienceContext = createContext();

export const ExperienceContextProvider = ({ children }) => {


    return (
        <ExperienceContext.Provider value={{

        }}>
            { children }
        </ExperienceContext.Provider>
    )
};