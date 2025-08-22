import mainStyles from '../styles/main-layout.module.css';

const RightColumnContent = ({rightColumn}) => {
    return (
        <aside className={`${mainStyles.gridItem} d-flex align-items-center`}>
            {rightColumn}
        </aside>
    );
}

export default function MainLayout({leftColumn, rightColumn}) {
    const [upperRow, middleRow, lowerRow] = leftColumn;
    const [upperRightRow, lowerRightRow] = rightColumn;

    return (
        <main className={mainStyles['grid-container']}>
            <div className={mainStyles['left-column']}>
                <section className={`${mainStyles.gridItem} d-flex align-items-center`}>
                    {upperRow}
                </section>
                <section className={`${mainStyles.gridItem} d-flex align-items-center`}>
                    {middleRow}
                </section>
                <section className={`${mainStyles.gridItem} d-flex align-items-center`}>
                    {lowerRow}
                </section>
            </div>
            <div className={mainStyles['right-column']}>
                <section className={`${mainStyles.gridItem} d-flex align-items-center`}>
                    {upperRightRow}
                </section>
                <section className={`${mainStyles.gridItem} d-flex align-items-center justify-content-center`}>
                    {lowerRightRow}
                </section>
            </div>
        </main>
    );
}