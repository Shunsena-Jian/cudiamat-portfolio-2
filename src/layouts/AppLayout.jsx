import Header from '/src/layouts/Header/Header.jsx';

function AppLayout({ header, content }) {
    return (
        <div className={'container-fluid d-flex flex-column vh-100 p-0'}>
            <div>
                { header }
            </div>

            {/* Main Content Row */}
            <div className={'row g-0 flex-grow-1 align-items-start align-items-md-end'}>
                { content }
            </div>
        </div>
    );
}

export default AppLayout;