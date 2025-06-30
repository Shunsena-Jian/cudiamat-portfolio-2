import underlineStyles from './underline-grow.module.css';

const UnderLineGrow = ({ children, isActive }) => {
    const activeClass = isActive ? underlineStyles.active : '';

    return (
        <div className={`${underlineStyles.underlineGrow} ${activeClass}`}>
            { children }
        </div>
    )
}

export default UnderLineGrow;