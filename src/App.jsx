import '/src/styles/animations.css';

// Layout Imports
import AppLayout from '/src/layouts/AppLayout.jsx'

// Component Imports
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";

function App() {
    return (
        <AppLayout
            header={ <Header /> }
            content={ <Main />}
        />
    )
}

export default App
