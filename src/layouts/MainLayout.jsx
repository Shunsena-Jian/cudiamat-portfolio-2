const LeftColumnContent = ({leftColumn}) => {
    return (
        <section className={'col-12 col-md-6 d-flex align-items-center order-2 order-md-1'}>
            {leftColumn}
        </section>
    );
}

const RightColumnContent = ({rightColumn}) => {
    return (
        <aside className={'col-12 col-md-6 d-flex flex-column align-items-center align-items-md-end justify-content-start justify-content-md-end order-1 order-md-2 pb-3 pb-md-0'}>
            {rightColumn}
        </aside>
    );
}

export default function MainLayout({leftColumn, rightColumn}) {
    return (
        <main className="main-section container-fluid d-flex p-3">
            {/* Main Row */}
            <div className={'row d-flex container-fluid p-0'}>
                <LeftColumnContent leftColumn={leftColumn}/>
                <RightColumnContent rightColumn={rightColumn}/>
            </div>
        </main>
    );
}