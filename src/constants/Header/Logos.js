import GithubLogo from "../../assets/images/github-logo-white.png";
import styles from "../../styles/header.module.css";
import LinkedInLogo from "../../assets/images/InBug-White.png";

export const logoItems = [
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