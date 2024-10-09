import './views/Perfil/'
import './App.css';

import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
<<<<<<< HEAD:client/src/App.jsx
import Cadastro from './views/Cadastro/Cadastro.jsx';
import Perfil from './views/Perfil/Perfil.jsx';
import NavbarPerfil from './components/NavbarPerfil.jsx';
=======
import Cadastro from './views/Cadastro/Cadastro';

import Perfil from './views/Perfil/Perfil.jsx'
import CadastroRepublica from './views/Cadastro/CadastroRepublica';


>>>>>>> 61da3eadfb804c27419bd410a7927476e5ad5760:client/src/App.js

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/perfil' element={<Perfil/>}/>   
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/cadastrorepublica' element={<CadastroRepublica/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;