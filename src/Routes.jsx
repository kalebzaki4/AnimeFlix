import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu'
import PaginaPadrao from './Components/PaginaPadrao'
function Routes() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routes;
