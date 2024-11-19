
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro';
import Home from './views/Home/Home';
//import Perfil from './views/Perfil';
import CadastroRepublica from './views/Cadastro/CadastroRepublica';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/cadastrorepublica' element={<CadastroRepublica/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;