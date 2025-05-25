export default function MainLayout ({ leftColumn, rightColumn }) {
    return (
        <main className="main-section container-fluid p-3">
            <div className={'row'}>
                <div className={'col-12 col-sm-6 d-flex align-items-end justify-content-center order-2 order-sm-1'}>
                    {leftColumn}
                </div>
                <div className={'col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-end justify-content-start justify-content-sm-end order-1 order-sm-2 pb-3 pb-sm-0'}>
                    {rightColumn}
                </div>
            </div>
        </main>
    );
}