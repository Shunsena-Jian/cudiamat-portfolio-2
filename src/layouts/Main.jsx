import '/src/styles/main.css';

export default function Main() {
    return (
        <section className={'main-section min-vh-100 vw-100'}>
            <div className={'container-fluid'}>
                <div className={'d-grid grid-container'}>
                    <div className={"section-1"}>Content for Section 1</div>
                    <div className={"section-0"}>Content for Section 0</div>
                    <div className={"section-2"}>Content for Section 2</div>
                    <div className={"section-3"}>Content for Section 3</div>
                </div>
            </div>
        </section>
    )
}