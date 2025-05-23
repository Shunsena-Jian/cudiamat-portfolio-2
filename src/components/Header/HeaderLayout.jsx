const HeaderLayout = ({ children }) => {
    return (
        <nav className={'navbar navbar-expand-lg'}>
            <div className={'container-fluid p-3'}>
                { children }
            </div>
        </nav>
    )
}

export default HeaderLayout;