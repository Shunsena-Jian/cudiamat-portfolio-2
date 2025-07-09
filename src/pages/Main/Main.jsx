import MainLayout from '../../layouts/MainLayout.jsx';
import DynamicContent from "../../components/MainPage/DynamicContent.jsx";
import LeftContent from "../../components/MainPage/LeftContent.jsx";
import RightContent from "../../components/MainPage/RightContent.jsx";
import { MainProvider } from './MainContextProvider.jsx';

function Main() {
    return (
        <MainProvider>
            <title>My Portfolio | Home</title>
            <MainLayout
                upperContent={<DynamicContent />}
                leftColumn={<LeftContent />}
                rightColumn={<RightContent />}
            />
        </MainProvider>
    );
}

export default Main;