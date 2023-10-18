import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu';
import Inicio from './Paginas/Inicio';
import PaginaDetalhes from './Paginas/PaginaDetalhes/PaginaDetalhes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu/>

        <Routes>
          <Route Component={Inicio} path='/'/>
          <Route Component={PaginaDetalhes} path='/Detalhes'/>
          <Route element={<h1>Pagina Não encontrada</h1>} path='*'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
