import styles from "../../styles/header.module.css";

export const navItems = [
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