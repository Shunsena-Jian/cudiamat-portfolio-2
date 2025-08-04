const HeaderLayout = ({ upperContent, lowerContent }) => {
    return (
        <>
            <header className={'header-section p-4'}>
                <div className={'row'}>
                    <div className={'col container-fluid d-flex align-items-start m-0 mb-3'}>
                        { upperContent }
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col container-fluid d-flex align-items-center gap-3'}>
                        { lowerContent }
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderLayout;