import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Teste() {
  const [objetoTeste, setObjetoTeste] = useState({ nome: '', sobrenome: '' });
  const navigate = useNavigate();

  function alterarObjeto(event) {
    const { name, value } = event.target;
    setObjetoTeste((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  }

  function irParaProximaTela() {
    navigate('/proxima', { state: objetoTeste });
  }

  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input
        name="nome"
        type="text"
        value={objetoTeste.nome}
        onChange={alterarObjeto}
      />
      <label htmlFor="sobrenome">Sobrenome</label>
      <input
        name="sobrenome"
        type="text"
        value={objetoTeste.sobrenome}
        onChange={alterarObjeto}
      />
      <button onClick={irParaProximaTela}>Próxima Tela</button>
    </>
  );
}

export default Teste;
