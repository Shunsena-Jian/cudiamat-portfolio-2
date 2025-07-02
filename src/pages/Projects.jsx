import ProjectLayout from "../layouts/ProjectLayout.jsx";
import { ProjectsProvider } from '../context/ProjectsContextProvider.jsx';
import LeftContent from "../components/ProjectsPage/LeftContent.jsx";

export default function Projects() {
    return (
        <ProjectsProvider>
            <ProjectLayout
                left={ <LeftContent /> }
                middle={ null }
                right={ null }
            />
        </ProjectsProvider>
    );
}
