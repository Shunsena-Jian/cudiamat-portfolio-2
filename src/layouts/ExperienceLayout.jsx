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
                <div style={{ gridArea: 'top-left' }} className={experienceStyles.quadrant}>{overview}</div>
                <div style={{ gridArea: 'top-right' }} className={experienceStyles.quadrant}>{achievements}</div>
                <div style={{ gridArea: 'bottom' }} className={experienceStyles.quadrant}>{technologies}</div>
            </aside>
        </main>
    );
}
