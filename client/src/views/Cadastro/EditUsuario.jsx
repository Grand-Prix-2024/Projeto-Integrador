import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import FormUsuario from './FormUsuarios';


function EditUsuario() {
  const {id} = useParams();
  async function EditarUsuario(infoUser, id) {
    try {
      const resposta = await fetch(`http://localhost:5000/usuarios/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(infoUser)
      });
      if(!resposta.ok){
        const retorno = await resposta.json();
        console.log('Erro ao editar usuário', retorno)
      }else{
        console.log('User editado')
      }
    } catch (error) {
     console.log('Erro ao editar', error)
    }
}


  return (
    <div>
      <Navbar/> 
      <FormUsuario titulo='Editar Usuário' textoBotao='Salvar' id={id} handleSubmit={EditarUsuario} tipo='editada'/>
    </div>
  )
}

export default EditUsuario;