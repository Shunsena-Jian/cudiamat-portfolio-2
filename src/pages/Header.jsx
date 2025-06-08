import { Link } from "react-router-dom";

import HeaderLayout from "../layouts/HeaderLayout.jsx";
import UnderLineGrow from "../components/UnderlineGrow/UnderLineGrow.jsx";

import { navItems } from '../constants/Header/Navigation.js';
import { logoItems } from '../constants/Header/Logos.js';

import styles from '../styles/header.module.css';

const upperContent = (
    <div className={`container-fluid d-flex flex-column align-items-start gap-3 m-0 ${styles.textContainer}`}>
        {
            navItems.map((item, index) => {
                const {id, text, ElementType, className, to} = item;

                const content =  (
                    <UnderLineGrow key={id}>
                        <ElementType className={className} style={{ '--item': index }}>{text}</ElementType>
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