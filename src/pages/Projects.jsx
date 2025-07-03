import ProjectLayout from "../layouts/ProjectLayout.jsx";
import { ProjectsProvider } from '../context/ProjectsContextProvider.jsx';
import LeftContent from "../components/ProjectsPage/LeftContent.jsx";
import MiddleContent from "../components/ProjectsPage/MiddleContent.jsx";
import RightContent from "../components/ProjectsPage/RightContent.jsx";

export default function Projects() {
    return (
        <ProjectsProvider>
            <ProjectLayout
                left={ <LeftContent /> }
                middle={ <MiddleContent /> }
                right={ <RightContent /> }
            />
        </ProjectsProvider>
    );
}
