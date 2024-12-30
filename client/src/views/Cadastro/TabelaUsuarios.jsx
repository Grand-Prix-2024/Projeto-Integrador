import React from 'react';
import { useEffect, useState } from 'react';
import styles from './TabelaUsuarios.module.css';
import {Link} from 'react-router-dom';

function TabelaUsuarios({tipo, onDeleteSuccess}) {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        baixarUsuarios();
    }, [])

    async function baixarUsuarios() {
        try {
            const resposta = await fetch(`http://localhost:5000/usuarios`,{
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
            const resposta = await fetch(`http://localhost:5000/usuarios/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            });

            if(!resposta.ok){
                throw new Error('Erro ao deletar usuário', JSON.stringify(resposta));
            }else{
                setUsuarios(usuarios.filter(usuario=>usuario.id !== id));
                onDeleteSuccess();
            }
        } catch (error) {
            console.debug(error);
        }
    }
  
    return (
    <div className={`${styles.usuarios} ${tipo === 'edit' ? styles.edit:''}`}>
        <table className={`${styles.tabelaUsuarios}`}>
            <thead>
                <tr>
                    <th>E-mail</th>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Data de Nascimento</th>
                    <th>CPF</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario)=>(
                    <tr key={usuario.id_usuario}>
                        <td>{usuario.id_usuario}</td>                        
                        <td>{usuario.email}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.sobrenome}</td>
                        <td>{usuario.data_nascimento}</td>
                        <td>{usuario.cpf}</td>
                        {tipo === 'edit' &&
                            <td>
                                <Link to={`/edit_user/${usuario.id_usuario}`} className="btn btn-warning ms-2">Editar</Link>
                                <button className="btn btn-danger ms-2" onClick={()=>deletarUsuario(usuario.id_usuario)}>Deletar</button>
                            </td>
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TabelaUsuarios