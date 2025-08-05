import React, {useState, useEffect} from 'react';
import {MainContext} from "./MainContext.jsx";

export const MainProvider = ({ children }) => {
    const [beTech, setBETech] = useState([]);
    const [feTech, setFETech] = useState([]);
    const [dbTech, setDBTech] = useState([]);
    const [paragraphs, setParagraphs] = useState([]);
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [activeLogo, setActiveLogo] = useState(null);
    const [animation, setAnimation] = useState('');

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

        fetch('/data/rightMainContent.json')
            .then(response => response.json())
            .then(data => setParagraphs(data))
            .catch(error => console.error('Error fetching paragraphs:', error));
    }, []);

    useEffect(() => {
        if (hoveredLogo) {
            setActiveLogo(hoveredLogo);
            setAnimation('fadeIn');
        } else if (activeLogo) {
            setAnimation('fadeOut');
            const timer = setTimeout(() => {
                setActiveLogo(null);
            }, 250); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [hoveredLogo, activeLogo]);

    const handleAnimationEnd = (event) => {
        if (event.animationName && event.animationName.includes('enterFadeFromBottom')) {
            event.target.style.opacity = 1;
        }
    };

    const handleLogoHover = (logo) => {
        setHoveredLogo(logo);
    };

    return (
        <MainContext.Provider value={{
            beTech,
            feTech,
            dbTech,
            paragraphs,
            activeLogo,
            animation,
            handleAnimationEnd,
            hoveredLogo,
            handleLogoHover
        }}>
            {children}
        </MainContext.Provider>
    );
};
