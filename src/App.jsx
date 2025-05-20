import '/src/styles/animations.css';

import Main from "./layouts/Main";
import Header from "./layouts/Header";

function App() {
    return (
        <>
            <div className={'d-flex flex-column justify-content-between min-vh-100'}>
                <Header />
                <Main />
            </div>
        </>
    )
}

export default App
