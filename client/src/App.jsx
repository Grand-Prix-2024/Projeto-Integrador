import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro.jsx';
import Perfil from './views/Perfil/Perfil.jsx'
import GestaoUser from './views/Cadastro/GestaoUsuarios.jsx'
import EditUsuario from './views/Cadastro/EditUsuario.jsx';
import Login from './views/Login/Login.jsx';
import Home from './views/Home/Home.jsx';
import EditarPerfil from './views/Perfil/EditPerfil.jsx';
import Homecasas from './views/Home/HomeCasas.jsx';
import FormRepublica from './views/CadastroRep/pages/FormRepublica.jsx';
import PrivacyPolicy from './views/Home/Privacidade.jsx';
import TermosDeServico from './views/Home/Termos.jsx';
import DetalhesDaEmpresa from './views/Home/DetalhesEmpresa.jsx';




function App() {
  return (

    <BrowserRouter>
      {/* <Global />
     <Home boxData={data} /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/perfil/:id_usuario' element={<Perfil />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/gestao_usuario/' element={<GestaoUser />} />
        <Route path='/gestao_usuario/:tipo' element={<GestaoUser />} />
        <Route path='/edit_user/:id' element={<EditUsuario />} />
        <Route path='/login' element={<Login />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path='/casas' element={<Homecasas/>} />
        <Route path='/cadastrar_republica' element={<FormRepublica/>} />
        <Route path='/privacidade' element={<PrivacyPolicy/>} />
        <Route path='/termos' element={<TermosDeServico/>} />
        <Route path='/detalhes' element={<DetalhesDaEmpresa/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
