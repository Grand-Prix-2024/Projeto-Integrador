import React from 'react'
import './Cad.css';
import user from "./img/user_icon.png"
import email from "./img/email.png"
import senha from "./img/senha.png"
import phone from "./img/fone.png"
import data from "./img/data.png"

function Cadastro() {
  return (
    <div className="container">
      <div className="header">
        <div className="texto">Cadastrar-se</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} />
          <input type="text" placeholder='Nome' required />
        </div>
        <div className="input">
          <img src={user} />
          <input type="text" placeholder='Sobrenome'  required/>
        </div>
        <div className="input">
          <img src={email} alt="" />
          <input type="email" placeholder='E-mail' required/>
        </div>
        <div className="input">
          <img src={data} alt="" />
          <input type="date" />
        </div>
        <div className="input">
          <img src={phone} alt="" />
          <input type="tel" placeholder='Núm. Telefone'/>
        </div>
        <div className="input">
          <img src={senha} alt="" />
          <input type="password" placeholder='Senha' required/>
        </div>
        <div className="input">
          <img src={senha} alt="" />
          <input type="password" placeholder='Repita a senha' required/>
        </div>
      </div>
      <div className="forgot-pass">Esqueci minha senha? <span>Clique aqui.</span></div>
      <div className="submit-container">
        <div className="submit">Cadastrar-se</div>
        <div className="submit">Entrar</div>
      </div>
    </div>
  )
}

export default Cadastro