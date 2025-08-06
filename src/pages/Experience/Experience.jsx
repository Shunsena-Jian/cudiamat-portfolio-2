import ExperienceLayout from '../../layouts/ExperienceLayout.jsx';
import {ExperienceProvider} from "./ExperienceProvider.jsx";
import LeftContent from "../../components/ExperiencesPage/LeftContent.jsx";
import RightContent from "../../components/ExperiencesPage/RightContent.jsx";

export default function Experience() {

    return (
        <ExperienceProvider>
            <title>My Experience</title>
            <ExperienceLayout
                experiences={ <LeftContent/> }
                details={ <RightContent/> }
            />
        </ExperienceProvider>
    );
}