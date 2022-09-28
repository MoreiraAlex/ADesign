import styles from '../styles/layout/Footer.module.css'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>ADesign &copy; 2022 Todos os direitos reservados</p>
      <p>Desenvolvido por <a href="https://github.com/MoreiraAlex" target="_blank">Alex Moreira</a></p>
    </footer>
  )
}
