import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-primary'>
            <nav className='container navbar navbar-expand-lg px-2'>
                <div>
                    <span className='navbar-brand'>Hive</span>
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='menu' className='collapse navbar-collapse text-center'>
                    <ul className='navbar-nav mx-auto'>
                    <li className='navbar-item'><NavLink className='nav-link' to="">Login</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/cadastro">Cadastro</NavLink></li>
                    <li className='navbar-item'><NavLink className='nav-link' to="/perfil">Perfil</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar