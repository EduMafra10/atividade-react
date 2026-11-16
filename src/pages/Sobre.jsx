import { FiTarget, FiUsers, FiAlertCircle, FiTrendingUp } from 'react-icons/fi'
import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'

const pilares = [
  { icone: FiAlertCircle, titulo: 'O problema', texto: 'Golpes digitais ficam mais convincentes a cada dia, e muita gente só aprende a reconhecê-los depois de cair em um.' },
  { icone: FiTarget, titulo: 'O objetivo', texto: 'Ensinar a identificar golpes e a adotar hábitos mais seguros na internet, com prática e não só teoria.' },
  { icone: FiUsers, titulo: 'Para quem', texto: 'Estudantes do ensino médio e do ensino superior, que passam boa parte do dia conectados.' },
  { icone: FiTrendingUp, titulo: 'Como', texto: 'Simulações com consequência de cada escolha, quizzes corrigidos com explicação e acompanhamento do progresso.' },
]

export default function Sobre() {
  return (
    <>
      <PageHeader
        etiqueta="Sobre o projeto"
        titulo="Segurança digital se aprende praticando"
        texto="O SafeClick é o Projeto Final de Curso (PFC) do curso de Sistemas de Informação da Universidade de Mogi das Cruzes."
      />
      <section className="secao">
        <div className="container grid-2">
          {pilares.map((p) => <Card key={p.titulo} {...p} />)}
        </div>
      </section>
      <section className="secao">
        <div className="container texto-destaque">
          <h2>Errar na simulação para acertar na vida real</h2>
          <p>
            Em vez de só explicar o que é phishing, o SafeClick coloca o estudante diante de um
            e-mail, SMS, chat ou loja falsos. Cada decisão mostra o que aconteceria de verdade
            e aponta, com pistas numeradas, os sinais de que aquilo era um golpe.
          </p>
        </div>
      </section>
    </>
  )
}
