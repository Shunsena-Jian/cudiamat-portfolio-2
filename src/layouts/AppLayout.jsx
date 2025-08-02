import styles from '../styles/app-layout.module.css';

function AppLayout({ header, content }) {
    return (
        <div className={'d-flex flex-column min-vh-100 p-0'}>
            <header>
                { header }
            </header>
            <main className={styles['main-content']}>
                { content }
            </main>
        </div>
    );
}

export default AppLayout;