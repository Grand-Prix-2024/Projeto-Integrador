import React from 'react'

function NavbarPerfil() {
  return (
   <nav className='nav'>
    <a href="/" className='site-title'>Site name</a>
    <ul>
        <li>
            <a href="/republicas">República</a>
            </li>
            <li>
            <a href="/sobre"> Sobre nós</a>
        </li>
    </ul>
   </nav>
  )
}

export default NavbarPerfil;