import styles from '../styles/layout/Main.module.css'

import Input from '../components/Input'
import Btn from '../components/Button'
import Icon from '../components/Icon'
import Background from '../components/Background'

export default function Main() {
  return (
    <main className={styles.main}>
      <section>
        <Background color='#242424' opacity='70%' width='100vw' height='100vh'></Background>

        <div>
          <p>Vamos juntos fazer o seu marketing digital ter resultados da geração de leads até a venda</p>
          <div>
            <h2>Solicite um orçamento</h2>
            <form>
              <Input type='text' placeholder='Nome'/>
              <Input type='email' placeholder='E-mail'/>
              <Input type='tel' placeholder='Telefone'/>
              <textarea>Mais informações</textarea>
              <Btn>Enviar</Btn>
            </form>
          </div>
        </div>
        <div>
          <p>Nós podemos ajudar você tambem.</p>
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
