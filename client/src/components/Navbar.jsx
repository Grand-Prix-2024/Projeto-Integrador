import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { useNavigate } from 'react-router-dom';
import hivelogo from './img/hivelogo.png';

function Navbar() {
    const nome = localStorage.getItem("nome");
    const idUsuario = localStorage.getItem("id_usuario");
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('id_usuario');
        localStorage.removeItem('nome');
        alert('Você foi deslogado e levado novamente a tela de login!');
        navigate('/login');
    }

    return (
        <div id={styles.navCor} className={`bg-primary ${styles.menu_navegacao} `}>
            <nav className={`container navbar navbar-expand-lg px-2 `}>
                <div className='logo-image'>
                    <img src={hivelogo} alt="" width="100px"/>
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='menu' className='collapse navbar-collapse text-center'>
                    <ul className='navbar-nav mx-auto'>
                        <li className='navbar-item'><NavLink className='nav-link' to="/">Home</NavLink></li>
                        {!idUsuario && (
                            <>
                                <li className='navbar-item'><NavLink className='nav-link' to="/login">Login</NavLink></li>
                                <li className='navbar-item'><NavLink className='nav-link' to="/cadastro">Cadastro</NavLink></li>
                            </>
                        )}
                        <li className='navbar-item'><NavLink className='nav-link' to="/cadastrorepublica">Cadastre uma república</NavLink></li>
                    </ul>
                    {idUsuario && (
                        <div className="dropdown">
                            <button 
                                className="btn dropdown-toggle bg-transparent border-0 text-black" 
                                type="button" 
                                id="dropdownMenuButton" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                {nome || "Usuário"}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <NavLink className="dropdown-item" to={`/perfil/${idUsuario}`}>Perfil</NavLink>
                                </li>
                                <li>
                                    <button 
                                        className="dropdown-item text-danger" 
                                        onClick={logout}
                                    >
                                        Sair
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
