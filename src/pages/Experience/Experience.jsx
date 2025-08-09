import ExperienceLayout from '../../layouts/ExperienceLayout.jsx';
import {ExperienceProvider} from "./ExperienceProvider.jsx";
import LeftContent from "../../components/ExperiencesPage/LeftContent.jsx";
import OverviewContent from "../../components/ExperiencesPage/OverviewContent.jsx";
import AchievementContent from "../../components/ExperiencesPage/AchievementContent.jsx";
import TechnologiesContent from "../../components/ExperiencesPage/TechnologiesContent.jsx";

export default function Experience() {

    return (
        <ExperienceProvider>
            <title>My Experience</title>
            <ExperienceLayout
                experiences={ <LeftContent/> }
                overview={ <OverviewContent/> }
                achievements={ <AchievementContent />}
                technologies={ <TechnologiesContent />}
            />
        </ExperienceProvider>
    );
}