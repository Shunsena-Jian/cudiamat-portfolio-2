import ProjectLayout from "../../layouts/ProjectLayout.jsx";
import { ProjectsProvider } from './ProjectsProvider.jsx';
import LeftContent from "../../components/ProjectsPage/LeftContent.jsx";
import MiddleContent from "../../components/ProjectsPage/MiddleContent.jsx";
import RightContent from "../../components/ProjectsPage/RightContent.jsx";

export default function Projects() {
    return (
        <ProjectsProvider>
            <title>My Projects</title>
            <ProjectLayout
                left={ <LeftContent /> }
                middle={ <MiddleContent /> }
                right={ <RightContent /> }
            />
        </ProjectsProvider>
    );
}
