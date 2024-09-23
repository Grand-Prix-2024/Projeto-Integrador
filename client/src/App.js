
import './App.css';

import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro';
import Perfil from './views/Perfil';
import CadastroRepublica from './views/Cadastro/CadastroRepublica';

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