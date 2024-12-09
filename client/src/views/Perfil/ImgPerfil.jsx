import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from "axios";


 function ImgPerfil() {
  const [imagem, setImagem] = useState(null);
  const [idPerfil, setIdPerfil] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const [caminhoFotoPerfil, setCaminhoFotoPerfil] = useState("");
  const {id} = useParams();
  useEffect(() => {


    const fetchIdPerfil = async () => {
      try {
        const resposta = await fetch("http://localhost:5000/perfil");
        const dados = await resposta.json();
        setIdPerfil(dados.id_perfil); // Supõe que o backend retorna o id_perfil do usuário
      } catch (erro) {
        console.error("Erro ao buscar o ID do perfil:", erro);
      }
    };

    fetchIdPerfil();
  }, []);

  const adicionarImagem = async () => {
    if (!imagem) {
      setMensagem("Selecione uma imagem antes de atualizar.");
      return;
    }

    const formData = new FormData();
    formData.append("imagem", imagem);

    try {
      const resposta = await fetch(`http://localhost:5000/img_perfil/${idPerfil}`, {
        method: "PUT",
        body: formData,
      });

      const resultado = await resposta.json();
      if (resposta.ok) {
        setCaminhoFotoPerfil(resultado.caminho_foto_perfil); // Atualiza o caminho da imagem no estado
        setMensagem("Imagem atualizada com sucesso!");
      } else {
        setMensagem(resultado.message || "Erro ao atualizar imagem.");
      }
    } catch (erro) {
      console.error("Erro ao atualizar imagem:", erro);
      setMensagem("Erro ao atualizar imagem. Tente novamente.");
    }
  };

  useEffect(() => {
    const fetchDadosUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:5000/perfil");
        if (!resposta.ok) throw new Error("Erro ao buscar dados do usuário.");
        const dados = await resposta.json();
        setIdPerfil(dados.id_perfil);
        setCaminhoFotoPerfil(dados.caminho_foto_perfil);
      } catch (erro) {
        console.error("Erro ao buscar dados do usuário:", erro);
        setMensagem("Erro ao carregar informações do perfil.");
      }
    };

    fetchDadosUsuario();
  }, []);


    return (
        <div>
            
             <input className='form-control' type="file" accept='image/*' onChange={e => (setImagem(e.target.files[0]))} />
             <button style={{marginLeft:'125px', marginTop:'25px'}} className='btn btn-success' onClick={adicionarImagem}>Atualizar</button>
        </div>
    )

}

export default ImgPerfil;