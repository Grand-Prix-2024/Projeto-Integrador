import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro.jsx';
import Perfil from './views/Perfil/Perfil.jsx'
import GestaoUser from './views/Cadastro/GestaoUsuarios.jsx'
import EditUsuario from './views/Cadastro/EditUsuario.jsx';
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import FormRepublica from './views/CadastroRep/pages/FormRepublica.jsx';



function App() {
  return (
    
    <BrowserRouter>
     {/* <Global />
     <Home boxData={data} /> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/perfil' element={<Perfil/>}/>   
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/gestao_usuario/' element={<GestaoUser/>}/>
        <Route path='/gestao_usuario/:tipo' element={<GestaoUser/>}/>
        <Route path='/edit_user/:id' element={<EditUsuario/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastrorepublica' element={<FormRepublica/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;