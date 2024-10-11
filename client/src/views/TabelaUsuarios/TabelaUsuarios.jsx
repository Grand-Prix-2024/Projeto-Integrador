import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../TabelaUsuarios/TabelaUsuarios.module.css'
import {Link} from 'react-router-dom';

function TabelaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        baixarUsuarios();
    }, [])

    async function baixarUsuarios() {
        try {
            const resposta = await fetch('http//localhost:5000/usuarios',{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            if(!resposta){
                throw new Error('Erro ao buscar os usuários');
            }
            const consulta = await resposta.json();
            setUsuarios(consulta);
        } catch (error) {
            console.log('Erro ao consultar os usuários', error);
        }
    }

    async function deletarUsuario(id) {
        try {
            const resposta = await fetch(`http:localhost:5000/usuarios/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            if(!resposta.ok){
                throw new Error('Erro ao deletar usuário', JSON.stringify(resposta));
            }else{
                setUsuarios(usuarios.filter(usuario=>usuario.id !== id));
                //função de deletar
            }
        } catch (error) {
            
        }
    }
  
    return (
    <div className={`${styles.usuarios}`}>
        <table className={`${styles.tabelaUsuarios}`}>
            <thead>
                <tr>
                    <th>E-mail</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Data de Nascimento</th>
                    <th>CPF</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario)=>(
                    <tr key={usuario.id}>
                        <td>email={usuario.email}</td>
                        <td>nome={usuario.senha}</td>
                        <td>sobrenome={usuario.sobrenome}</td>
                        <td>data_nascimento={usuario.data_nascimento}</td>
                        <td>cpf={usuario.cpf}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TabelaUsuarios