import {Link, useLocation} from "react-router-dom";

import HeaderLayout from "../layouts/HeaderLayout.jsx";
import UnderLineGrow from "../components/UnderlineGrow/UnderLineGrow.jsx";

const navItems = [
    {
        id: 'name',
        text: 'Jian Raphael R. Cudiamat',
        ElementType: 'h1',
        className: `m-0 ${styles.textItem}`,
        to: '/',
    },
    {
        id: 'experience',
        text: 'Experience',
        ElementType: 'h5',
        className: `m-0 ${styles.textItem}`,
        to: '/experience',
    },
    {
        id: 'projects',
        text: 'Projects',
        ElementType: 'h5',
        className: `m-0 ${styles.textItem}`,
        to: '/projects',
    }
];
import GithubLogo from "../assets/images/github-logo-white.png";
import LinkedInLogo from "../assets/images/InBug-White.png";

const logoItems = [
    {
        id: 'github_logo',
        ElementType: 'a',
        SubElementType: 'img',
        src: GithubLogo,
        url: 'https://github.com/Shunsena-Jian',
        className: `m-0 ${styles.logoItem}`,
        target: '_blank',
    },
    {
        id: 'linkedIn_logo',
        ElementType: 'a',
        SubElementType: 'img',
        src: LinkedInLogo,
        url: 'https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/',
        className: `m-0 ${styles.logoItem}`,
        target: '_blank',
    }
];

import styles from '../styles/header.module.css';

const NavigationLinks = () => {
    const location = useLocation();

    return (
        <>
            {
                navItems.map((item, index) => {
                    const {id, text, ElementType, className, to} = item;
                    const isActive = location.pathname === to;

                    const content =  (
                        <UnderLineGrow key={id} isActive={isActive} >
                            <ElementType className={className} style={{ '--item': index }}>{text}</ElementType>
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

const SocialLogos = () => (
    <>
        {
            logoItems.map((item, index) => {
                const {id, ElementType, SubElementType, src, url, className, target} = item;

                return (
                    <ElementType key={id} href={url} target={target} className={className} style={{ '--logo': index }}>
                        <SubElementType src={src} className={`${styles.logo}`} alt={id.replace('_', ' ')}/>
                    </ElementType>
                );
            })
        }
    </>
);

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