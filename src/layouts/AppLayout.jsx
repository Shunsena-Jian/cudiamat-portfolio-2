function AppLayout({ header, content }) {
    return (
        <div className={'container-fluid d-flex flex-column vh-100 p-0'}>
            <header>
                { header }
            </header>

            {/* Main Content Row */}
            <main className={'row g-0 flex-grow-1'}>
                { content }
            </main>
        </div>
    );
}

export default AppLayout;