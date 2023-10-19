import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Inicio from './Paginas/Inicio';
import PaginaDetalhes from './Paginas/PaginaDetalhes/PaginaDetalhes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route element={<Inicio />} path='/' />
          <Route element={<PaginaDetalhes />} path='/Detalhes/:id' />
          <Route element={<h1>Página Não Encontrada</h1>} path='*' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
