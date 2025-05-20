import styles from '/src/styles/main.module.css';

export default function Main() {
    return (
        <section className={'main-section container-fluid'}>
            <div className={'row'}>
                <div className={'col-12 col-sm-6 d-flex align-items-end'}>
                    <p className={`${styles.tenPx}`}>Something</p>
                </div>
                <div className={'col-sm-3 d-none d-sm-block'}>

                </div>
                <div className={'col-12 col-sm-3 d-flex align-items-end justify-content-end'}>
                    <p className={`${styles.tenPx} text-end`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </section>
    )
}