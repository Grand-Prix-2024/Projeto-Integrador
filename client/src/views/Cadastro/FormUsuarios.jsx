import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function FormUsuario({ tipo, handleSubmit, textoBotao, id, titulo }) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [senhaError, setSenhaError] = useState('');

    useEffect(() => {
        if (id) {
            baixarUsuarios(id);
        }
    }, [id]);

    async function baixarUsuarios(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/usuarios/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!resposta.ok) {
                throw new Error('Erro ao buscar os usuários');
            }
            const respostaJSON = await resposta.json();
            setEmail(respostaJSON.email);
            setSenha(respostaJSON.senha);
            setNome(respostaJSON.nome);
            setSobrenome(respostaJSON.sobrenome);
            setDataNasc(respostaJSON.data_nascimento);
            setCpf(respostaJSON.cpf);
        } catch (error) {
            console.log(error);
        }
    }

    function validarCpf(cpf) {
        cpf = cpf.replace(/\D/g, '');
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

    function validarSenha(senha) {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return regex.test(senha);
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

    function handleSenhaChange(e) {
        const value = e.target.value;
        setSenha(value);
        if (!validarSenha(value)) {
            setSenhaError('A senha deve conter pelo menos uma letra maiúscula, um número e no mínimo 6 caracteres.');
        } else {
            setSenhaError('');
        }
    }

    function calcularIdade(dataNasc) {
        const hoje = new Date();
        const nascimento = new Date(dataNasc);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }
    

    function submit(e) {
        e.preventDefault();
        if (cpfError || senhaError) {
            alert('Por favor, corrija os erros antes de enviar.');
            return;
        }

        if (!dataNasc || calcularIdade(dataNasc) < 18) {
            alert('Você deve ter pelo menos 18 anos para se cadastrar.');
            return;
        }

        if (!validarSenha(senha)) {
            alert('Senha inválida. Por favor, corrija e tente novamente.');
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
            <div className="container container col-sm-12 col-md-6 col-lg-3 mt-3">
                <h1 className="text-center">{titulo}</h1>
                <form onSubmit={submit}>
                    <label className='form-label' htmlFor=""></label>
                    <input style={{marginBottom:'-29px', borderRadius:'10px 10px 0px 0px', width:'460px', height:'50px', borderColor:'black'}} className='form-control mt-1' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Número de telefone ou e-mail' />

                    <label className='form-label' htmlFor=""></label>
                    <input style={{marginBottom:'5px',borderRadius:'0px 0px 10px 10px', width:'460px', height:'50px', borderColor:'black'}} className='form-control mt-1' type="password" value={senha} onChange={handleSenhaChange} placeholder='Senha' />
                    {senhaError && <small className="text-danger">{senhaError}</small>}

                    <label className='form-label' htmlFor=""></label>
                    <label className='form-label' htmlFor=""></label>

                    <h3 className="fs-5 text-left">Preencha alguns dados:</h3>
                    <input style={{marginBottom:'-17px',borderRadius:'10px 10px 0px 0px', width:'460px', height:'50px', borderColor:'black'}} className='form-control mt-3' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome' />

                    <input style={{marginBottom:'7px',borderRadius:'0px 0px 10px 10px',width:'460px', height:'50px', borderColor:'black' }} className='form-control mt-3' type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder='Sobrenome' />

                    <label style={{marginBottom:'15px',}} className='form-label mt-3' htmlFor="">Data de nascimento:</label>
                    <input style={{width:'460px', height:'50px', borderRadius:'10px', borderColor:'black'}} className='form-control' type="date" value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} />

                    <label style={{marginBottom:'-5px'}} className='form-label mt-3' htmlFor="">CPF:</label>
                    <input style={{width:'460px', height:'50px', borderRadius:'10px', marginBottom:'13px', borderColor:'black'}} className='form-control mt-3' type="text" value={cpf} onChange={handleCpfChange} placeholder='CPF' />
                    {cpfError && <small className="text-danger">{cpfError}</small>}

                    
                    <button style={{backgroundColor:'#78EB78', borderColor:'white',}} className='btn btn-warning mt-3 float-end' type='submit'>{textoBotao}</button>
                </form>
            </div>
        </>
    )
}

export default FormUsuario;
