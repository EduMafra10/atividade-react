import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'
import { medidasSeguranca, fluxoLogin } from '../data/conteudo.js'

export default function Seguranca() {
  return (
    <>
      <PageHeader
        etiqueta="Segurança"
        titulo="Uma plataforma de segurança precisa ser segura"
        texto="O sistema aplica na prática as boas práticas que ensina."
      />
      <section className="secao">
        <div className="container">
          <h2 className="titulo-grupo">Como funciona o login</h2>
          <ol className="fluxo">
            {fluxoLogin.map((f) => (
              <li key={f.passo}>
                <span className="mono">{f.passo}</span>
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="secao">
        <div className="container">
          <h2 className="titulo-grupo">Medidas de proteção</h2>
          <div className="grid-3">
            {medidasSeguranca.map((m) => <Card key={m.titulo} {...m} />)}
          </div>
        </div>
      </section>
    </>
  )
}
