import styles from '../styles/main-layout.module.css';

const LeftColumnContent = ({leftColumn}) => {
    return (
        <section className={`${styles.gridItem} d-flex align-items-center`}>
            {leftColumn}
        </section>
    );
}

const RightColumnContent = ({rightColumn}) => {
    return (
        <aside className={`${styles.gridItem} d-flex align-items-center justify-content-center`}>
            {rightColumn}
        </aside>
    );
}

export default function MainLayout({leftColumn, rightColumn}) {
    return (
        <main className={styles['grid-container']}>
            <LeftColumnContent leftColumn={leftColumn}/>
            <RightColumnContent rightColumn={rightColumn}/>
        </main>
    );
}