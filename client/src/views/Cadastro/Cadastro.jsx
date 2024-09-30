import React from 'react'
import './Cad.css';

function Cadastro() {
  return (
    <div>
      <main className='conteudo-site'>
        <div className='tela-inter'>
          <div id='target' className='geral' role='group'>
            <div className='box'>
              <header id='box-header' className='headerCSS'>
                <div className='esp'></div>
                <section>
                  <h1>Bem-Vindo ao Hive</h1>
                </section>
                <div className='esp'></div>
              </header>
              <div className='corpo' aria-labelledby="box-header">
                <div>
                  <div className='boasVindas'>
                    <h2 className='boasTXT'><b>Cadastre-se no Hive</b></h2>
                  </div>
                  <form action="/authenticate" method='POST' noValidate data-testid="auth-form">
                    <div className='cont-campos'>
                      <input type="hidden" name='from' value='email_login' />
                      <input type="hidden" name="airlock_id" value='password_login' />
                      <div className='campos'>
                        <div className='input-container'>
                          <input type="email" name="" id="" placeholder='E-mail' />
                          <div class="separator"></div>
                          <input type="password" name="" id="" placeholder='Senha' />
                        </div>
                        <br />
                        <div className="botao">
                          <button type="submit" className='btn'
                          ><b>CONTINUAR</b></button>
                        </div>
                        <br />
                        <div className="linha">
                          <hr />
                          <span>ou</span>
                        </div>
                        <div className="alternativos">
                          <div className="outros">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" />
                            <img className='ggl' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />
                            <form action=""></form>
                          </div>
                          <div className="outros">

                            <form action=""></form>
                          </div>
                          <div className="outros">
                            <form action=""></form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cadastro