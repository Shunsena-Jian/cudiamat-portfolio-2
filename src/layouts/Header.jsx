import '/src/styles/header.css';

export default function Header() {
    return (
        <section className={'main-section between d-flex'}>
            <div className={'container-fluid m-0'}>
                <div className={'container-fluid m-0 gap-5'}>
                    <div className={'row px-5 pt-5'}>
                        <div className={'col-12 col-md-6 '}>
                            <span className={'underline-grow mb-2'}>
                                <h3 className={'m-0'}>Jian Raphael R. Cudiamat</h3>
                            </span>
                            <br/>
                            <span className={'underline-grow mb-2'}>
                                <p>Experience</p>
                            </span>
                            <br/>
                            <span className={'underline-grow mb-2'}>
                                <p>Projects</p>
                            </span>
                            <br/>
                            <span className={'underline-grow mb-2'}>
                                <p>Jian Raphael R. Cudiamat</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}