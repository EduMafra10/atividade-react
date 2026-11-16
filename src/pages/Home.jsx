import { Link } from 'react-router-dom'
import { FiArrowRight, FiAlertTriangle, FiKey, FiBookOpen, FiBarChart2 } from 'react-icons/fi'
import { numeros, SISTEMA_URL } from '../data/conteudo.js'

const destaques = [
  { icone: FiAlertTriangle, titulo: 'Simulações de golpe', texto: 'Treine em e-mails, SMS, chats e lojas falsas sem correr risco nenhum.' },
  { icone: FiKey, titulo: 'Laboratório de senhas', texto: 'Teste a força de senhas e descubra quais já vazaram.' },
  { icone: FiBookOpen, titulo: 'Conteúdos e quizzes', texto: 'Aprenda com artigos curtos e confira o que fixou.' },
  { icone: FiBarChart2, titulo: 'Progresso e conquistas', texto: 'Acompanhe sua evolução e desbloqueie conquistas.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="etiqueta">PFC · Sistemas de Informação · UMC</span>
            <h1>Aprenda a reconhecer um golpe <span className="destaque">antes</span> de clicar.</h1>
            <p className="lead">
              O SafeClick é uma plataforma de educação em segurança digital para estudantes
              do ensino médio e da faculdade. Simulações realistas, desafios e conteúdos
              para criar hábitos mais seguros na internet.
            </p>
            <div className="acoes">
              <a className="btn" href={SISTEMA_URL} target="_blank" rel="noreferrer">
                Acessar o SafeClick <FiArrowRight />
              </a>
              <Link className="btn btn-secundario" to="/funcionalidades">Ver funcionalidades</Link>
            </div>
          </div>

          <div className="simulacao" aria-label="Exemplo de e-mail de phishing com pistas marcadas">
            <div className="simulacao-topo">
              <span /><span /><span />
              <small>Caixa de entrada</small>
            </div>
            <div className="simulacao-corpo">
              <p className="mono">De: <mark>suporte@banco-seguro.co</mark> <b>1</b></p>
              <p className="mono">Assunto: Sua conta será bloqueada <mark>HOJE</mark> <b>2</b></p>
              <p>Detectamos um acesso suspeito. Confirme seus dados em até 2 horas para evitar o bloqueio.</p>
              <span className="simulacao-btn">Confirmar dados <b>3</b></span>
            </div>
            <ol className="pistas">
              <li>Domínio estranho, parecido com o original</li>
              <li>Urgência para você agir sem pensar</li>
              <li>Link pedindo dados pessoais</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="secao-numeros">
        <div className="container numeros">
          {numeros.map((n) => (
            <div key={n.rotulo}>
              <strong>{n.valor}</strong>
              <span>{n.rotulo}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <span className="etiqueta">O que tem na plataforma</span>
          <h2>Aprender fazendo, num ambiente seguro</h2>
          <div className="grid-4">
            {destaques.map(({ icone: Icone, titulo, texto }) => (
              <article className="card" key={titulo}>
                <span className="card-icone"><Icone /></span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container cta">
          <div>
            <h2>Quer saber como o sistema protege quem usa?</h2>
            <p>Login com dois fatores, sessões com prazo e senhas que nunca ficam em texto puro.</p>
          </div>
          <Link className="btn" to="/seguranca">Ver segurança <FiArrowRight /></Link>
        </div>
      </section>
    </>
  )
}
