import React, {useState, useRef, useEffect} from 'react';
import {MainContext} from "./MainContext.jsx";
import styles from "../../styles/main.module.css";

export const MainProvider = ({ children }) => {
    const [beTech, setBETech] = useState([]);
    const [feTech, setFETech] = useState([]);
    const [dbTech, setDBTech] = useState([]);

    useEffect(() => {
        fetch('/data/leftMainContent.json')
            .then(response => response.json())
            .then(data => {
                const backendTechs = [];
                const frontendTechs = [];
                const databaseTechs = [];

                data.forEach(item => {
                    if (item.backend) {
                        backendTechs.push(...item.backend);
                    }
                    if (item.frontend) {
                        frontendTechs.push(...item.frontend);
                    }
                    if (item.database) {
                        databaseTechs.push(...item.database);
                    }
                });

                setBETech(backendTechs);
                setFETech(frontendTechs);
                setDBTech(databaseTechs);
            })
            .catch(error => console.error('Error fetching left content:', error));
    }, []);

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
            handleAnimationEnd
        }}>
            {children}
        </MainContext.Provider>
    );
};