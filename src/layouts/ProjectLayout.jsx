export default function ProjectLayout({content}) {
    return (
        <main className={'project-section container-fluid p-3 d-flex justify-content-center'}>
            <section className={'row container-fluid p-0'}>
                <div className={'col-6 d-flex align-items-center'}>
                    {
                        content
                            ? content
                            : <p>No projects for now</p>
                    }
                </div>
                <div className={'col-6 d-flex align-items-center justify-content-center'}>

                </div>
            </section>
        </main>
    );
}