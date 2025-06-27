import MainLayout from '../layouts/MainLayout.jsx';
import {useEffect, useRef, useState} from 'react';
import DynamicContent from "../components/MainPage/DynamicContent.jsx";
import LeftContent from "../components/MainPage/LeftContent.jsx";
import RightContent from "../components/MainPage/RightContent.jsx";

function Main() {
    useEffect(() => {
        document.title = 'Portfolio - Cudiamat';
    }, []);

    const [activeContent, setActiveContent] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const hoverTimeOut = useRef(null);
    const leaveTimeOut = useRef(null);

    const handleMouseHover = (item) => {
        if (hoverTimeOut.current) {
            clearTimeout(hoverTimeOut.current);
        }
        if (leaveTimeOut.current) {
            clearTimeout(leaveTimeOut.current);
        }

        setIsVisible(true);
        setActiveContent(`<strong>${item.boldedWord}</strong> ${item.description}`);
    };

    const handleMouseLeave = () => {
        if (hoverTimeOut.current) {
            clearTimeout(hoverTimeOut.current);
            hoverTimeOut.current = null;
        }

        setIsVisible(false);

        leaveTimeOut.current = setTimeout(() => {
            setActiveContent('');
        }, 500);
    };

    const handleAnimationEnd = (event) => {
        if (event.animationName && event.animationName.includes('enterFadeFromBottom')) {
            event.target.style.opacity = 1;
        }
    }

    return (
        <MainLayout
            upperContent={<DynamicContent activeContent={activeContent} isVisible={isVisible} />}
            leftColumn={<LeftContent handleMouseHover={handleMouseHover} handleMouseLeave={handleMouseLeave} handleAnimationEnd={handleAnimationEnd} />}
            rightColumn={<RightContent />}
        />
    );
}

export default Main;