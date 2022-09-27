import styles from '../styles/components/Logo.module.css'

import Icon from './Icon'

export default function Logo({tittle, color}){
    return(
        <div className={styles.Logo}>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
            <h1 style={{color: color}}>{tittle}</h1>
            <Icon size='40px' color='#C4C4C4'>&#xF22D;</Icon>
        </div>
    )
}