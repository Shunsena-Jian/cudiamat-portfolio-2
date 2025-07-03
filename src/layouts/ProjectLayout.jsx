export default function ProjectLayout({left, middle, right}) {
    return (
        <main className={'project-section container-fluid p-3 d-flex justify-content-start'}>
            <section className={'row container-fluid p-0'}>
                <div className={'col-3 d-flex align-items-center'}>
                    {
                        left
                            ? left
                            : <p>No projects</p>
                    }
                </div>
                <div className={'col-5 d-flex align-items-center'}>
                    {
                        middle
                            ? middle
                            : <p>No details or confidential</p>
                    }
                </div>
                <div className={'col-4 d-flex align-items-center'}>
                    {
                        right
                            ? right
                            : <p>No details or confidential</p>
                    }
                </div>
            </section>
        </main>
    );
}