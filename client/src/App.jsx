
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro.jsx';
import Perfil from './views/Perfil/Perfil.jsx'
import GestaoUser from './views/Cadastro/GestaoUsuarios.jsx'
import EditUsuario from './views/Cadastro/EditUsuario.jsx';

import React from "react";
// import Global from "./styles/global";
// import Home from "./pages/Home/Home";

// const lorem =
//   "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

// const data = [
//   {
//     id: Math.random(),
//     title: "Box titulo 1",
//     text: lorem,
//     bgColor: "#D5CAFA"
//   },
//   {
//     id: Math.random(),
//     title: "Box titulo 2",
//     text: lorem,
//     bgColor: "#EDA9A9"
//   },
//   {
//     id: Math.random(),
//     title: "Box titulo 3",
//     text: lorem,
//     bgColor: "#F2EE8D"
//   },
//   {
//     id: Math.random(),
//     title: "Box titulo 4",
//     text: lorem,
//     bgColor: "#9FEACD"
//   }
// ];





function App() {
  return (
    
    <BrowserRouter>
     {/* <Global />
     <Home boxData={data} /> */}
      <Routes>
        <Route path='/perfil' element={<Perfil/>}/>   
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/gestao_usuario/' element={<GestaoUser/>}/>
        <Route path='/gestao_usuario/:tipo' element={<GestaoUser/>}/>
        <Route path='/edit_user/:id' element={<EditUsuario/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;