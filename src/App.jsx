import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default Routes;
