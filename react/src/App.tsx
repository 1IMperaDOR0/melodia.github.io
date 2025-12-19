import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Artistas from './pages/artistas/Artistas';
import Musicas from './pages/musicas/Musicas';
import Playlists from './pages/playlists/Playlists';
import Conta from './pages/conta/Conta';
import Contato from './pages/contato/Contato';
import MenuWeb from './components/MenuWeb';
import MenuMobile from './components/MenuMobile';
import Footer from './components/Footer';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Router>
      <header className="fixed top-0 w-full z-50 bg-[#7B00FF] text-white h-20 px-15 flex justify-between items-center">
        <h1 className="text-2xl font-bold">melodia</h1>
        {isMobile ? <MenuMobile /> : <MenuWeb />}
      </header>

      <main className="mt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artistas" element={<Artistas />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App