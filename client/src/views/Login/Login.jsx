import React from 'react'
import Navbar from '../../components/Navbar'

function Login() {
    async function logarUsuario(params) {
        
    }
  
    return (
    <>
        <Navbar/>
        <div className="container container col-sm-12 col-md-6 col-lg-3 mt-3">
            <h1 className="text-center">Login</h1>
            <form action="">
                <label htmlFor=""></label>
                <input className="form-control mt-1" type="text" name="" id="" placeholder='Número de telefone ou e-mail' />

                <label htmlFor=""></label>
                <input className="form-control mt-1" type="password" name="" id="" placeholder='Senha' />
            </form>
        </div>
    </>
  )
}

export default Login;