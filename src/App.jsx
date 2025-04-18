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
        <Route path='*' element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;