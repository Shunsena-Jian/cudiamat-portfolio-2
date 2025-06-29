const LeftColumnContent = ({upperContent, leftColumn}) => {
    return (
        <section className={'col-12 col-md-6 d-flex align-items-end justify-content-center order-2 order-md-1'}>
            <div className={'row flex-column'}>

                {/* Content for the logo description */}
                <div className={'col d-flex justify-content-center text-center order-2 order-md-1'}>
                    {upperContent}
                </div>

                {/* Column for Logos */}
                <div className={'col d-flex justify-content-center order-1 order-md-2 pb-3 pt-md-3'}>
                    {leftColumn}
                </div>
            </div>
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

export default function MainLayout({upperContent, leftColumn, rightColumn}) {
    return (
        <main className="main-section container-fluid d-flex align-items-center align-items-md-end justify-content-center p-3">
            {/* Main Row */}
            <div className={'row container-fluid p-0'}>
                <LeftColumnContent upperContent={upperContent} leftColumn={leftColumn}/>
                <RightColumnContent rightColumn={rightColumn}/>
            </div>
        </main>
    );
}