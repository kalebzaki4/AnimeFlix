import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Inicio from './Paginas/Inicio';
import PaginaDetalhes from './Paginas/PaginaDetalhes';
  import Erro404 from './Components/Erro404';
import ResultadoAnimes from './Paginas/ResultadoAnimes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route element={<Inicio />} path='/' />
          <Route element={<PaginaDetalhes />} path='/Detalhes/:id' />
          <Route element={<ResultadoAnimes />} path='/a' />
          <Route element={<Erro404 />} path='*' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
