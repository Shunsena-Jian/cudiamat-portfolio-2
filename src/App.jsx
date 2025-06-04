import '/animations.css';

// Layout Imports
import AppLayout from '/layouts/AppLayout.jsx'

// Component Imports
import Header from "./pages/Header.jsx";
import Main from "./pages/Main.jsx";

function App() {
    return (
        <AppLayout
            header={ <Header /> }
            content={ <Main />}
        />
    )
}

export default App
