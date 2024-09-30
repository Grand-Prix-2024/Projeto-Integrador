import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Botao from "./Botao";


function NavbarPerfil() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
            HIVE <i className="fab fa-typo3"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Perfil
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/favoritos' className='nav-links' onClick={closeMobileMenu}>
                    Favoritos
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/chat' className='nav-links' onClick={closeMobileMenu}>
                    Chat
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/registrar' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Registrar
                    </Link>
                </li>
            </ul>
            {button && <Botao buttonStyle='btn--outline'>REGISTRAR</Botao>}
        </div>
    </nav>
    </>
  )
}

export default NavbarPerfil;