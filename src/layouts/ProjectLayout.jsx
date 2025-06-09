export default function ProjectLayout({content}) {
    return (
        <main className={'project-section container-fluid p-3'}>
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