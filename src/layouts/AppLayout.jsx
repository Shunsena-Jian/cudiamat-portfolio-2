import Header from '/src/components/Header/Header.jsx';

function AppLayout({ header, content }) {
    return (
        <div className={'container-fluid vh-100 p-0'}>
            { header }

            {/* Main Content Row */}
            <div className={'row g-0 flex-grow-1'}>
                { content }
            </div>
        </div>
    );
}

export default AppLayout;