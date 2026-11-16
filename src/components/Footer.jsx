import { Link } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { REPO_URL } from '../data/conteudo.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Logo />
          <p>Projeto Final de Curso de Sistemas de Informação, Universidade de Mogi das Cruzes (UMC), 2026.</p>
        </div>
        <div className="footer-links">
          <Link to="/sobre">Sobre</Link>
          <Link to="/funcionalidades">Funcionalidades</Link>
          <Link to="/equipe">Equipe</Link>
          <a href={REPO_URL} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        </div>
      </div>
    </footer>
  )
}
