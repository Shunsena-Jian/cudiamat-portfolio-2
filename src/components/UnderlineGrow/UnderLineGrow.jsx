import underlineStyles from 'underline-grow.module.css';

const UnderLineGrow = ({ children }) => {
    return (
        <div className={`${underlineStyles.underlineGrow}`}>
            { children }
        </div>
    )
}

export default UnderLineGrow;