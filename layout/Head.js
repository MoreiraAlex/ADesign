import NextHead from 'next/head'

export default function Head() {

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VEN9Z7QGTN');

  
  return (
    <NextHead>
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VEN9Z7QGTN"></script>
      <meta http-equiv="content-language" content="pt-br" />
      <meta name="author" content="Alex Moreira" />
      <meta name="reply-to" content="alexmoreira.dev@gmail.com" />

      <meta name='description' content='Agência de Marketing Digital / Gerenciamento em Redes Sociais / Campanhas Google ADS / Criação de Sites / Planejamento de Marketing Digital'/>

      <meta name="keywords" content="o que é leads no marketing digital, Marketing digital, Agência de marketing, Agência, Fundador, gestor de trafego, Home office, vivendo de home office, amagency, redes sociais, landing page, criação de sites, empresa de criação de sites, design, web design"/>

      {/* <meta name="google-site-verification" content="HxdktV6nr4Ei-DNn_fjAPh2THEuhqRauoNLlPLxgFgs" /> */}

      <link rel="canonical" href="https://amagency.alexmoreira.dev.br/" />
      <link rel="icon" href="/favicon.png" />

      <title>AMAgency</title>
    </NextHead>
  )
}
