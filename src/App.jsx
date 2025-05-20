import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Menu from './components/common/Menu';
import Inicio from './pages/Inicio';
import PaginaDetalhes from './pages/PaginaDetalhes';
import Erro404 from './components/errors/Erro404';
import ResultadoAnimes from './pages/ResultadoAnimes';
import Footer from './components/common/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useAuth } from './context/AuthContext';
import Populares from './pages/Populares';
import Novidades from './pages/Novidades';
import AZ from './pages/AZ';
import Simulcasts from './pages/Simulcasts';
import Calendario from './pages/Calendario';
import Videoclipes from './pages/Videoclipes';

// App principal com rotas e alertas globais
function App() {
  const { alert } = useAuth();

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Menu />
      {alert && (
        <div className={`popup-alert popup-${alert.type}`}>
          {alert.message}
        </div>
      )}
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Detalhes/:animeId' element={<PaginaDetalhes />} />
        <Route path='/search' element={<ResultadoAnimes />} />
        <Route path='/popular' element={<Populares />} />
        <Route path='/novidades' element={<Novidades />} />
        <Route path='/az' element={<AZ />} />
        <Route path='/simulcasts' element={<Simulcasts />} />
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/videoclipes' element={<Videoclipes />} />
        <Route path='*' element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;