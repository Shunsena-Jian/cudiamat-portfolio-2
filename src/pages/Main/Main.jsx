import MainLayout from '../../layouts/MainLayout.jsx';
import LeftContent from "../../components/MainPage/LeftContent.jsx";
import RightContent from "../../components/MainPage/RightContent.jsx";
import { MainProvider } from './MainProvider.jsx';

function Main() {
    return (
        <MainProvider>
            <title>My Portfolio | Home</title>
            <MainLayout
                leftColumn={<LeftContent />}
                rightColumn={<RightContent />}
            />
        </MainProvider>
    );
}

export default Main;