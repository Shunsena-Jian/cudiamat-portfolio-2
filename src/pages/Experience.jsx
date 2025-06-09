import {useEffect} from "react";

import ExperienceLayout from '../layouts/ExperienceLayout.jsx';

export default function Experience() {
    useEffect(() => {
        document.title = 'Cudiamat Portfolio - Experiences';
    }, []);

    // TODO: Create content, current planning and designing phase

    return (
        <ExperienceLayout
            content={ null }
        />
    );
}