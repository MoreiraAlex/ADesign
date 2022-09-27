import styles from '../styles/layout/Header.module.css'

import Logo from '../components/Logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo tittle='ADesign' color='#ffff'/>
    </header>
  )
}
