import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-header nao-encontrado">
      <div className="container">
        <span className="etiqueta mono">Erro 404</span>
        <h1>Esse link não leva a lugar nenhum.</h1>
        <p className="lead">Pelo menos não era um golpe. Volte para a página inicial.</p>
        <Link className="btn" to="/">Ir para o início</Link>
      </div>
    </section>
  )
}
