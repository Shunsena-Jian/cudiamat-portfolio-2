import {HeaderContext} from "./HeaderContext.jsx";
import {useEffect, useState} from "react";

export const HeaderProvider = ({ children }) => {
    const [navigationLinks, setNavigationLinks] = useState([]);
    const [logoLinks, setLogoLinks] = useState([]);

    useEffect(() => {
        fetch('/data/headerNavItems.json')
            .then(response => response.json())
            .then(data => {
                const navs = data.filter(item => item.ElementType === 'h5');
                const logos = data.filter(item => item.ElementType === 'a');
                setNavigationLinks(navs);
                setLogoLinks(logos);
            })
            .catch(error => console.error('Error fetching nav items:', error));
    }, []);

    return (
        <HeaderContext.Provider value={{
            navigationLinks,
            logoLinks
        }}>
            {children}
        </HeaderContext.Provider>
    );
};