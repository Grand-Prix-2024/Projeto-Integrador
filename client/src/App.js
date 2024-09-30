
import './App.css';

import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro';
import Perfil from './views/Perfil/Perfil';
import NavbarPerfil from './components/NavbarPerfil.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/navbarperfil' element={<NavbarPerfil/>}/>
        <Route path='/perfil' element={<Perfil/>}/>   
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;