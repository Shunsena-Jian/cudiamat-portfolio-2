export default function MainLayout ({ leftColumn, rightColumn }) {
    return (
        <main className="main-section container-fluid p-3">
            <div className={'row'}>
                <div className={'col-6 col-sm-12 d-flex align-items-end'}>
                    <div className={`col d-flex flex-wrap`}>
                        {leftColumn}
                    </div>
                </div>
                <div className={'col-6 col-sm-12 d-flex flex-column align-items-end justify-content-end'}>
                    {rightColumn}
                </div>
            </div>
        </main>
    );
}