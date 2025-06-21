import {useEffect} from 'react';

import ExperienceLayout from '../layouts/ExperienceLayout.jsx';

export default function Experience() {
    useEffect(() => {
        document.title = 'Experiences - Cudiamat';
    }, []);

    return (
        <ExperienceLayout
            content={ null }
        />
    );
}