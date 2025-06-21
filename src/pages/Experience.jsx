import {useEffect} from "react";

import ExperienceLayout from '../layouts/ExperienceLayout.jsx';

export default function Experience() {
    useEffect(() => {
        document.title = 'Experiences - Cudiamat';
    }, []);

    // TODO: Create content, current planning and designing phase


    return (
        <ExperienceLayout
            content={ null }
        />
    );
}