import ExperienceLayout from '../../layouts/ExperienceLayout.jsx';
import {ExperienceProvider} from "./ExperienceProvider.jsx";

export default function Experience() {

    return (
        <ExperienceProvider>
            <title>My Experience</title>
            <ExperienceLayout
                content={ null }
            />
        </ExperienceProvider>
    );
}