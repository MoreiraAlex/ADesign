import styles from '../styles/components/Button.module.css'

import Icon from './Icon'

export default function Btn({children}){
    return(
        <button className={styles.Btn} type='submit'>
            {children}
            <Icon size='24px' color='#242424'>&#xF231;</Icon>
        </button>
    )
}