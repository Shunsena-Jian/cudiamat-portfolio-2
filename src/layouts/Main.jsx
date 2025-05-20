import styles from '/src/styles/main.module.css';

export default function Main() {
    return (
        <section className={'main-section container-fluid p-3'}>
            <div className={'row'}>
                <div className={'col-12 col-sm-6 d-flex align-items-end'}>
                    <p className={`${styles.tenPx} ${styles.animateFromLeft}`}>Something</p>
                </div>
                <div className={'col-12 col-sm-6 d-flex flex-column align-items-end justify-content-end'}>
                    <div className={`${styles.tenPx} ${styles.animateFromRight} text-end`}>
                        <p>Based in the Philippines</p>
                        <p>I am a dedicated</p>
                        <p>Full Time Backend Developer</p>
                        <p>with expertise in the Laravel framework</p>
                        <p>passionate about building robust</p>
                        <p>and efficient server-side applications.</p>
                        <p>Driven by a desire to</p>
                        <p>broaden my technical horizons,</p>
                        <p>I am actively pursuing growth to evolve</p>
                        <p>into a versatile Full Stack Developer.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}