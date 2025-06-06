import { Link } from "react-router-dom";

import HeaderLayout from "../layouts/HeaderLayout.jsx";
import UnderLineGrow from "../components/UnderlineGrow/UnderLineGrow.jsx";
import GithubLogo from '../assets/images/github-logo-white.png';
import LinkedInLogo from '../assets/images/InBug-White.png';

import styles from '../styles/header.module.css';

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
        to: '/experiences',
    },
    {
        id: 'projects',
        text: 'Projects',
        ElementType: 'h5',
        className: `m-0 ${styles.textItem}`,
        to: '/projects',
    }
];

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

const upperContent = (
    <div className={`container-fluid d-flex flex-column align-items-start gap-3 m-0 ${styles.textContainer}`}>
        {
            navItems.map(item => {
                const {id, text, ElementType, className, to} = item;

                const content =  (
                    <UnderLineGrow key={id}>
                        <ElementType className={className}>{text}</ElementType>
                    </UnderLineGrow>
                );

                if (to) {
                    return (
                        <Link key={id} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {content}
                        </Link>
                    );
                }
            })
        }
    </div>
);

const lowerContent = (
    <div className={`container-fluid d-flex gap-4 ${styles.logoContainer}`}>
        {
            logoItems.map(item => {
                const {id, ElementType, SubElementType, src, url, className, target} = item;

                return (
                    <ElementType key={id} href={url} target={target} className={className}>
                        <SubElementType src={src} className={`${styles.logo}`}/>
                    </ElementType>
                );
            })
        }
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