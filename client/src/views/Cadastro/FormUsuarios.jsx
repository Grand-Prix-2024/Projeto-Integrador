import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function FormUsuario({tipo, handleSubmit, textoBotao, id, titulo}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfError, setCpfError] = useState('');

    useEffect(()=>{
        if(id){
            baixarUsuarios(id);
            //setTimeout()
        };
    }, [])

    async function baixarUsuarios(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/usuarios/${id}`,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            if(!resposta){
                throw new Error('Erro ao buscar os usuários');
            }else{
                const respostaJSON = await resposta.json();
                setEmail(respostaJSON.email);
                setSenha(respostaJSON.senha)
                setNome(respostaJSON.nome);
                setSobrenome(respostaJSON.sobrenome);
                setDataNasc(respostaJSON.data_nascimento);
                setCpf(respostaJSON.cpf);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function validarCpf(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
            return false;
        }
        let soma = 0;
        let resto;

        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11))) return false;

        return true;
    }

    function handleCpfChange(e) {
        const value = e.target.value;
        setCpf(value);
        if (!validarCpf(value)) {
            setCpfError('CPF inválido');
        } else {
            setCpfError('');
        }
    }

    

    function submit(e) {
        e.preventDefault();
        if (cpfError) {
            alert('Por favor, corrija os erros antes de enviar.');
            return;
        }

        const usuario = {
            email: email,
            senha: senha,
            nome: nome,
            sobrenome: sobrenome,
            data_nascimento: dataNasc,
            cpf: cpf,
        };
        handleSubmit(usuario, id);
        navigate(`/login`);
    }
  
    return (
        <>
        <div className="container container col-sm-12 col-md-6 col-lg-3  mt-3">
          <h1 className="text-center">{titulo}</h1>
          <form onSubmit={submit}>
            <label className='form-label' htmlFor=""></label>
            <input className='form-control mt-1' type="text" value={email} onChange={(e) => (setEmail(e.target.value))} name='' id='' placeholder='Número de telefone ou e-mail' />

            <label className='form-label' htmlFor=""></label>
            <input className='form-control mt-1' type="password" value={senha} onChange={(e) => (setSenha(e.target.value))} name='' id='' placeholder='Senha' />

            <label className='form-label' htmlFor=""></label>

            <h3 className="fs-5 text-left">Preencha alguns dados:</h3>
            <input className='form-control mt-3' type="text" value={nome} onChange={(e) => (setNome(e.target.value))} name='' id='' placeholder='Nome' />

            <input className='form-control mt-3' type="text" value={sobrenome} onChange={(e) => (setSobrenome(e.target.value))} name='' id='' placeholder='Sobrenome' />

            <label className='form-label mt-3' htmlFor="">Data de nascimento:</label>
            <input className='form-control' type="date" value={dataNasc} onChange={(e) => (setDataNasc(e.target.value))} name='' id='' placeholder='' />

            <input className='form-control mt-3' type="text" value={cpf} onChange={handleCpfChange} name='' id='' placeholder='CPF' />
            {cpfError && <small className="text-danger">{cpfError}</small>}

            <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
            <button className='btn btn-warning mt-3 float-end' type='submit'>{textoBotao}</button>
          </form>
        </div>
      </>
  )
}

export default FormUsuario