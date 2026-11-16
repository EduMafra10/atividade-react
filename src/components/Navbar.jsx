import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiExternalLink } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { SISTEMA_URL } from '../data/conteudo.js'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/funcionalidades', label: 'Funcionalidades' },
  { to: '/seguranca', label: 'Segurança' },
  { to: '/tecnologias', label: 'Tecnologias' },
  { to: '/equipe', label: 'Equipe' },
]

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" onClick={() => setAberto(false)} aria-label="SafeClick, página inicial">
          <Logo />
        </Link>

        <button className="menu-toggle" onClick={() => setAberto(!aberto)} aria-label="Abrir menu" aria-expanded={aberto}>
          {aberto ? <FiX /> : <FiMenu />}
        </button>

        <nav className={aberto ? 'nav-links aberto' : 'nav-links'}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end onClick={() => setAberto(false)}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-pequeno" href={SISTEMA_URL} target="_blank" rel="noreferrer">
            Acessar <FiExternalLink />
          </a>
        </nav>
      </div>
    </header>
  )
}
