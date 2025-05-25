import '/src/styles/animations.css';

// Layout Imports
import AppLayout from '/src/layouts/AppLayout.jsx'

// Component Imports
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <AppLayout
            header={ <Header /> }
            content={ <Main />}
        />
    )
}

export default App
