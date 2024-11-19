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

    function submit(e){
        e.preventDefault();
        const usuario = {
            email:email,
            senha:senha,
            nome:nome,
            sobrenome:sobrenome,
            data_nascimento:dataNasc,
            cpf:cpf
        }
        handleSubmit(usuario,id);
        navigate(`/gestao_usuario/${tipo}`)
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

            <input className='form-control mt-3' type="text" value={cpf} onChange={(e => (setCpf(e.target.value)))} name='' id='' placeholder='CPF' />

            <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
            <button className='btn btn-warning mt-3 float-end' type='submit'>{textoBotao}</button>
          </form>
        </div>
      </>
  )
}

export default FormUsuario