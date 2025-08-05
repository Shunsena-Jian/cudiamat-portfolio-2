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
            <RightColumnContent rightColumn={rightColumn}/>
        </main>
    );
}