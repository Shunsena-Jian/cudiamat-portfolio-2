import '/src/styles/animations.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <div className={'d-flex flex-column min-vh-100'}>
                <Header />
                <Main />
            </div>
        </>
    )
}

export default App
