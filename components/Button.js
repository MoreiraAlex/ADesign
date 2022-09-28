import styles from '../styles/components/Button.module.css'

import Icon from './Icon'

export default function Btn({children, width, height}){
    return(
        <button className={styles.Btn} style={{width:width, height:height}} type='submit'>
            {children}
            <Icon size='24px' color='#242424'>&#xF231;</Icon>
        </button>
    )
}