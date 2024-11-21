import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'
import {useNavigate} from 'react-router-dom';

function Navbar() {
    const nome = localStorage.getItem("nome");
    const navigate = useNavigate();
    
    function logout(){
        localStorage.removeItem('id_usuario');
        localStorage.removeItem('nome');
        alert('Você foi deslogado e levado novamente a tela de login!');
        navigate('/login');
       
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
                 <li className='navbar-item'><NavLink className='nav-link' to="/">Home</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/login">Login</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/cadastro">Cadastro</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/perfil">Perfil</NavLink></li>
                 </ul>
                 <div className='form-inline my-2 my-lg-0'>
                    <label className='mr-3'>{nome}</label>
                    {nome && <small className="text-danger"><button className='btn btn-danger ms-3' onClick={logout}>Sair</button></small>}
                 </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar