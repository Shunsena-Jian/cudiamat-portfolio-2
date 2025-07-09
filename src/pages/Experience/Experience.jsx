import ExperienceLayout from '../../layouts/ExperienceLayout.jsx';
import {ExperienceContextProvider} from "./ExperienceContextProvider.jsx";

export default function Experience() {

    return (
        <ExperienceContextProvider>
            <title>My Experience</title>
            <ExperienceLayout
                content={ null }
            />
        </ExperienceContextProvider>
    );
}