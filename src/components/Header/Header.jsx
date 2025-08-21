import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";

import {HeaderContext} from "./HeaderContext.jsx";
import HeaderLayout from "../../layouts/HeaderLayout.jsx";
import UnderLineGrow from "../UnderlineGrow/UnderLineGrow.jsx";
import styles from '../../styles/header.module.css';
import {HeaderProvider} from "./HeaderProvider.jsx";

const UpperContent = () => {
    const location = useLocation();
    const isActive = location.pathname === '/';

    return (
        <Link to="/" className={styles.linkReset}>
            <UnderLineGrow isActive={isActive}>
                <h1 className={'m-0'}>Jian Raphael R. Cudiamat</h1>
            </UnderLineGrow>
        </Link>
    );
};

const LowerContent = () => {
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
    )
};

export default function Header() {
    return (
        <HeaderProvider>
            <HeaderLayout
                upperContent={<UpperContent />}
                lowerContent={<LowerContent />}
            />
        </HeaderProvider>
    );
}