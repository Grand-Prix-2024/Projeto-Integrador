import React from 'react'


function Cadastro() {
  return (
    <div class="tela">
      <div class="cadastro">
        <header>Bem-vindo(a) ao Hive!</header>
        <h1>Cadastre-se.</h1>
        <div class="campo">
          {/*Campo de nome*/}
          <input type="text" class="campo_Cad" placeholder='Nome Completo' required />
          <br/>
          {/*Campo de email*/}
          <input type="email" class="campo_Cad" placeholder='E-mail' required />
          <br/>
          {/*Campo de cpf*/}
          <input type="text" class="campo_Cad" placeholder='CPF' required />
          <br/>
          {/*Campo de data de nascimento*/}
          <input type="date" class="campo_Cad" placeholder='Data de Nascimento' required />
          <br/>
          {/*Campo de data de telefone*/}
          <input type="tel" class="campo_Cad" placeholder='Número de telefone' required />
          <br/>
          {/*Campo de data de senha*/}
          <input type="password" class="campo_Cad" placeholder='Senha' required />
          <br/>
          {/*Campo de data de repetir senha*/}
          <input type="password" class="campo_Cad" placeholder='Repita sua senha' required />
          <br/>
        </div>
      </div>
      {/*botao cadastro*/}
      <button>Cadastrar</button>
    </div>
  )
}

export default Cadastro