import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar() {
    const [idUsuario, setidUsuario] = useState('');
    const [nome, setNome] = useState('');

    useEffect(()=>{
        getNome();
        if(idUsuario === ''){
            try {
                const id_usuario = localStorage.getItem('id_usuario');
                if(!id_usuario){
                    console.log('usuario nao logado')
                }else{
                    setidUsuario(id_usuario);
                    getNome(id_usuario);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    
    async function getNome(id_usuario) {
        try {
            const resposta = await fetch(`http://localhost:5000/usuarios/${id_usuario}`);
            const dados = await resposta.json();
            if(dados){
                console.log(dados);
                setNome(dados.nome);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div id={styles.navCor} className={`bg-primary ${styles.menu_navegacao} `}>
            <nav className={`container navbar navbar-expand-lg px-2 `} >
                <div>
                    <span className='navbar-brand'>Hive</span>
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='menu' className='collapse navbar-collapse text-center'>
                 <ul className='navbar-nav mx-auto'>
                    <li className='navbar-item'><NavLink className='nav-link' to="/login">Login</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/cadastro">Cadastro</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/perfil">Perfil</NavLink></li>
                 </ul>
                 <div className='form-inline my-2 my-lg-0'>
                    <p htmlFor="" className='mr-3'>{nome}</p>
                 </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar