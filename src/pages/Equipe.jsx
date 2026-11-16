import { FiGithub } from 'react-icons/fi'
import PageHeader from '../components/PageHeader.jsx'
import { equipe, orientacao, REPO_URL } from '../data/conteudo.js'

function Pessoa({ nome, papel, iniciais }) {
  return (
    <article className="card pessoa">
      <span className="avatar">{iniciais}</span>
      <h3>{nome}</h3>
      <p>{papel}</p>
    </article>
  )
}

export default function Equipe() {
  return (
    <>
      <PageHeader
        etiqueta="Equipe"
        titulo="Quem fez o SafeClick"
        texto="Alunos do 8º semestre de Sistemas de Informação da UMC."
      />
      <section className="secao">
        <div className="container">
          <h2 className="titulo-grupo">Desenvolvedores</h2>
          <div className="grid-3">
            {equipe.map((p) => <Pessoa key={p.nome} {...p} />)}
          </div>
        </div>
      </section>
      <section className="secao">
        <div className="container">
          <h2 className="titulo-grupo">Orientação</h2>
          <div className="grid-2">
            {orientacao.map((p) => <Pessoa key={p.nome} {...p} />)}
          </div>
        </div>
      </section>
      <section className="secao">
        <div className="container cta">
          <div>
            <h2>Código aberto</h2>
            <p>O repositório do sistema está público no GitHub.</p>
          </div>
          <a className="btn" href={REPO_URL} target="_blank" rel="noreferrer"><FiGithub /> Ver repositório</a>
        </div>
      </section>
    </>
  )
}
