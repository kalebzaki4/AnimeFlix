import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Inicio from './Paginas/Inicio';
import PaginaDetalhes from './Paginas/PaginaDetalhes';
import Erro404 from './Components/Erro404';
import ResultadoAnimes from './Paginas/ResultadoAnimes';
import Footer from './Components/Footer';

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