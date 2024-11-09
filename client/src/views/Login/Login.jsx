import React, { useState } from 'react'
import Navbar from '../../components/Navbar'

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function realizarLogin() {
        const dadosLogin = {email, senha};

        try {
            const resposta = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosLogin)
            });

            if(!resposta.ok){
                alert('E-mail ou senha inválidos!')
            }else{
                const respostaJSON= await resposta.json();
                localStorage.setItem('id_usuario', respostaJSON.id_usuario);
                window.location.href='/';
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container d-flex justify-content-center">
                <div className="com-md-3 mt-5">
                    <h1 className="text-center">Login</h1>
                        <label htmlFor="">E-mail</label>
                        <input className="form-control mt-1" type="text" name="" id="" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="">Senha</label>
                        <input className="form-control mt-1" type="password" name="" id="" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-warning mt-3' onClick={realizarLogin}>Entrar</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Login;
