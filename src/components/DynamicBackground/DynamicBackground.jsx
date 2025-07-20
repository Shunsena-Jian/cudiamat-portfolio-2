import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function DynamicBackground() {
    const location = useLocation();

    useEffect(() => {
        const body = document.querySelector('body');
        switch (location.pathname) {
            case '/':
                body.style.background = 'linear-gradient(150deg, rgba(0, 59, 117, 1) 0%, rgba(255, 255, 255, 1) 30%)';
                break;
            case '/projects':
                body.style.background = 'linear-gradient(150deg, rgba(117, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 30%)';
                break;
            case '/experience':
                body.style.background = 'linear-gradient(150deg, rgba(0, 117, 0, 1) 0%, rgba(255, 255, 255, 1) 30%)';
                break;
            default:
                body.style.background = 'linear-gradient(150deg, rgba(0, 59, 117, 1) 0%, rgba(255, 255, 255, 1) 30%)';
                break;
        }
    }, [location]);

    return null;
}
