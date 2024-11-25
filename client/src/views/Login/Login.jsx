import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import styles from './login.module.css';
<link rel="stylesheet" href="login.module.css" />

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function realizarLogin() {
        const dadosLogin = { email, senha };

        try {
            const resposta = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosLogin)
            });

            if (!resposta.ok) {
                alert('E-mail ou senha inválidos!')
                console.log(resposta);
            } else {
                const respostaJSON = await resposta.json();
                console.log(`resposta aqui ${respostaJSON}`)
                localStorage.setItem('id_usuario', respostaJSON.id_usuario);
                localStorage.setItem('email', respostaJSON.email);
                localStorage.setItem('nome', respostaJSON.nome);
                localStorage.setItem('sobrenome', respostaJSON.sobrenome);              
                window.location.href = `/perfil/${respostaJSON.id_usuario}`;
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
            <Navbar />
            <div style={{marginTop:'80px'}} className="container d-flex justify-content-center">
                <div className="com-md-3 mt-5">
                    <h1 className="text-center">Bem-vindo ao Hive!</h1>
                    <h3 className="text-center">Faça Login</h3>
                    <br />                    
                    <input style={{marginBottom:'-5px', borderRadius:'10px 10px 0px 0px',width:'400px', height:'50px', borderColor:'black'}} className="form-control mt-1" type="text" name="" id="" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />           
                    <input style={{marginBottom:'-5px', borderRadius:'0px 0px 10px 10px', width:'400px', height:'50px', borderColor:'black'}} className="form-control mt-1" type="password" name="" id="" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <br />
                    <div className='d-flex justify-content-center'>
                        <button style={{width:'400px', height:'50px', border:'none', borderRadius:'5px', marginTop:'25px', fontWeight:'bold'}} id={styles.botaoCor}  onClick={realizarLogin}>ENTRAR</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
