import { useState, useEffect } from 'react';

export const useLogoAnimation = () => {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [activeLogo, setActiveLogo] = useState(null);
    const [animation, setAnimation] = useState('');

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

    const handleLogoHover = (logo) => {
        setHoveredLogo(logo);
    };

    return { activeLogo, animation, hoveredLogo, handleLogoHover };
};