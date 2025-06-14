import { paragraphs } from '../constants/MainContent/rightMainContent.js';
import { logoItems } from '../constants/MainContent/leftMainContent.js';

import styles from '../styles/main.module.css';

import MainLayout from '../layouts/MainLayout.jsx';
import {useEffect, useRef, useState} from 'react';

function Main() {
    useEffect(() => {
        document.title = 'Cudiamat Portfolio';
    }, []);

    const [activeContent, setActiveContent] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const hoverTimeOut = useRef(null);
    const leaveTimeOut = useRef(null);

    const handleMouseHover = (item) => {
        if (hoverTimeOut.current) {
            clearTimeout(hoverTimeOut.current);
        }
        if (leaveTimeOut.current) {
            clearTimeout(leaveTimeOut.current);
        }

        setIsVisible(true);
        setActiveContent(item.content);
    };

    const handleMouseLeave = () => {
        if (hoverTimeOut.current) {
            clearTimeout(hoverTimeOut.current);
            hoverTimeOut.current = null;
        }

        setIsVisible(false);

        leaveTimeOut.current = setTimeout(() => {
            setActiveContent('');
        }, 500);
    };

    const dynamicContent = ({ activeContent, isVisible }) => {
        if (activeContent) {
            return (
                <div className={`${isVisible ? styles.showDynamicContent : styles.hideDynamicContent}`}>
                    {activeContent}
                </div>
            );
        }

        return (
            <p className={`${styles.showDynamicContent}`}>
                Hover or Click a logo to see the details.
            </p>
        );
    }

    const handleAnimationEnd = (event) => {
        if (event.animationName && event.animationName.includes('enterFadeFromBottom')) {
            event.target.style.opacity = 1;
        }
    }

    const leftContent = (
        <div className={`${styles.logoContainer} d-flex flex-wrap gap-3`}>
            {
                logoItems.map((item, index) => {
                    const {id, ElementType, src, className} = item;

                    return (
                        <ElementType
                            key={id}
                            src={src}
                            onMouseEnter={() => handleMouseHover(item)}
                            onMouseLeave={handleMouseLeave}
                            className={className}
                            onAnimationEnd={handleAnimationEnd}
                            style={{ '--n': index + 1 }}
                        />
                    );
                })
            }
        </div>
    );

    const rightContent = (
        <div className={`${styles.paragraph} text-center text-md-end`}>
            {
                paragraphs.map(item => {
                    const {key, ElementType, content} = item;

                    return (
                        <ElementType key={key}>{content}</ElementType>
                    );
                })
            }
        </div>
    );

    return (
        <MainLayout
            upperContent={dynamicContent({ activeContent, isVisible })}
            leftColumn={leftContent}
            rightColumn={rightContent}
        />
    );
}

export default Main;