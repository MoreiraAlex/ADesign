import styles from '../styles/components/Icon.module.css'

export default function Icon({children, size, color}){
    
    const style = {
        fontSize: size,
        lineHeight: size,
        color: color
    }

    return(
        <span className={styles.icon} style={style}>{children}</span>
    )
}