import React from 'react'
import './Cad.css';
import Navbar from '../../components/Navbar';
import FormUsuario from './FormUsuarios';

function Cadastro() {
  async function cadastrarUsuario(infoUser) {
    try {
      const resposta = await fetch(`${process.env.REACT_APP_BACKEND}/usuarios`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(infoUser)
      });
      if(!resposta.ok){
        console.log('Erro ao cadastrar usuário');
        
      }else{
        console.log('Usuário cadastrado')
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error)
      console.log(error)
    }
  }
  
  return (
    <div>
      <Navbar />
      <FormUsuario titulo='Cadastre-se no Hive' textoBotao='Cadastrar' handleSubmit={cadastrarUsuario}/>
    </div>
  )
}

export default Cadastro;