import styles from '/src/components/UnderlineGrow/underline-grow.module.css';

const UnderLineGrow = ({ children }) => {
    return (
        <div className={`${styles.underlineGrow}`}>
            { children }
        </div>
    )
}

export default UnderLineGrow;