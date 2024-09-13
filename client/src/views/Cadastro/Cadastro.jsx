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
                    <h1>Entrar ou Cadastrar-se</h1>
                  </section>
                <div className='esp'></div>
              </header>
              <div className='corpo' aria-labelledby="box-header">
                <div>
                  <div className='boasVindas'>
                    <h2 className='boasTXT'>Bem-vindo ao Hive</h2>
                  </div>
                  <form action="/authenticate" method='POST' noValidate data-testid="auth-form">
                    <div className='cont-campos'>
                      <input type="hidden" name='from' value='' />
                      <input type="hidden" name="airlock_id" id="" />
                      <div className='campos'>
                        <div className='primeiro-campo'>
                          <input type="text" />
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