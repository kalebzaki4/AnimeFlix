import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/common/Menu';
import Inicio from './pages/Inicio';
import PaginaDetalhes from './pages/PaginaDetalhes';
import Erro404 from './components/errors/Erro404';
import ResultadoAnimes from './pages/ResultadoAnimes';
import Footer from './components/common/Footer';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Detalhes/:animeId' element={<PaginaDetalhes />} />
        <Route path='/search' element={<ResultadoAnimes />} />
        <Route path='*' element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;