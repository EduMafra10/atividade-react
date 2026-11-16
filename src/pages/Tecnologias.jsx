import PageHeader from '../components/PageHeader.jsx'
import { tecnologias } from '../data/conteudo.js'

export default function Tecnologias() {
  return (
    <>
      <PageHeader
        etiqueta="Tecnologias"
        titulo="Como o SafeClick foi construído"
        texto="Back-end em Python com Flask, banco PostgreSQL e hospedagem na Vercel, em São Paulo."
      />
      <section className="secao">
        <div className="container grid-3">
          {tecnologias.map(({ categoria, icone: Icone, itens }) => (
            <article className="card" key={categoria}>
              <span className="card-icone"><Icone /></span>
              <h3>{categoria}</h3>
              <ul className="tags">
                {itens.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
