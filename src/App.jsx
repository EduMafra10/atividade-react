import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Funcionalidades from './pages/Funcionalidades.jsx'
import Seguranca from './pages/Seguranca.jsx'
import Tecnologias from './pages/Tecnologias.jsx'
import Equipe from './pages/Equipe.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
