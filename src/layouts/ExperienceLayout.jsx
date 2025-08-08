import { useContext } from 'react';
import { ExperienceContext } from '../pages/Experience/ExperienceContext.jsx';
import experienceStyles from '../styles/experiences.module.css';

export default function ExperienceLayout({ experiences, overview, achievements, technologies }) {
    const { companyLogoUrl, activeAnimation } = useContext(ExperienceContext);

    const animationClass = activeAnimation === 'fade-in'
        ? experienceStyles.bgFadeIn
        : activeAnimation === 'fade-out'
        ? experienceStyles.bgFadeOut
        : '';

    const rightColumnStyle = companyLogoUrl
        ? { '--bg-image': `url(${companyLogoUrl})` }
        : {};

    return (
        <main className={experienceStyles['grid-container']}>
            <div className={`${experienceStyles['left-column']} align-items-center`}>
                {experiences || <p>No experiences to show for now.</p>}
            </div>
            <aside
                className={`${experienceStyles.gridItem} ${experienceStyles.rightColumnContainer} ${animationClass}`}
                style={rightColumnStyle}
            >
                <div className={experienceStyles.quadrant}>{overview}</div>
                <div className={experienceStyles.quadrant}>{achievements}</div>
                <div className={experienceStyles.quadrant}>{technologies}</div>
                <div className={experienceStyles.quadrant}></div>
            </aside>
        </main>
    );
}
