import HeaderLayout from "./HeaderLayout.jsx";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";
import GithubLogo from '/src/assets/images/github-logo-white.png';
import LinkedInLogo from '/src/assets/images/InBug-White.png';

import styles from '/src/styles/header.module.css';

const navItems = [
    {
        id: 'name',
        text: 'Jian Raphael R. Cudiamat',
        ElementType: 'h1',
        className: 'm-0',
    },
    {
        id: 'experience',
        text: 'Experience',
        ElementType: 'p',
        className: 'm-0',
    },
    {
        id: 'projects',
        text: 'Projects',
        ElementType: 'p',
        className: 'm-0',
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
    <div className={'container-fluid d-flex flex-column align-items-start gap-3 m-0'}>
        {
            navItems.map(item => {
                const {id, text, ElementType, className} = item;

                return (
                    <UnderLineGrow key={id}>
                        <ElementType className={className}>{text}</ElementType>
                    </UnderLineGrow>
                );
            })
        }
    </div>
);

const lowerContent = (
    <div className={`container-fluid d-flex gap-3 ${styles.logoContainer}`}>
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