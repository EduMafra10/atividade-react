import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'
import { funcionalidades } from '../data/conteudo.js'

export default function Funcionalidades() {
  return (
    <>
      <PageHeader
        etiqueta="Funcionalidades"
        titulo="Tudo o que o SafeClick oferece"
        texto="Da criação da conta até a área administrativa, cada parte foi pensada para ensinar e proteger."
      />
      {funcionalidades.map((g) => (
        <section className="secao" key={g.grupo}>
          <div className="container">
            <h2 className="titulo-grupo">{g.grupo}</h2>
            <div className="grid-3">
              {g.itens.map((item) => <Card key={item.titulo} {...item} />)}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
