import MainLayout from '../../layouts/MainLayout.jsx';
import DynamicContent from "../../components/MainPage/DynamicContent.jsx";
import LeftContent from "../../components/MainPage/LeftContent.jsx";
import RightContent from "../../components/MainPage/RightContent.jsx";
import { MainContextProvider } from './MainContextProvider.jsx';

function Main() {
    return (
        <MainContextProvider>
            <title>My Portfolio | Home</title>
            <MainLayout
                upperContent={<DynamicContent />}
                leftColumn={<LeftContent />}
                rightColumn={<RightContent />}
            />
        </MainContextProvider>
    );
}

export default Main;