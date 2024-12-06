import React from 'react'
import { useState, } from 'react';
import { Navigate } from 'react-router-dom';

function ImgPerfil() {
    //const [imagens, setImagens] = useState([]);
    const [imagem, setImagem] = useState(null);
    //const [descricao, setDescricao] = useState('');
    //const [idUsuario, setUsuario] = useState('');
    //const navigate = useNavigate();
    //const [login, setLogin] = useState('');
    //const [funcao,setFuncao] = useState('')

    async function carregarImagens() {
        try {
            const resposta = await fetch('http://localhost:5000/imagem', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!resposta) {
                throw new Error('Erro ao buscar imagens');
            }
            const consulta = await resposta.json();
            //setImagens(consulta);
        } catch (error) {
            console.log('Erro ao buscar imagem', error)

        }
    }

    async function adicionarImagem() {
        const formData = new FormData();
        //formData.append('descricao', descricao);
        formData.append('imagem', imagem);

        try {
            const resposta = await fetch('http://localhost:5000/img_perfil', {
                method: 'PUT',
                body: formData
            })

            if (!resposta) {
                throw new Error('Erro ao adicionar imagem');
            } else {
                carregarImagens();
            }
        } catch (error) {
            throw new Error('Erro ao adicionar imagem', error);
        }

    }

    return (
        <div>
             <input className='form-control' type="file" onChange={e => (setImagem(e.target.files[0]))} />
             <button style={{marginLeft:'125px', marginTop:'25px'}} className='btn btn-success' onClick={adicionarImagem}>Atualizar</button>
        </div>
    )

}

export default ImgPerfil