export default function MainLayout ({ leftColumn, rightColumn }) {
    return (
        <main className="main-section container-fluid p-3">
            <div className={'row'}>
                <div className={'col-12 col-md-6 d-flex align-items-end justify-content-center order-2 order-md-1'}>
                    {leftColumn}
                </div>
                <div className={'col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end justify-content-start justify-content-md-end order-1 order-md-2 pb-3 pb-md-0'}>
                    {rightColumn}
                </div>
            </div>
        </main>
    );
}