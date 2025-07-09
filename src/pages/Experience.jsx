import ExperienceLayout from '../layouts/ExperienceLayout.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function Experience() {
    useDocumentTitle('Experiences - Cudiamat');

    return (
        <ExperienceLayout
            content={ null }
        />
    );
}