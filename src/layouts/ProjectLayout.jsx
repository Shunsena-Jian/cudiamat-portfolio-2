export default function ProjectLayout({content}) {
    return (
        <main className={'project-section container-fluid p-3 d-flex align-items-center justify-content-center'}>
            <div className={'row'}>
                <div className={'col'}>
                    {
                        content
                            ? content
                            : <p>No projects for now</p>
                    }
                </div>
            </div>
        </main>
    );
}