import styles from '../styles/components/Input.module.css'

export default function Input({type, placeholder}){

    return(
        <label>
            <input type={type} placeholder={placeholder} required='true' className={styles.input}></input>
        </label>
    )
}