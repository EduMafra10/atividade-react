export default function Card({ icone: Icone, titulo, texto }) {
  return (
    <article className="card">
      {Icone && <span className="card-icone"><Icone /></span>}
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  )
}
