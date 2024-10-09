import React from 'react'
import './Cad.css';
import Navbar from '../../components/Navbar';

function Cadastro() {
  return (
  <div>
    <Navbar/>
    <div className="container">
      <h1 className="text-center">Cadastre-se no Hive</h1>
      <form>
        <label className='form-label' htmlFor=""></label>
        <input className='form-control mt-1' type="text" name='' id='' placeholder='Número de telefone ou e-mail' />
        <label className='form-label' htmlFor=""></label>
        <input className='form-control mt-1' type="password" name='' id='' placeholder='Senha' />
        <label className='form-label' htmlFor=""></label>
        <h3 className="fs-5 text-left">Preencha alguns dados:</h3>
        <input className='form-control mt-3' type="text" name='' id='' placeholder='Nome' />
        <input className='form-control mt-3' type="text" name='' id='' placeholder='Sobrenome' />
        <label className='form-label mt-3' htmlFor="">Data de nascimento:</label>
        <input className='form-control' type="date" name='' id='' placeholder='' />
        <input className='form-control mt-3' type="text" name='' id='' placeholder='CPF' />
        <button className='btn btn-warning mt-3' type='submit'>Continuar</button>
      </form>
    </div>
  </div>
  )
}

export default Cadastro