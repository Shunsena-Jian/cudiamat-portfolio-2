import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import HeaderLayout from "../layouts/HeaderLayout.jsx";
import UnderLineGrow from "../components/UnderlineGrow/UnderLineGrow.jsx";
import GithubLogo from "../assets/images/technologies/github-logo-white.png";
import LinkedInLogo from "../assets/images/technologies/InBug-White.png";
import styles from '../styles/header.module.css';

const logoImages = {
    'github-logo-white.png': GithubLogo,
    'InBug-White.png': LinkedInLogo,
};

const NavigationLinks = () => {
    const location = useLocation();
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        fetch('/data/headerNavItems.json')
            .then(response => response.json())
            .then(data => setNavItems(data))
            .catch(error => console.error('Error fetching nav items:', error));
    }, []);

    return (
        <>
            {
                navItems.map((item, index) => {
                    const {id, text, ElementType, className, to} = item;
                    const isActive = location.pathname === to;

                    const content =  (
                        <UnderLineGrow key={id} isActive={isActive} >
                            <ElementType className={`${className} ${styles.textItem}`} style={{ '--item': index }}>{text}</ElementType>
                        </UnderLineGrow>
                    );

                    if (to) {
                        return (
                            <Link key={id} to={to} className={styles.linkReset}>
                                {content}
                            </Link>
                        );
                    }
                })
            }
        </>
    );
};

const upperContent = (
    <nav className={`container-fluid d-flex flex-column align-items-start gap-3 m-0`}>
        <NavigationLinks />
    </nav>
);

const SocialLogos = () => {
    const [logoItems, setLogoItems] = useState([]);

    useEffect(() => {
        fetch('/data/headerLogoItems.json')
            .then(response => response.json())
            .then(data => {
                const items = data.map(item => ({
                    ...item,
                    src: logoImages[item.src],
                }));
                setLogoItems(items);
            })
            .catch(error => console.error('Error fetching logo items:', error));
    }, []);

    return (
        <>
            {
                logoItems.map((item, index) => {
                    const {id, ElementType, SubElementType, src, url, className, target} = item;

                    return (
                        <ElementType key={id} href={url} target={target} className={`${className} ${styles.logoItem}`} style={{ '--logo': index }}>
                            <SubElementType src={src} className={`${styles.logo}`} alt={id.replace('_', ' ')}/>
                        </ElementType>
                    );
                })
            }
        </>
    )
};

const lowerContent = (
    <div className={`container-fluid d-flex gap-4`}>
        <SocialLogos />
    </div>
);

export default function Header() {
    return (
        <HeaderLayout
            upperContent={ upperContent }
            lowerContent={ lowerContent }
        />
    )
}