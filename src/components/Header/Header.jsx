import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

import {HeaderContext} from "./HeaderContext.jsx";
import HeaderLayout from "../../layouts/HeaderLayout.jsx";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";
import GithubLogo from "../../assets/images/technologies/github-logo-white.png";
import LinkedInLogo from "../../assets/images/technologies/InBug-White.png";
import styles from '../../styles/header.module.css';
import {HeaderProvider} from "./HeaderProvider.jsx";

const logoImages = {
    'github-logo-white.png': GithubLogo,
    'InBug-White.png': LinkedInLogo,
};

const upperContent = () => {
    const location = useLocation();
    const isActive = location.pathname === '/';

    return (
        <a href="/" className={styles.linkReset}>
            <UnderLineGrow isActive={isActive}>
                <h1 className={'m-0'}>Jian Raphael R. Cudiamat</h1>
            </UnderLineGrow>
        </a>
    );
};

const lowerContent = () => (
    <>
        <NavigationLinks />
        <SocialLogos />
    </>
);

const NavigationLinks = () => {
    const { navigationLinks } = useContext(HeaderContext);
    const location = useLocation();

    return (
        <>
            {navigationLinks && navigationLinks.map((item, index) => {
                const { id, text, ElementType, className, to, isCta } = item;
                const isActive = location.pathname === to;

                const content = isCta ? (
                    <button className={`${styles.ctaButton} ${styles.textItem} ${isActive ? styles.activeCtaButton : ''}`}>{text}</button>
                ) : (
                    <UnderLineGrow key={id} isActive={isActive}>
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
                return content;
            })}
        </>
    );
};

const SocialLogos = () => {
    const { logoLinks } = useContext(HeaderContext);
    const [logoItems, setLogoItems] = useState([]);

    useEffect(() => {
        if (logoLinks) {
            const items = logoLinks.map(item => ({
                ...item,
                src: logoImages[item.src],
            }));
            setLogoItems(items);
        }
    }, [logoLinks]);

    return (
        <>
            {logoItems.map((item, index) => {
                const { id, ElementType, SubElementType, src, url, className, target } = item;

                return (
                    <ElementType key={id} href={url} target={target} className={`${className} ${styles.logoItem}`} style={{ '--logo': index }}>
                        <SubElementType src={src} className={`${styles.logo}`} alt={id.replace('_', ' ')} />
                    </ElementType>
                );
            })}
        </>
    );
};

export default function Header() {
    return (
        <HeaderProvider>
            <HeaderLayout
                upperContent={upperContent()}
                lowerContent={lowerContent()}
            />
        </HeaderProvider>
    );
}