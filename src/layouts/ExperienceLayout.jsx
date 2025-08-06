import experienceStyles from '../styles/experiences.module.css';

export default function ExperienceLayout({ content, details }) {
    return (
        <main className={experienceStyles['grid-container']}>
            <div className={`${experienceStyles['left-column']} align-items-center`}>
                {
                    content
                        ? content
                        : <p>No experiences to show for now.</p>
                }
            </div>
            <aside className={`${experienceStyles.gridItem} d-flex align-items-center`}>
                {
                    details
                        ? details
                        : <p>No details or confidential</p>
                }
            </aside>
        </main>
    );
}