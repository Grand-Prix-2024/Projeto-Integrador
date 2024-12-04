import React from 'react'
import { useState } from 'react';

function ImagemPerfil() {
    const [imagens, setImagens] = useState([]);
    const [imagem, setImagem] = useState(null);

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
            setImagens(consulta);
        } catch (error) {
            console.log('Erro ao buscar imagem', error)

        }
    }


    async function cadastroImagemPerfil() {
        const formData = new FormData();
        formData.append('imagem', imagem);

        try {
            const resposta = await fetch('http://localhost:5000/imagem', {
                method: 'POST',
                body: formData
            })

            if (!resposta) {
                throw new Error('Erro ao cadastrar imagem');
            } else {
                carregarImagens();
            }
        } catch (error) {
            throw new Error('Erro ao cadastrar imagem', error);
        }

    }

    return cadastroImagemPerfil();

}

export default ImagemPerfil;