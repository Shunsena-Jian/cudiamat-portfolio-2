const HeaderLayout = ({ upperContent, lowerContent }) => {
    return (
        <>
            <div className={'header-section'}>
                <div className={'row'}>
                    <div className={'col container-fluid d-flex p-4'}>
                        { upperContent }
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col container-fluid d-flex pt-0 p-4'}>
                        { lowerContent }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderLayout;