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
import { useAuth } from './context/AuthContext'; // Import AuthContext

function App() {
  const { alert } = useAuth(); // Removed clearAlert

  return (
    <BrowserRouter>
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
        <Route path='/Detalhes/:animeId' element={<PaginaDetalhes />} /> {/* Rota correta */}
        <Route path='/search' element={<ResultadoAnimes />} />
        <Route path='*' element={<Erro404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;