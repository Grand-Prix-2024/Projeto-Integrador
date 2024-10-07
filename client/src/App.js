
import './App.css';

import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro';
<<<<<<< HEAD
import Perfil from './views/Perfil';
import CadastroRepublica from './views/Cadastro/CadastroRepublica';
=======
import Perfil from './views/Perfil/Perfil';
import NavbarPerfil from './components/NavbarPerfil.jsx';
>>>>>>> 054b5f28f0bbcfa8d80f081d446c086477d5fc67

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/navbarperfil' element={<NavbarPerfil/>}/>
        <Route path='/perfil' element={<Perfil/>}/>   
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/cadastrorepublica' element={<CadastroRepublica/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;