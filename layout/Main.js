import styles from '../styles/layout/Main.module.css'

import Input from '../components/Input'
import Btn from '../components/Button'
import Icon from '../components/Icon'

export default function Main() {
  return (
    <main>
      <section className={styles.content}>
        <div className={styles.area1}>
          <h2>Vamos juntos fazer o seu marketing digital ter resultados da geração de leads até a venda</h2>
          <div className={styles.area}>
            <h2>Solicite um orçamento</h2>
            <form>
              <Input type='text' placeholder='Nome'/>
              <Input type='email' placeholder='E-mail'/>
              <Input type='tel' placeholder='Telefone'/>
              <label><textarea placeholder='Mais informações'></textarea></label>
              <Btn width='40%' height='10%'>Enviar</Btn>
            </form>
          </div>
        </div>
        <div className={styles.area2}>
          <p>Nós podemos ajudar você tambem</p>
          <div>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
            <Icon size='40px' color='#C4C4C4'>&#xF231;</Icon>
          </div>
        </div>
      </section>
    </main>
  )
}
